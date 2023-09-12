import {
  CloseOutlined,
  DeleteOutlined,
  DownloadOutlined,
  EditOutlined,
  FilterOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import { Button, Input, Modal, Popover, Space, Table } from "antd";
import React, { useCallback, useMemo, useState } from "react";
import { PageContainer } from "@ant-design/pro-components";
import { useNavigate } from "react-router-dom";
import { dataSourceNews, dataSourceUser } from "../../DataDemo";
import FilterUser from "../../../FormFilter/FilterUser";
import { read, utils, writeFileXLSX } from "xlsx";

function TableCustomer(props) {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const { confirm } = Modal;

  const renameColumn = dataSourceUser.map((item) => ({
    "Tên khách hàng": item.name,
    "Tên đăng nhập": item.username,
    "Số điện thoại": item.phone,
    Email: item.email,
    "Địa chỉ": item.address,
    "Ngày tạo": item.createdDate,
    "Ngày cập nhật": item.updateDate,
  }));

  const hanldeExportFile = () => {
    const ws = utils.json_to_sheet(renameColumn);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "Khách hàng");
    writeFileXLSX(wb, "Danh sách khách hàng.xlsx");
  };

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const showhowConfirm = () => {
    confirm({
      title: "Xoá người dùng ",
      content:
        "Việc này sẽ xóa người dùng được chọn. Bạn có chắc chắn muốn xóa?",
      // onOk: handleDeleteAll,
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  // Khi select sẽ hiện thị chọn bao nhiêu
  const hasSelected = selectedRowKeys.length > 0;

  const columns = [
    {
      title: "STT",
      dataIndex: "key",
      rowScope: "row",
      width: 50,
    },
    {
      title: "Tên Khách hàng",
      dataIndex: "name",
    },
    {
      title: "Tên đăng nhập",
      dataIndex: "username",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
    },
    {
      title: "Ngày tạo",
      dataIndex: "createdDate",
    },
    {
      title: "Ngày cập nhật",
      dataIndex: "updateDate",
    },
    {
      title: "Action",
      key: "action",
      render: (e, record, idx) => (
        <Space>
          {/* <Button className="update" icon={<EditOutlined />}></Button> */}
          <Button className="delete" icon={<DeleteOutlined />}></Button>
          <Button className="detail" icon={<SolutionOutlined />}></Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <PageContainer
        title="Tất cả khách hàng"
        extra={[
          <Space>
            <Input.Search />,
            <Popover content={<FilterUser />} trigger="click">
              <Button className="border-1677ff text-1677ff">
                <FilterOutlined />
                Lọc
              </Button>
            </Popover>
            <Button
              icon={<DownloadOutlined />}
              // export excel
              // onClick={handleExportExcel}
              onClick={hanldeExportFile}
              // export excel
              className="border-1677ff text-1677ff"
            >
              Export Excel
            </Button>
          </Space>,
        ]}
      >
        <Table
          rowKey={"key"}
          // rowKey={"idUser"}
          columns={columns}
          dataSource={dataSourceUser}
          size="middle"
          rowSelection={rowSelection}
          pagination={{
            pageSize: 50,
          }}
          scroll={{
            y: 413,
          }}
          x
          // loading={loading}
        />
        <div
          className="absolute bottom-6"
          style={{ display: hasSelected ? "block" : "none" }}
        >
          <>Đã chọn {selectedRowKeys.length}</>
          <Button
            className="bg-white ml-2.5 py-1 px-2.5"
            onClick={() => {
              showhowConfirm();
            }}
            disabled={selectedRowKeys.length === 0}
          >
            <CloseOutlined />
            Xoá
          </Button>
        </div>
      </PageContainer>
    </div>
  );
}

export default TableCustomer;

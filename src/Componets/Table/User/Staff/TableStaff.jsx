import {
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
  FilterOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import { Button, Input, Modal, Popover, Space, Table } from "antd";
import React, { useState } from "react";
import { PageContainer } from "@ant-design/pro-components";
import { useNavigate } from "react-router-dom";
import { dataSourceUser } from "../../DataDemo";
import FilterUser from "../../../FormFilter/FilterUser";

function TableStaff(props) {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { confirm } = Modal;

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const showhowConfirm = () => {
    confirm({
      title: "Xoá nhân viên ",
      content:
        "Việc này sẽ xóa nhân viên được chọn. Bạn có chắc chắn muốn xóa?",
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
      title: "Tên nhân viên",
      dataIndex: "name",
    },
    {
      title: "Tên đăng nhập",
      dataIndex: "userName",
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
      width: 90,
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
        title="Tất cả nhân viên"
        extra={[
          <Space>
            <Input.Search />,
            <Popover content={<FilterUser />} trigger="click">
              <Button className="border-1677ff text-1677ff">
                <FilterOutlined />
                Lọc
              </Button>
            </Popover>
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

export default TableStaff;

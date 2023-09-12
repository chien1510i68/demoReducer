import { PageContainer } from "@ant-design/pro-components";
import { Button, Drawer, Input, Modal, Popover, Space, Table } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
  FilterOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import { dataSourceES } from "../DataDemo";
import AddEditES from "../../AddEdit/AddEditES/AddEditES";

function ExamSchedule(props) {
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState();
  const [openDrawer, setOpenDrawer] = useState();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const { confirm } = Modal;

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
  const hasSelected = selectedRowKeys.length > 0;

  const navigate = useNavigate();

  const columns = [
    {
      title: "Tên khu vực",
      dataIndex: "nameArea",
    },
    {
      title: "Tên trường thi ",
      dataIndex: "nameExamSchool",
    },
    {
      title: "Thời gian thi ",
      dataIndex: "examTime",
    },
    {
      title: "Hạn đăng ký",
      dataIndex: "registrationTerm",
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
          <Button
            className="update"
            icon={<EditOutlined />}
            onClick={() => {
              setOpenModal(true);
            }}
          ></Button>
          <Button className="delete" icon={<DeleteOutlined />}></Button>
          <Button
            className="detail"
            icon={<SolutionOutlined />}
            onClick={() => {
              setOpenDrawer(true);
              //   navigate(`/adminpage/user/detailuser/${record.id}`);
            }}
          ></Button>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <PageContainer
        title="Lịch Thi"
        extra={[
          <Space>
            <Button
              className="bg-1677ff text-white hover:bg-white"
              onClick={() => {
                setOpenModal(true);
              }}
            >
              + Thêm lịch thi
            </Button>
            ,
            <Input.Search />,{/* Thay đổi content */}
            <Popover content={""} trigger="click">
              <Button className="border-1677ff text-1677ff">
                <FilterOutlined />
                Lọc
              </Button>
            </Popover>
          </Space>,
        ]}
      >
        {/* Thêm + cập nhật nguời dùng */}
        <AddEditES
          onSuccess={() => {
            // Hàm gọi danh sách Lịch thi
            setOpenModal(false);
          }}
          openModal={openModal}
          onOpenChange={(open) => {
            if (!open) {
              setOpenModal(false);
              // set lại giá trị hiện tại
            }
          }}
          // data = state chứa giá trị hiện tại
        />

        {/* Hiển thị thông tin chi tiết của người dùng  */}
        <Drawer>
          {/* <DetailUser
            title="Thông tin chi tiết về lịch thi"
            width={550}
            open={openDrawer}
            onClose={() => {
              setOpenDrawer(false);
            }}
          /> */}
        </Drawer>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={dataSourceES}
          size="middle"
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

export default ExamSchedule;

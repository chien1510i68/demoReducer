import { PageContainer } from "@ant-design/pro-components";
import { Button, Drawer, Input, Popover, Space, Table } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  DeleteOutlined,
  EditOutlined,
  FilterOutlined,
  SolutionOutlined,
} from "@ant-design/icons";

function Document(props) {
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState();
  const [openDrawer, setOpenDrawer] = useState();

  const navigate = useNavigate();

  const columns = [
    {
      title: "Tên tài liệu",
      dataIndex: "",
    },
    {
      title: "Nội dung ",
      dataIndex: "",
    },

    {
      title: "Lệ phí dự thi",
      dataIndex: "",
    },
    {
      title: "Loại tài liệu",
      dataIndex: "",
    },
    {
      title: "Ngày tạo",
      dataIndex: "",
    },
    {
      title: "Ngày cập nhật",
      dataIndex: "",
    },
    {
      title: "Action",
      key: "action",
      render: (e, record, idx) => (
        <Space>
          <Button className="update" icon={<EditOutlined />}></Button>
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
        title="Tài liệu"
        extra={[
          <Space>
            <Button
              className="bg-1677ff text-white hover:bg-white"
              onClick={() => {
                setOpenModal(true);
              }}
            >
              + Thêm tài liệu
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
        {/* <AddEditUser
          onSuccess={() => {
            // Hàm gọi danh sách người dùng
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
        /> */}

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
          columns={columns}
          // dataSource={}
          size="middle"
          // loading={loading}
        />
      </PageContainer>
    </div>
  );
}

export default Document;

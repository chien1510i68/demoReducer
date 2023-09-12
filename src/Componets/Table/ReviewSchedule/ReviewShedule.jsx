import {
  DeleteOutlined,
  EditOutlined,
  FilterOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import { PageContainer } from "@ant-design/pro-components";
import { Button, Input, Popover, Space, Table } from "antd";
import React from "react";
import FilterEdu from "../../FormFilter/FilterEdu";

function ReviewShedule(props) {
  const columns = [
    {
      title: "Tên lịch ôn tập",
      dataIndex: "",
    },
    {
      title: "Lịch học",
      dataIndex: "",
    },
    {
      title: "Số buổi",
      dataIndex: "",
    },
    {
      title: "Lộ trình đào tạo",
      dataIndex: "",
    },
    {
      title: "Hình thức học",
      dataIndex: "",
    },
    {
      title: "Ngày tạo ",
      dataIndex: "",
    },
    {
      title: "Ngày cập nhật",
      dataIndex: "",
    },
    {
      title: "Chi phí học",
      dataIndex: "",
    },
    {
      title: "Action",
      key: "action",
      render: (e, record, idx) => (
        <Space>
          <Button className="update" icon={<EditOutlined />}></Button>
          <Button className="delete" icon={<DeleteOutlined />}></Button>
          <Button className="detail" icon={<SolutionOutlined />}></Button>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <PageContainer
        title="Các chương trình ôn tập"
        extra={[
          <Button className="bg-1677ff text-white hover:bg-white">
            + Thêm lịch ôn tập
          </Button>,
          <Input.Search />,
          <Popover content={<FilterEdu />} trigger="click">
            <Button className="border-1677ff text-1677ff">
              <FilterOutlined />
              Lọc
            </Button>
          </Popover>,
        ]}
      >
        <Table
          columns={columns}
          // dataSource={}
          size="middle"
        />
      </PageContainer>
    </div>
  );
}

export default ReviewShedule;

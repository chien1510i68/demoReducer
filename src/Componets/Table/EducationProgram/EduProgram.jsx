import {
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
  FilterOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import { PageContainer, useEditableArray } from "@ant-design/pro-components";
import { Button, Drawer, Input, Modal, Popover, Space, Table } from "antd";
import React, { useEffect, useState } from "react";
import FilterEdu from "../../FormFilter/FilterEdu";
import AddEditEp from "../../AddEdit/AddEditEP/AddEditEp";
import { dataSourceEP } from "../DataDemo";
import { getListService } from "../../../Services/lead";
import { useNavigate } from "react-router-dom";
import DetailEdu from "../../Details/DetailEdu/DetailEdu";

function EduProgram(props) {
  const [openModal, setOpenModal] = useState();
  const [openDrawer, setOpenDrawer] = useState();
  const [currentEP, setCurrentEP] = useState([]);
  const [data, setData] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const { confirm } = Modal;
  const navigate = useNavigate();

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

  // getALl
  const handleGetEP = () => {
    getListService().then((res) => {
      setData(res?.data?.data?.items);
    });
  };
  // Lọc từ bảng service các dữ liệu thuộc EP
  const dataED = data.filter(
    (Edu) => Edu.typeOfService === "EDUCATION_PROGRAM"
  );
  // console.log("dataED", dataED);
  useEffect(() => {
    handleGetEP();
  }, []);

  const columns = [
    {
      title: "Tên chương trình học",
      dataIndex: "name",
    },
    {
      title: "Lịch học",
      dataIndex: "schedule",
    },
    {
      title: "Số buổi",
      dataIndex: "numberTeachingSessions",
    },

    {
      title: "Hình thức học",
      dataIndex: "learnOnlineOrOffline",
    },
    {
      title: "Chi phí học",
      dataIndex: "coursePrice",
    },
    {
      title: "Ngày tạo ",
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
              navigate(`/adminpage/eduprogram/detaileduprogram/${record.id}`);
            }}
          ></Button>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <PageContainer
        title="Các chương trình Anh ngữ"
        extra={[
          <Button
            className="bg-1677ff text-white hover:bg-white"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            + Thêm chương trình
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
        {/* Thêm + cập nhật chương trình */}
        <AddEditEp
          onSuccess={() => {
            // Hàm gọi danh sách các chương trình
            setOpenModal(false);
          }}
          openModal={openModal}
          onOpenChange={(open) => {
            if (!open) {
              setOpenModal(false);
              setCurrentEP({});
            }
          }}
          data={currentEP}
        />
        <Table
          rowSelection={rowSelection}
          rowKey={"key"}
          columns={columns}
          // dataSource={dataSourceEP}
          dataSource={dataED}
          size="middle"
        />
        <Drawer
          title="Thông tin chi tiết chương trình học"
          width={600}
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
          extra={
            <Space>
              <Button onClick={() => setOpenDrawer(false)}>Quay lại</Button>
            </Space>
          }
        >
          <DetailEdu />
        </Drawer>
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

export default EduProgram;

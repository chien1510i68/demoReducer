import { PageContainer } from "@ant-design/pro-components";
import { Button, Drawer, Dropdown, Input, Popover, Space, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  DeleteOutlined,
  DownOutlined,
  EditOutlined,
  FilterOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import AddEditNews from "../../AddEdit/AddEditNews/AddEditNews";
import { deleteNews, getListNews } from "../../../Services/lead";
import DetaiNews from "../../Details/DetailNews/DetaiNews";
import { dataSourceNews } from "../DataDemo";

function TableNews(props) {
  const [loading, setLoading] = useState(true);
  const [dataNews, setDataNews] = useState([]);
  const [openModal, setOpenModal] = useState();
  const [openDrawer, setOpenDrawer] = useState();
  const navigate = useNavigate();

  // Hàm lấy thông tin Tin Tức
  const handleGetNews = () => {
    setLoading(true);
    getListNews().then((res) => {
      setDataNews(res?.data?.data?.items);
    });
  };

  // delete each news
  const handleDelNews = (id) => {
    deleteNews(id).then((res) => {
      if (res.status === 200) {
        handleGetNews();
      }
    });
  };

  useEffect(() => {
    handleGetNews();
  }, []);

  const columns = [
    {
      title: "Tên tin tức",
      dataIndex: "name",
    },
    {
      title: "Ảnh",
      dataIndex: "image",
      // render: (imageURL) => (
      render: (imagePath) => (
        // console.log(imagePath),
        <img
          // src={imageURL}
          src={imagePath}
          alt={imagePath}
          style={{ width: "150px", height: "150px" }}
        />
      ),
    },
    {
      title: "Nội dung",
      dataIndex: "content",
      ellipsis: true,
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
              // set lại giá trị hiện tại
              setOpenModal(true);
            }}
          ></Button>
          <Button
            className="delete"
            icon={<DeleteOutlined />}
            onClick={() => {
              handleDelNews(record.id);
            }}
          ></Button>
          <Button
            className="detail"
            icon={<SolutionOutlined />}
            onClick={() => {
              setOpenDrawer(true);
              navigate(`/adminpage/news/detailnews/${record.id}`);
            }}
          ></Button>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <PageContainer
        title="Tin tức"
        extra={[
          <Space>
            <Button
              className="bg-1677ff text-white hover:bg-white"
              onClick={() => {
                setOpenModal(true);
              }}
            >
              + Thêm tin tức
            </Button>
            ,
            <Input.Search />,{/* Thay content của filter */}
            <Popover content={""} trigger="click">
              <Button className="border-1677ff text-1677ff">
                <FilterOutlined />
                Lọc
              </Button>
            </Popover>
          </Space>,
        ]}
      >
        {/* Hàm tạo + Edit */}
        <AddEditNews
          onSuccess={() => {
            // Hàm gọi danh sách Tin Tức
            setOpenModal(false);
          }}
          openModal={openModal}
          onOpenChange={(open) => {
            if (!open) {
              setOpenModal(false);
              // Set lại giá trị hiện tại
            }
          }}
          // data hiện tại
          // data={}
        />
        <Table
          columns={columns}
          dataSource={dataNews}
          // dataSource={dataSourceNews}
          size="middle"
          pagination={{
            pageSize: 50,
          }}
          scroll={{
            y: 413,
          }}
          // loading={loading}
        />
        <Drawer
          title="Thông tin chi tiết tin tức"
          width={600}
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
          extra={
            <Space>
              <Button onClick={() => setOpenDrawer(false)}>Quay lại</Button>
            </Space>
          }
        >
          <DetaiNews />
        </Drawer>
      </PageContainer>
    </div>
  );
}

export default TableNews;

import { PageContainer } from "@ant-design/pro-components";
import {
  Button,
  Drawer,
  Input,
  Modal,
  Popconfirm,
  Popover,
  Space,
  Table,
} from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  DeleteOutlined,
  EditOutlined,
  FilterOutlined,
  SolutionOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import AddEditUser from "../../AddEdit/AddEditUser/AddEditUser";
import DetailUser from "../../Details/DetailUser/DetailUser";
import FilterUser from "../../FormFilter/FilterUser";
import {
  delAllUser,
  deleteUser,
  filterUser,
  getListUser,
} from "../../../Services/lead";
import { dataSourceUser } from "../DataDemo";

function TableUser(props) {
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState();
  const [openDrawer, setOpenDrawer] = useState();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [searchData, setSearchData] = useState();
  const [dataUser, setDataUser] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
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
      onOk: handleDeleteAll,
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  // Hàm lấy thông tin của người dùng
  const handleGetUser = () => {
    setLoading(true);
    getListUser()
      .then((res) => {
        setDataUser(res?.data?.data?.items);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Hàm xóa từng người dùng
  // const handleDelete = (idUser) => {
  //   deleteUser(idUser).then((res) => {
  //     if (res.status === 200) {
  //       handleGetUser();
  //     }
  //   });
  // };

  // Hàm xóa nhiều người dùng
  // Khi select sẽ hiện thị chọn bao nhiêu
  const hasSelected = selectedRowKeys.length > 0;
  const handleDeleteAll = () => {
    delAllUser(selectedRowKeys)
      .then((res) => {})
      .catch((error) => {
        console.error("Lỗi xóa người dùng", error);
      });
  };

  // Hàm tìm kiếm người dùng
  const handleSearch = (e) => {
    setSearchData(e.target.value);
  };

  const handleSearchUser = (values) => {
    filterUser({
      userName: values,
    }).then((res) => {
      if (res.status === 200) {
        setDataUser(res?.data?.data?.items);
      }
    });
  };

  // Hàm lọc người dùng
  const handleFilter = (values) => {
    filterUser(values).then((res) => {
      if (res.status === 200) {
        setDataUser();
      }
    });
  };

  useEffect(() => {
    handleGetUser();
    setLoading(false);
  }, []);

  const columns = [
    {
      title: "Tên người dùng ",
      dataIndex: "name",
    },
    {
      title: "Tên đăng nhập",
      dataIndex: "username",
    },
    {
      title: "Mật khẩu",
      dataIndex: "password",
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
      title: "Ngày tạo",
      dataIndex: "createdDate",
      width: 90,
    },
    {
      title: "Ngày cập nhật",
      dataIndex: "updateDate",
    },
    {
      title: "Vai trò",
      dataIndex: ["role", "name"],
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
              setCurrentUser(record);
              setOpenModal(true);
            }}
          ></Button>
          <Button
            className="delete"
            icon={<DeleteOutlined />}
            onClick={() => {
              // handleDelete(record.idUser);
            }}
          ></Button>
          <Button
            className="detail"
            icon={<SolutionOutlined />}
            onClick={() => {
              console.log("drawer");
              setOpenDrawer(true);
              navigate(`/adminpage/user/detailuser/${record.userId}`);
            }}
          ></Button>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <PageContainer
        title="Tất cả User"
        extra={[
          <Space>
            <Button
              className="bg-1677ff text-white hover:bg-white"
              onClick={() => {
                setOpenModal(true);
              }}
            >
              + Thêm người dùng
            </Button>
            ,
            <Input.Search
              placeholder="Nhập tên người dùng"
              onChange={handleSearch}
              value={searchData}
              onSearch={(values) => {
                handleSearchUser(values);
              }}
            />
            ,
            <Popover
              content={
                // Thay đổi FilterCustomer đúng với người dùng
                <FilterUser
                  onSearch={(values) => {
                    handleFilter(values);
                  }}
                  getUser={() => {
                    // handleGetUser();
                  }}
                />
              }
              trigger="click"
            >
              <Button className="border-1677ff text-1677ff">
                <FilterOutlined />
                Lọc
              </Button>
            </Popover>
          </Space>,
        ]}
      >
        {/* Thêm + cập nhật nguời dùng */}
        <AddEditUser
          onSuccess={() => {
            // Hàm gọi danh sách người dùng
            // handleGetUser();
            setOpenModal(false);
          }}
          openModal={openModal}
          onOpenChange={(open) => {
            if (!open) {
              setOpenModal(false);
              // set lại giá trị hiện tại
              setCurrentUser({});
            }
          }}
          // data = state chứa giá trị hiện tại
          data={currentUser}
        />

        {/* Hiển thị thông tin chi tiết của người dùng  */}
        <Drawer
          title="Thông tin chi tiết của người dùng"
          width={550}
          open={openDrawer}
          onClose={() => {
            setOpenDrawer(false);
          }}
          extra={
            <Space>
              <Button
                onClick={() => {
                  setOpenDrawer(false);
                }}
              >
                Quay lại
              </Button>
            </Space>
          }
        >
          <DetailUser />
        </Drawer>
        <Table
          rowKey={"key"}
          // rowKey={"idUser"}
          size="middle"
          rowSelection={rowSelection}
          columns={columns}
          dataSource={dataUser}
          // dataSource={dataSourceUser}
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

export default TableUser;

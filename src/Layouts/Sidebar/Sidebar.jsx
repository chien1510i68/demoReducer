import React from "react";
import {
  TeamOutlined,
  ReadOutlined,
  ScheduleOutlined,
  CalendarOutlined,
  FileTextOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu } from "antd";
import "./sidebar.css";

function Sidebar(props) {
  const location = useLocation();
  const navigate = useNavigate();

  const checkPathname = () => {
    const pathname = location.pathname;
    if (pathname.includes("/adminpage/user")) {
      return "1";
    }
    if (pathname.includes("/adminpage/staff")) {
      return "2";
    }
    if (pathname.includes("/adminpage/customer")) {
      return "3";
    }
    if (pathname.includes("/adminpage/eduprogram")) {
      return "4";
    }
    if (pathname.includes("/adminpage/examschedule")) {
      return "6";
    }
    if (pathname.includes("/adminpage/mocktest")) {
      return "11";
    }
  };
  const items = [
    {
      label: "Quản lý người dùng",
      key: "user",
      icon: <TeamOutlined />,
      children: [
        {
          label: "Tất cả người dùng",
          key: "1",
          onClick: () => {
            navigate("/adminpage/user");
          },
        },
        {
          label: "Nhân viên",
          key: "2",
          onClick: () => {
            navigate("/adminpage/staff");
          },
        },
        {
          label: "Khách hàng",
          key: "3",
          onClick: () => {
            navigate("/adminpage/customer");
          },
        },
      ],
    },
    {
      label: "Chương trình Anh ngữ",
      key: "4",
      icon: <ReadOutlined />,
      onClick: () => {
        navigate("/adminpage/eduprogram");
      },
    },
    {
      label: "Đăng ký tư vấn",
      key: "5",
      icon: <ReadOutlined />,
    },
    {
      label: "Lịch thi",
      key: "6",
      icon: <ScheduleOutlined />,
      onClick: () => {
        navigate("/adminpage/examschedule");
      },
    },
    {
      label: "Lịch ôn tập",
      key: "7",
      icon: <CalendarOutlined />,
    },
    {
      label: "Tin tức",
      key: "8",
      icon: <FileTextOutlined />,
      onClick: () => {
        navigate("/adminpage/news");
      },
    },
    {
      label: "Tài liệu",
      key: "9",
      icon: <ReadOutlined />,
      onClick: () => {
        navigate("/adminpage/document");
      },
    },
    {
      label: "Phân quyền",
      key: "10",
      icon: <UserSwitchOutlined />,
    },
    {
      label: "Thi thử ",
      key: "11",
      icon: <FileTextOutlined />,
      onClick: () => {
        navigate("/adminpage/mocktest");
      },
    },
  ];
  return (
    <div>
      <div className="p-2.5 m-2.5 bg-white ">logo</div>
      
      <Menu
        theme="dark"
        mode="inline"
        items={items}
        defaultSelectedKeys={checkPathname}
        defaultOpenKeys={["user"]}
      />
    </div>
  );
}

export default Sidebar;

import {
  DeleteFilled,
  RollbackOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import { Button, Popconfirm, Tabs } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import ColapseContest from "./ColapseContest";
function Contest(props) {
  const navigate = useNavigate();
  const handleDeleteData = () => {
    const data = JSON.parse(localStorage.getItem("listContest"));
    localStorage.setItem('listContest' , JSON.stringify(null))
    console.log(data);
  };
  const items = [
    {
      key: "1",
      label: (
        <Button
          className="bg-teal-400 font-medium text-white ml-8 "
          onClick={() => navigate("/adminpage/create-question")}
        >
          TẠO PHẦN MỚI
        </Button>
      ),
      //   children:(),
    },
    {
      key: "2",
      label: (
        <Button className="bg-teal-400 font-medium text-white  ">
          XEM TRƯỚC DANH SÁCH CÁC PHẦN CỦA BÀI THI
        </Button>
      ),
      children: (
        <>
          <ColapseContest />
        </>
      ),
    },
    {
      key: "3",
      label: (
        <Button
          className="bg-orange-500 font-medium text-white ml-8 "
          onClick={() => navigate("/adminpage/mocktest")}
          icon={<RollbackOutlined />}
        >
          QUAY LẠI
        </Button>
      ),
    },
    {
      key: "4",
      label: (
        <Button
          className="bg-lime-600 font-medium uppercase text-white "
          //   onClick={() => navigate("/adminpage/mocktest")}
          icon={<SaveOutlined />}
        >
          lưu bài thi
        </Button>
      ),
    },
    {
      key: "5",
      label: (
        <Popconfirm
          placement="bottom"
          title={"Bạn có chắc chắn muốn hủy bài thi này"}
          description={
            "Nếu bạn đồng ý mọi dữ liệu được tạo trước đó đều bị xóa mất và không thể khôi phục lại"
          }
          onConfirm={handleDeleteData}
          okText="Yes"
          cancelText="No"
        >
          <Button
            className="bg-red-600 font-medium uppercase text-white "
            //   onClick={() => navigate("/adminpage/mocktest")}
            icon={<DeleteFilled />}
          >
            hủy bài thi
          </Button>
        </Popconfirm>
      ),
    },
  ];

  return (
    <div>
      <Tabs defaultValue={2} items={items} />
    </div>
  );
}

export default Contest;

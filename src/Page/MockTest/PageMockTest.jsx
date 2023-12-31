import React, { useContext } from "react";
import { AppContext } from "../../Componets/AppContext/AppContext";
import { Button, message } from "antd";
import { useNavigate } from "react-router-dom";
function PageMockTest() {
  const { data, dispatch } = useContext(AppContext);
  const navigate = useNavigate();
  const handleCreate = () => {
    message.info("Clicked");
  };
  // const  =
  return (
    <div className="bg-gray-800 text-white">
      {/* <Button className='bg-teal-400 font-medium text-white ml-8 my-8' onClick={()=> navigate("/adminpage/create-question")}>TẠO PHẦN MỚI</Button> */}
      <div className="flex justify-start ml-[10%] py-5 ">
        <Button
          className="uppercase font-medium text-white bg-teal-400 mr-[1%]"
          onClick={() => navigate("/adminpage/contest")}
        >
          Tạo bài thi mới{" "}
        </Button>
        <Button className="uppercase font-medium text-white bg-teal-400 ">
          Xem thông tin các bài thi
        </Button>
      </div>
      {/* <span className='block mx-auto text-center'>Phần này để thông tin thống kê số lượng người làm câu hỏi  và tìm kiếm các câu hỏi có trong cơ sở dữ liệu </span> */}
    </div>
  );
}

export default PageMockTest;

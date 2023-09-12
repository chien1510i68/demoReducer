import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getInforService } from "../../../Services/lead";
import { Descriptions } from "antd";

function DetailEdu(props) {
  const location = useLocation();
  const [detailEP, setDetailEP] = useState({});
  const eduInfor = location.pathname.split("/");
  const idPath = eduInfor[eduInfor.length - 1];

  const handleGetInforService = async (idPath) => {
    getInforService(idPath).then((res) => {
      if (res.status === 200) {
        setDetailEP(res?.data?.data);
      }
    });
  };

  console.log("detailEP", detailEP);

  useEffect(() => {
    handleGetInforService(idPath);
  }, [idPath]);

  return (
    <div>
      <Descriptions>
        <Descriptions.Item label="Tên Chương trình" span={4}>
          {detailEP?.name}
        </Descriptions.Item>
        <Descriptions.Item label="Mô tả" span={4}>
          {detailEP?.description}
        </Descriptions.Item>
        <Descriptions.Item label="Mục tiêu" span={4}>
          {detailEP?.studyGoals}
        </Descriptions.Item>
        <Descriptions.Item label="Lịch học" span={4}>
          {detailEP?.schedule}
        </Descriptions.Item>
        <Descriptions.Item label="Lộ trình đào tạo" span={4}>
          {detailEP?.curriculum}
        </Descriptions.Item>
        <Descriptions.Item label="Hình thức học" span={4}>
          {detailEP?.learnOnlineOrOffline}
        </Descriptions.Item>
        <Descriptions.Item label="Chi phí" span={4}>
          {detailEP?.coursePrice}
        </Descriptions.Item>
        <Descriptions.Item label="Yêu cầu đầu vào" span={4}>
          {detailEP?.requestStudents}
        </Descriptions.Item>
        <Descriptions.Item label="Ngày tạo" span={4}>
          {detailEP?.createdDate}
        </Descriptions.Item>
        <Descriptions.Item label="Ngày cập nhật" span={4}>
          {detailEP?.updateDate}
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
}

export default DetailEdu;

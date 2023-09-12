import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getInforNews } from "../../../Services/lead";
import { Descriptions, Image } from "antd";

function DetaiNews(props) {
  const location = useLocation();
  const [dataNews, setDataNews] = useState({});
  const newsInfor = location.pathname.split("/");
  const idPath = newsInfor[newsInfor.length - 1];

  const handleGetInforNews = async (idPath) => {
    getInforNews(idPath).then((res) => {
      if (res.status === 200) {
        setDataNews(res?.data?.data);
      }
    });
  };

  useEffect(() => {
    handleGetInforNews(idPath);
  }, [idPath]);

  return (
    <div>
      <Descriptions>
        <Descriptions.Item label="Tên tin tức" span={4}>
          {dataNews?.name}{" "}
        </Descriptions.Item>
        <Descriptions.Item label="Ảnh" span={4}>
          <Image src={dataNews.image} alt={dataNews.image} />
        </Descriptions.Item>
        <Descriptions.Item label="Ngày tạo ">
          {dataNews?.createdDate}{" "}
        </Descriptions.Item>
        <Descriptions.Item label="Ngày cập nhật" span={2}>
          {dataNews?.updateDate}{" "}
        </Descriptions.Item>
        <Descriptions.Item label="Nội dung tin tức">
          {dataNews?.content}{" "}
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
}

export default DetaiNews;

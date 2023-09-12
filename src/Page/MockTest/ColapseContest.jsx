import React, { useEffect, useState } from "react";
import { Button, Collapse, Modal, notification } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";



function CollapseContest(props) {
  const [data , setData] = useState(null)
const handleData = ()=>{

  setData (JSON.parse(localStorage.getItem("listContest")));
}
useEffect(()=>{
  handleData()
},[localStorage.getItem('listContest')])
  const [activeKey, setActiveKey] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (item) => {
    setIsModalOpen(true);
    console.log(item.title);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const test = (value) => {
    // console.log(value.listQuestion.);
  };

  const items = data?.map((item, index) => {
    const itemsNest = item.listQuestion?.map((question, questionIndex) => ({
      key: `${index}-${questionIndex}`,
      label: (
        <div className="flex justify-between">
          <p>{question.content} </p>
        </div>
      ),
      children: (
        <>
          <div
            className={`answer ${
              activeKey.includes(`${index}-${questionIndex}`) ? "open" : ""
            }`}
          >
            {question.listAnswer?.map((answer, answerIndex) => (
              <p className="ml-2 mb-1" key={answerIndex}>
                {" "}
                - {answer.answer}
              </p>
            ))}
          </div>
        </>
      ),
    }));

    return {
      key: index,
      label: (
        <div className="flex justify-between items-center">
          <h2>{item.title}</h2>
        </div>
      ),
      children: (
        <Collapse items={itemsNest} onChange={(keys) => setActiveKey(keys)} />
      ),
    };
  });

  return (
    <>
    

      {/* <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal> */}
      <Collapse items={items}/>
    </>
  );
}

export default CollapseContest;

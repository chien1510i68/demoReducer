import React from "react";
import {
  ProForm,
  ProFormDatePicker,
  ProFormDateRangePicker,
  ProFormText,
} from "@ant-design/pro-components";
import { Button, Form } from "antd";

function FilterUser(props) {
  return (
    <>
      {/* <h1 className="mt-0 font-semibold text-3xl mb-2 ">Lọc</h1> */}
      <ProForm
      // submitter={false}
      >
        <ProFormDateRangePicker />
        <ProFormText
          width="md"
          name="username"
          label="Username"
          placeholder="Username"
        />
        <ProFormText
          width="md"
          name="name"
          label="Tên người dùng"
          placeholder="Tên người dùng"
        />
        <ProFormDateRangePicker
          width="md"
          name="dateOfBirth"
          label="Ngày sinh"
          placeholder="Ngày sinh"
        />
        <ProFormText
          width="md"
          name="phone"
          label="Số điện thoại "
          placeholder="Số điện thoại "
        />
        <ProFormText
          width="md"
          name="email"
          label="E-mail "
          placeholder="E-mail "
        />
        <ProFormText
          width="md"
          name="address"
          label="Địa chỉ "
          placeholder="Địa chỉ "
        />
      </ProForm>
      {/* <Form.Item> */}
      {/* <Button
          className="bg-white text-black ml-1.5"
          style={{ border: "1px solid #d9d9d9" }}
          type="primary"
          htmlType="submit"
        >
          Lọc
        </Button> */}
      {/* <Button
          style={{
            backgroundColor: "#fff",
            color: "#000",
            marginLeft: 5,
            border: "1px solid #d9d9d9",
          }}
          type="primary"
          onClick={() => {}}
          // onCancel={handleCancel}
        >
          Hủy
        </Button> */}
      {/* </Form.Item> */}
    </>
  );
}

export default FilterUser;

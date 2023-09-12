import {
  ModalForm,
  ProForm,
  ProFormDatePicker,
  ProFormSwitch,
  ProFormText,
} from "@ant-design/pro-components";
import React, { useState } from "react";
import { createUser, updateUser } from "../../../Services/lead";
import { message } from "antd";
import "../modal.css";
import moment from "moment";

function AddEditUser({ onSuccess, openModal, data, onOpenChange }) {
  const [isAdmin, setIsAdmin] = useState();
  // Hàm tạo người dùng
  const handleCreatUser = (values) => {
    createUser(values).then((res) => {
      if (res.data.success === true) {
        message.success("Tạo người dùng thành công");
        onSuccess();
      } //Validate ở đây
    });
  };

  // Hàm cập nhật người dùng
  const handleUpdateUser = (values) => {
    updateUser(data.idUser, values).then((res) => {
      if (res.data.success === true) {
        message.success("Cập nhật người dùng thành công");
        onSuccess();
      } // validate các giá trị
    });
  };

  return (
    <>
      <ModalForm
        title={
          data?.idUser
            ? "Chỉnh sửa thông tin người dùng"
            : "Thêm người dùng mới"
        }
        initialValues={data}
        modalProps={{
          destroyOnClose: true,
        }}
        open={openModal}
        onFinish={async (values) => {
          if (data?.idUser) {
            handleUpdateUser(values);
          } else {
            handleCreatUser(values);
          }
        }}
        onOpenChange={onOpenChange}
      >
        <ProForm.Group>
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
          <ProFormText
            width="md"
            name="password"
            label="Mật khẩu"
            placeholder="Mật khẩu"
          />
          <ProFormDatePicker
            width="md"
            name="dateOfBirth"
            label="Ngày sinh"
            placeholder="Ngày sinh"
            fieldProps={{
              format: "DD/MM/YYYY",
              transform: (value) => moment(value).format("DD/MM/YYYY"),
            }}
          />
          <ProFormText
            width="md"
            name="phone"
            label="Số điện thoại"
            placeholder="Số điện thoại"
          />
          <ProFormText
            width="md"
            name="email"
            label="E-mail"
            placeholder="E-mail"
          />
          <ProFormText
            width="md"
            name="address"
            label="Địa chỉ"
            placeholder="Địa chỉ"
          />
          <ProFormText
            width="md"
            name="avatar"
            label="Avatar"
            placeholder="Avatar"
          />
          <ProFormSwitch
            name="isSuperAdmin"
            label="Is Admin"
            fieldProps={{
              onChange: (checked) => setIsAdmin(checked),
            }}
          />
        </ProForm.Group>
      </ModalForm>
    </>
  );
}

export default AddEditUser;

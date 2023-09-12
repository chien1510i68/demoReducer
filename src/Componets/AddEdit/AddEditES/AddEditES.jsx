import { ModalForm, ProForm, ProFormText } from "@ant-design/pro-components";
import React from "react";
function AddEditES({ onSuccess, openModal, data, onOpenChange }) {
  return (
    <>
      <ModalForm
        title={
          data?.idArea ? "Chỉnh sửa thông tin lịch thi" : "Thêm lịch thi mới"
        }
        initialValues={data}
        modalProps={{
          destroyOnClose: true,
        }}
        open={openModal}
        onFinish={(values) => {
          // Gọi hàm cập nhật và hàm tạo
        }}
        onOpenChange={onOpenChange}
      >
        <ProForm.Group>
          <ProFormText
            width="md"
            name="Tên trường trong request"
            label="Tên trường"
            placeholder="Tên trường"
          />
        </ProForm.Group>
      </ModalForm>
    </>
  );
}

export default AddEditES;

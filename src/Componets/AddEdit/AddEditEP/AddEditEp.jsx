import { ModalForm, ProForm, ProFormText } from "@ant-design/pro-components";
import React from "react";

function AddEditEp({ onSuccess, openModal, data, onOpenChange }) {
  return (
    <>
      <ModalForm
        title={
          data?.serviceId
            ? "Chỉnh sửa thông tin chương trình học"
            : "Thêm khóa học mới"
        }
        initialValues={data}
        modalProps={{
          destroyOnClose: true,
        }}
        open={openModal}
        onFinish={() => {}}
        onOpenChange={onOpenChange}
      >
        <ProForm.Group>
          <ProFormText
            width="md"
            name="trường trong request"
            label="Tên trường"
            placeholder="Tên trường"
          />
        </ProForm.Group>
      </ModalForm>
    </>
  );
}

export default AddEditEp;

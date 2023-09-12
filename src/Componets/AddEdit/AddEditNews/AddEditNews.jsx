/* eslint-disable no-lone-blocks */
import { ModalForm, ProForm, ProFormText } from "@ant-design/pro-components";
import { Form, message } from "antd";
import React, { useRef, useState } from "react";
import Editor from "../../CKEditor/CKEditor";
import { createNews, updateNews } from "../../../Services/lead";

function AddEditNews({ onSuccess, openModal, data, onOpenChange }) {
  const [content, setContent] = useState("");
  const formRef = useRef(null);
  console.log("formRef", formRef);
  console.log("content", content);

  // Hàm tạo tin tức
  const handleCreateNews = (values) => {
    createNews(values).then((res) => {
      if (res?.data?.success === true) {
        message.success("Tạo tin tức thành công");
        onSuccess();
        // } else if (res?.data?.error?.statusCode === 2) {
        //   {
        //     res?.data?.error?.errorDetailList.map((e) =>
        //       message.error(e.message)
        //     );
        //   }
      }
    });
  };

  // Hàm cập nhật khách hàng
  const handleUpdateNews = (values) => {
    updateNews(values).then((res) => {
      if (res?.data?.success === true) {
        message.success("Cập nhật tin tức thành công");
        onSuccess();
      } else if (res?.data?.error?.statusCode === 2) {
        {
          res?.data?.error?.errorDetailList.map((e) =>
            message.error(e.message)
          );
        }
      }
    });
  };

  return (
    <>
      <ModalForm
        title={data?.id ? "Chỉnh sửa thông tin của Tin Tức" : "Thêm Tin Tức"}
        initialValues={data}
        modalProps={{
          destroyOnClose: true,
        }}
        open={openModal}
        onFinish={async (values) => {
          if (data?.id) {
            handleUpdateNews(values);
          } else {
            handleCreateNews(values);
          }
        }}
        onOpenChange={onOpenChange}
        formRef={formRef}
      >
        <ProForm.Group>
          <ProFormText
            width="md"
            name="name"
            label="Tên tin tức"
            placeholder="Tên tin tức"
          />
          <ProFormText
            width="md"
            name="image"
            label="Ảnh"
            placeholder="Ảnh của tin tức"
          />
          {/* <Form.Item label="Nội dung tin tức" name="content">
          </Form.Item> */}
          <ProForm.Item
            width="md"
            name="content"
            label="Nội dung của tin tức"
            placeholder="Nội dung của tin tức"
          >
            <Editor
              initialValues={content}
              onChange={(event, editor) => {
                formRef?.current?.setFieldsValue({
                  content: editor.getData(),
                });
              }}
            />
          </ProForm.Item>
        </ProForm.Group>
      </ModalForm>
    </>
  );
}

export default AddEditNews;

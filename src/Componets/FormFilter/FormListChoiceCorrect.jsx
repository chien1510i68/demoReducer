// import { Button, Form, Input, Space } from "antd";
// import React, { useContext } from "react";
// import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";
// import { AppContext } from "../AppContext/AppContext";

// function FormListChoiceCorrect({ value, onFinishCreateAnswer }) {
//   const [form] = Form.useForm();
//   const { data, dispatch } = useContext(AppContext);
//   // const { listChoiceCorrect } = data;

//   const handleAdd = async () => {
//     form.validateFields().then((values) => {
//       dispatch({ type: "listChoiceCorrect", payload:values.names });
//       console.log("Dữ liệu của form list:", values.names);
//       // Tiếp theo, bạn có thể thực hiện các thao tác cần thiết với dữ liệu ở đây
//     });
//   };

//   return (
//     <div>
     
//       <Form
//         name="dynamic_form_nest_item"
//         autoComplete="off"
//         form={form}
//         key={value}
//         onFinish={(values) => {
//           onFinishCreateAnswer(values);
//         }}
//       >
//         <Form.List name="names" initialValue={[]}>
//           {(fields, { add, remove }) => (
//             <>
//               {fields.map(({ key, name, fieldKey, ...restField }) => (
//                 <Space
//                   key={key}
//                   style={{ display: "flex", marginBottom: 8 }}
//                   align="baseline"
//                   width={1000}
//                 >
//                   <Form.Item
//                     name={[name, "choice"]}
//                     rules={[{ required: true, message: "Answer is required" }]}
//                     className="my-2 flex justify-center "
//                   >
//                     <Input
//                       required={true}
//                       placeholder="Nhập vào câu trả lời "
//                       className="w-[40vw] "
//                     />
//                   </Form.Item>
//                   <MinusCircleOutlined
//                     onClick={() => {
//                       //   handleRemove(name);
//                       remove(name);
//                     }}
//                   />
//                 </Space>
//               ))}
//               <Form.Item>
//                 <Button
//                   onClick={() => {
//                     handleAdd();
//                     add();
//                   }}
//                   className="mt-5"
//                   icon={<PlusOutlined />}
//                 >
//                   Thêm câu trả lời đúng
//                 </Button>
//               </Form.Item>
//             </>
//           )}
//         </Form.List>
//       </Form>
//     </div>
//   );
// }

// export default FormListChoiceCorrect;

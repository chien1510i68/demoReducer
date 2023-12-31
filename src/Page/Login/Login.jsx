import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const navgate = useNavigate();
  const [loading, setLoading] = useState(false);
  const onFinish = (values) => {
    setLoading(true);
    navgate("/adminpage/user");
    // localStorage.setItem("listContest" , JSON.stringify([]))
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="relative flex">
      <div className="p-21.6 w-1/2 bg-orange-300 border border-solid border-transparent">
        <img src="../../Assets/Images/EnglishLogo.jpg" alt="" />
      </div>
      <Form
        className="login_form"
        onFinishFailed={onFinishFailed}
        onFinish={onFinish}
      >
        <h1 className="text-35 mb-10">Đăng Nhập</h1>
        <Form.Item
          name="userName" // cần thay đổi theo request của be
          rules={[
            {
              required: true,
              message: "Tên tài khoản tối thiểu 6 ký tự",
            },
          ]}
        >
          <Input
            className="input"
            prefix={<UserOutlined />}
            placeholder="Tên tài khoản"
          />
        </Form.Item>
        <Form.Item
          name="password" // cần thay đổi theo request của be
          rules={[
            {
              required: true,
              message: "Mật khẩu phải tối thiểu 6 - 20 ký tự ",
            },
          ]}
        >
          <Input.Password
            className="input"
            prefix={<LockOutlined />}
            type="Mật khẩu"
            placeholder="Mật khẩu"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="button"
            loading={loading}
          >
            Đăng nhập
          </Button>
        </Form.Item>
        <Form.Item>
          <Button
            className="register"
            onClick={() => {
              navgate("/register");
            }}
          >
            Đăng Ký
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;

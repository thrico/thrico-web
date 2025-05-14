import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useRouter } from "next/navigation";

import toast from "react-hot-toast";

const tempEmailDomains = [
  "mailinator.com",
  "duck.com",
  "gmail.com",
  "outlook.com",
  "yahoo.com",
  // add more temp email domains here
];

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const LoginForm = () => {
  const router = useRouter();

  const [form] = Form.useForm();
  const email = Form.useWatch("email", form);

  const onFinish = (values: any) => {
    // router.push("/auth/otp/sdsdds");
  };

  return (
    <Form
      name="basic"
      form={form}
      style={{ width: "100%" }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
      size="default"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            type: "email",
            message: "The input is not valid E-mail!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              const email = getFieldValue("email").split("@")[1];

              const check = tempEmailDomains.includes(email);
              if (!value || !check) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error(
                  "Kindly provide your official email address; avoid using email services such as Gmail, Outlook, or Yahoo."
                )
              );
            },
          }),
        ]}
        hasFeedback
      >
        <Input />
      </Form.Item>

      <Form.Item style={{ width: "100%", marginTop: "2rem" }}>
        <Button style={{ width: "100%" }} type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;

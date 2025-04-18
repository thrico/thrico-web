import React from "react";
import {
  Button,
  Card,
  Checkbox,
  Form,
  type FormProps,
  Input,
  Typography,
} from "antd";
import Editor from "../../../common/editor/Editor";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Basic: React.FC = () => (
  <Form
    name="basic"
    style={{ width: "100%" }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
    layout="vertical"
  >
    <Card
      extra={
        <Button type="primary" htmlType="submit">
          Update
        </Button>
      }
      style={{ width: "100%" }}
      title="Course basic Info"
    >
      <Typography>
        Your course landing page is crucial to your success on Platform. If it’s
        done right, it can also help you gain visibility in search engines like
        Google. As you complete this section, think about creating a compelling
        Course Landing Page that demonstrates why someone would want to enroll
        in your course. Learn more about creating your course landing page and
        course title standards.
      </Typography>
      <Form.Item<FieldType>
        style={{ marginTop: 50 }}
        label="Course title"
        name="username"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Course subtitle"
        name="Course subtitle"
        rules={[
          { required: true, message: "Please input your Course subtitle!" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Course description"
        name="Course description"
      >
        <Editor />
      </Form.Item>
    </Card>
  </Form>
);

export default Basic;

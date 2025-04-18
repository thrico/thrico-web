import { Button, Flex, Form, Input, Segmented, Space } from "antd";
import React from "react";
import Editor from "../../../common/editor/Editor";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import SubmitButton from "./SubmitButton";

const Step2 = ({ next, prev }) => {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log("Received values of form:", values);
    next();
  };

  return (
    <Form
      style={{ width: "100%" }}
      form={form}
      name="validateOnly"
      layout="vertical"
      autoComplete="off"
      onFinish={onFinish}
    >
      <Flex style={{ width: "100%" }} vertical wrap="wrap">
        <Form.Item style={{ width: "100%" }} hasFeedback label="Description">
          <Editor />
        </Form.Item>

        <Form.Item style={{ width: "100%" }}>
          <Flex style={{ width: "100%" }} justify="center">
            <Space>
              <Button onClick={() => prev()}>Previous</Button>
              <Button onClick={() => next()} type="primary">
                Next
              </Button>
            </Space>
          </Flex>
        </Form.Item>
      </Flex>
    </Form>
  );
};

export default Step2;

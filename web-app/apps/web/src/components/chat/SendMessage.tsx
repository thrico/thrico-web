import React from "react";
import { Button, Flex, Form, Input, message, Space } from "antd";
import { sendMessage } from "@/graphql/actions/chat";

const SendMessage = ({ id }) => {
  const [send] = sendMessage({});
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    send({
      variables: {
        input: {
          chatId: id,
          ...values,
        },
      },
    });
    form.resetFields();
  };

  const onFinishFailed = () => {};

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      style={{ marginTop: 20 }}
    >
      <Form.Item name="content" label="">
        <Flex gap={20}>
          <Input placeholder="Message" />
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Flex>
      </Form.Item>
      <Form.Item>
        <Space></Space>
      </Form.Item>
    </Form>
  );
};

export default SendMessage;

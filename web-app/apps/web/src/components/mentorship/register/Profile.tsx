import React from "react";

import { Button, Flex, Form, Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useGetUser } from "@/graphql/actions";

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

const Profile = ({ next, about, setAbout }) => {
  const onFinish = (values: any) => {
    setAbout(values);
    next();
  };
  const {
    data: { getUser },
  } = useGetUser();
  return (
    <Form
      initialValues={about}
      name="validate_other"
      {...formItemLayout}
      onFinish={onFinish}
    >
      <Flex
        {...formItemLayout}
        style={{ width: "100%", maxWidth: 800 }}
        vertical
        align="flex-start"
        justify="flex-start"
      >
        <Form.Item style={{ width: "100%" }} hasFeedback label="First Name">
          <Input placeholder={getUser.firstName} disabled></Input>
        </Form.Item>
        <Form.Item style={{ width: "100%" }} hasFeedback label="Last Name">
          <Input placeholder={getUser.lastName} disabled></Input>
        </Form.Item>
        <Form.Item
          rules={[{ required: true }]}
          style={{ width: "100%" }}
          hasFeedback
          name="displayName"
          label="Display Name"
        >
          <Input></Input>
        </Form.Item>
        <Form.Item
          rules={[{ required: true }]}
          style={{ width: "100%" }}
          hasFeedback
          name="about"
          label="About You"
        >
          <TextArea
            rows={4}
            maxLength={300}
            showCount
            placeholder="Tell us more about yourself , your interests and your experience"
          />
        </Form.Item>
        <Form.Item
          rules={[{ required: true }]}
          style={{ width: "100%" }}
          hasFeedback
          name="intro"
          label="Your Mentorship intro"
        >
          <TextArea rows={6} maxLength={1000} showCount></TextArea>
        </Form.Item>
      </Flex>
      <Flex
        style={{ marginTop: 24, display: "flex", justifyContent: "center" }}
      >
        <Button type="primary" htmlType="submit">
          Next
        </Button>
      </Flex>
    </Form>
  );
};

export default Profile;

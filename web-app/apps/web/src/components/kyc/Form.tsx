import React, { useState } from "react";
import type { CascaderProps } from "antd";
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Flex,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from "antd";
import Agreement from "./Agreement";
import { completeKyc, useGetUser } from "../../graphql/actions";
import { Redirect } from "../Layout/redirect/Redirect";

const { Option } = Select;

interface DataNodeType {
  value: string;
  label: string;
  children?: DataNodeType[];
}

const formItemLayout = {
  labelCol: {
    xs: { span: 8 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 10 },
    sm: { span: 10 },
  },
};

const KycForm = () => {
  const { data: user, loading: load, refetch } = useGetUser();
  const [create, { data, loading }] = completeKyc({
    async onCompleted(data: any) {
      refetch();
      return <Redirect to="/profile" />;
    },
  });
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    create({
      variables: {
        input: values,
      },
    });
  };

  return (
    <Form
      layout="vertical"
      form={form}
      name="register"
      onFinish={onFinish}
      scrollToFirstError
    >
      <Flex wrap="wrap" gap={1} justify="space-between">
        {!load && (
          <>
            <Form.Item
              style={{ width: "48%" }}
              label="First Name"
              rules={[
                {
                  required: true,
                  message: "Please input your First Name",
                },
              ]}
            >
              <Input defaultValue={user?.getUser?.firstName} disabled />
            </Form.Item>
            <Form.Item
              style={{ width: "48%" }}
              label="Last Name"
              initialValue={user?.getUser?.lastName}
              rules={[
                {
                  required: true,
                  message: "Please input your First Name",
                },
              ]}
            >
              <Input disabled defaultValue={user?.getUser?.lastName} />
            </Form.Item>

            <Form.Item
              initialValue={user?.getUser?.email}
              style={{ width: "47%" }}
              label="E-mail"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input defaultValue={user?.getUser?.email} disabled />
            </Form.Item>
          </>
        )}

        <Form.Item
          name="affliction"
          label="Affiliation"
          style={{ width: "48%" }}
          tooltip="Please select appropriate affiliation(s)"
          rules={[
            {
              required: true,
              message: "Please select your affliction",
              type: "array",
            },
          ]}
        >
          <Select mode="multiple" placeholder="Please select your affliction">
            <Option value="Alumni">Alumni</Option>
            <Option value="Student">Student</Option>
            <Option value="Board of Trustees">Board of Trustees</Option>
            <Option value="Parent">Parent</Option>
            <Option value="Corporation">Corporation</Option>
            <Option value="Friend">Friend</Option>
          </Select>
        </Form.Item>

        <Form.Item
          style={{ width: "47%" }}
          name="identificationNumber"
          tooltip="Please select Identification Number"
          label="Identification Number"
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="referralSource"
          label="Referral Source"
          style={{ width: "48%" }}
          tooltip="Please select appropriate affiliation(s)"
          rules={[
            {
              required: true,
              message: "Please select your affliction",
              type: "array",
            },
          ]}
        >
          <Select
            mode="multiple"
            placeholder="Please select your Referral Source"
          >
            <Option value="student">Website</Option>
            <Option value="email">Email</Option>

            <Option value="alumni">Alumni</Option>
            <Option value="colleague">Colleague</Option>
            <Option value="exEmployee">Ex-Employee</Option>
            <Option value="socialMedia">Social Media</Option>
            <Option value="Other">Other</Option>
          </Select>
        </Form.Item>
        <Form.Item
          style={{ width: "100%" }}
          name="comment"
          label="Comment"
          rules={[{ required: true, message: "Please input Intro" }]}
        >
          <Input.TextArea maxLength={200} showCount rows={5} />
        </Form.Item>

        <Form.Item
          style={{ width: "50%" }}
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("Should accept agreement")),
            },
          ]}
        >
          <Checkbox>
            I have read the and agree <Agreement />
          </Checkbox>
        </Form.Item>
        <Form.Item style={{ width: "100%" }}>
          <Button loading={loading} type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Flex>
    </Form>
  );
};

export default KycForm;

"use client";

import React, { useState } from "react";
import { Button, Card, Flex, Form, Input, Segmented, Select } from "antd";
import { data } from "../list";
import { useSearchParams } from "next/navigation";
import { GlobalOutlined, LockOutlined } from "@ant-design/icons";
import { createIssue } from "@/graphql/actions/issues";
import Editor from "../../common/editor/Editor";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */

/* eslint-enable no-template-curly-in-string */
const { Option } = Select;

const HelpForm = ({ type, module }) => {
  const [form] = Form.useForm();
  const types = Form.useWatch("type", form);
  const modules = Form.useWatch("module", form);
  const [add, { loading }] = createIssue({});
  const onFinish = (values: any) => {
    add({
      variables: {
        input: { ...values, details },
      },
    });
  };
  const [details, setDetails] = useState("");
  return (
    <Flex>
      <Form
        form={form}
        layout="vertical"
        name="nest-messages"
        onFinish={onFinish}
        style={{ width: "100%" }}
      >
        <Card
          extra={
            <Button loading={loading} type="primary" htmlType="submit">
              Submit
            </Button>
          }
          title={type}
          style={{ width: "100%" }}
        >
          <Flex style={{ width: "100%" }}>
            <Flex vertical gap={20}>
              <Form.Item
                help="Report a problem on the website. If this doesn't look right, choose a different type."
                name="type"
                style={{ width: "100%" }}
                label="Select Type"
                initialValue={type}
                required
              >
                <Select style={{ width: "100%" }}>
                  {data.map((set) => (
                    <Option value={set.title}>{set.title}</Option>
                  ))}
                </Select>
              </Form.Item>

              {types && (
                <>
                  <Form.Item
                    name="module"
                    style={{ width: "100%" }}
                    label="Select Module"
                    required
                    initialValue={module}
                  >
                    <Select style={{ width: "100%" }}>
                      <Option value="communities">Communities</Option>
                    </Select>
                  </Form.Item>
                  {modules && (
                    <Form.Item
                      name="feature"
                      style={{ width: "100%" }}
                      label="Select Feature"
                    >
                      <Select style={{ width: "100%" }}>
                        <Option value="Discover">Discover</Option>
                        <Option value="Discussion">Discussion</Option>
                      </Select>
                    </Form.Item>
                  )}
                  <Form.Item
                    initialValue={"public"}
                    name="visibility"
                    label="Visibility"
                  >
                    <Segmented
                      options={[
                        {
                          label: "Public",
                          value: "public",
                          icon: <GlobalOutlined />,
                        },
                        {
                          label: "Private",
                          value: "private",
                          icon: <LockOutlined />,
                        },
                      ]}
                    />
                  </Form.Item>
                  <Form.Item
                    required
                    name={"title"}
                    label="Add a Title"
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    required
                    help={
                      types === "Bug"
                        ? "A clear and concise summary of what the bug is."
                        : types === "Typo or mistake"
                          ? "A clear and concise summary of what the mistake is."
                          : "A clear and concise summary of what we should add."
                    }
                    name={"summary"}
                    label="Summary"
                  >
                    <Input.TextArea rows={4} />
                  </Form.Item>

                  <Form.Item
                    required
                    help={
                      types === "Bug"
                        ? "What page(s) did you encounter this bug on?"
                        : types === "Typo or mistake"
                          ? "What page is the typo on?"
                          : "What page is this about?"
                    }
                    name={"page"}
                    label="Page Url"
                    rules={[{ required: true, type: "url" }]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    help={
                      types === "Bug"
                        ? "Please provide any additional details about the bug"
                        : types === "Typo or mistake"
                          ? "Please provide a explanation for why this is a mistake."
                          : "Please provide a explanation for what you're suggesting."
                    }
                    name={"details"}
                    label="Details"
                  >
                    <Editor description={details} setDescription={setDetails} />
                  </Form.Item>
                </>
              )}
            </Flex>
          </Flex>
        </Card>
      </Form>
    </Flex>
  );
};

export default HelpForm;

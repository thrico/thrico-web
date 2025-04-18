import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Flex, Form, Input, Space } from "antd";

const onFinish = (values: any) => {
  console.log("Received values of form:", values);
};

const Polls = () => (
  <Flex
    align="center"
    justify="center"
    style={{ width: "100%", height: "100%" }}
  >
    <Form
      name="dynamic_form_nest_item"
      onFinish={onFinish}
      style={{ width: "100%" }}
      autoComplete="off"
    >
      <Form.Item
        name={"Your question"}
        rules={[{ required: true, message: "Add Question" }]}
      >
        <Input maxLength={140} showCount placeholder="Add Question" />
      </Form.Item>
      <Form.List name="users">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space
                key={key}
                style={{ display: "flex", marginBottom: 8 }}
                align="baseline"
              >
                <Form.Item
                  {...restField}
                  name={[name, "first"]}
                  label="Option"
                  rules={[{ required: true, message: "Add Answer" }]}
                >
                  <Input maxLength={30} showCount placeholder="Add Answer" />
                </Form.Item>

                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add field
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  </Flex>
);

export default Polls;

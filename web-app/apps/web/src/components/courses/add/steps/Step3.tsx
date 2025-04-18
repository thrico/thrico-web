import { Button, Flex, Form, Input, Segmented, Space } from "antd";
import React from "react";
import Editor from "../../../common/editor/Editor";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import SubmitButton from "./SubmitButton";

const Step3 = ({ next, prev, step3Data, setStep3Data, loading }) => {
  const [form] = Form.useForm();
  const onFinish = async (values: any) => {
    await setStep3Data(values);

    await next();
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
      <Flex
        style={{ width: "100%" }}
        vertical
        wrap="wrap"
        justify="center"
        align="center"
      >
        <Form.Item style={{ width: "50%" }}>
          <Form.List initialValue={step3Data} name="tag">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Space
                    key={key}
                    style={{ display: "flex", marginBottom: 8, width: "100%" }}
                    align="baseline"
                  >
                    <Form.Item
                      {...restField}
                      name={[name, "tag"]}
                      rules={[{ required: true, message: "Tag" }]}
                    >
                      <Input placeholder="Add Tag" />
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
                    Add Tag
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </Form.Item>

        <Space>
          <Form.Item>
            <Button onClick={() => prev()}>Previous</Button>
          </Form.Item>
          <Form.Item>
            <Button loading={loading} htmlType="submit" type="primary">
              Submit
            </Button>
          </Form.Item>
        </Space>
      </Flex>
    </Form>
  );
};

export default Step3;

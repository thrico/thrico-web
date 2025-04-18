import React from "react";
import {
  Button,
  Card,
  Checkbox,
  Form,
  type FormProps,
  Input,
  Select,
  Space,
  Typography,
} from "antd";
import Editor from "../../../common/editor/Editor";
import { currency } from "../../../../json/currency";

type FieldType = {
  price?: string;
  currency?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Price = () => {
  const [form] = Form.useForm();
  const courseCurrency = Form.useWatch("currency", form);
  return (
    <Form
      form={form}
      name="basic"
      style={{ width: "100%" }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="horizontal"
    >
      <Card
        extra={
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        }
        style={{ width: "100%" }}
        title="Set a price for your course"
      >
        <Typography>
          Please select the currency and the price tier for your course. If
          you’d like to offer your course for free, it must have a total video
          length of less than 2 hours. Also, courses with practice tests can not
          be free.
        </Typography>
        <Space>
          <Form.Item<FieldType>
            style={{ marginTop: 50, width: 400 }}
            label="Currency"
            name="currency"
            rules={[{ required: true }]}
          >
            <Select>
              {currency.map((set) => (
                <Select.Option value={set.code}>{set.name}</Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item<FieldType>
            style={{ marginTop: 50, width: 400 }}
            label="Price"
            name="price"
            rules={[{ required: true, message: "Please input your Price!" }]}
          >
            <Input disabled={courseCurrency ? false : true} type="number" />
          </Form.Item>
        </Space>
      </Card>
    </Form>
  );
};

export default Price;

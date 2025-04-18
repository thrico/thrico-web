import React, { useState } from "react";
import { Button, DatePicker, Flex, Form, Input, Select, Space } from "antd";
import { v4 } from "uuid";

import TextArea from "antd/es/input/TextArea";
import { education } from "../../../types";

type SizeType = Parameters<typeof Form>[0]["size"];

interface props {
  addEducation(ex: education): void;
  handleCancel(): void;
}

const AddForm = ({ addEducation, handleCancel }: props) => {
  const [componentSize, setComponentSize] = useState<SizeType | "default">(
    "default"
  );

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };
  const { RangePicker } = DatePicker;
  const [form] = Form.useForm();
  const id = v4();
  const onFinish = (values: any) => {
    const rangeTimeValue = values["rangeTimeValue"];
    const value = {
      id,
      ...values,
      duration: [
        rangeTimeValue[0].format("YYYY-MM-DD HH:mm:ss"),
        rangeTimeValue[1].format("YYYY-MM-DD HH:mm:ss"),
      ],
    };
    delete value["rangeTimeValue"];
    addEducation(value);
    handleCancel();
    form.resetFields();
  };
  return (
    <>
      <Form
        form={form}
        name="register"
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 17 }}
        layout="horizontal"
        onFinish={onFinish}
        initialValues={{ size: componentSize }}
        onValuesChange={onFormLayoutChange}
        size={componentSize as SizeType}
        style={{ width: 700 }}
      >
        <Form.Item
          hasFeedback
          style={{ width: "100%" }}
          name="school"
          label="School/Institute"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          hasFeedback
          style={{ width: "100%" }}
          name="degree"
          label="Degree"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          hasFeedback
          rules={[{ required: true }]}
          name="grade"
          label="Grade"
        >
          <Input />
        </Form.Item>
        <Form.Item
          hasFeedback
          rules={[{ required: true }]}
          name="rangeTimeValue"
          label="Duration"
        >
          <RangePicker picker="month" format="YYYY-MM" />
        </Form.Item>
        <Form.Item
          rules={[{ required: true }]}
          name="activities"
          label="Activities"
        >
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item style={{ width: "100%" }}>
          <Space
            style={{
              width: "100%",
              justifyContent: "center",
            }}
          >
            <Button onClick={handleCancel}>Cancel</Button>
            <Button type="primary" htmlType="submit">
              Add
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddForm;

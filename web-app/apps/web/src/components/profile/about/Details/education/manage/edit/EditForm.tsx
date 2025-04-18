import React, { useState } from "react";
import { Button, DatePicker, Flex, Form, Input, Select, Space } from "antd";

import dayjs from "dayjs";
import TextArea from "antd/es/input/TextArea";
import { education } from "../../../types";
type SizeType = Parameters<typeof Form>[0]["size"];

interface props {
  editEducation(ex: education): void;
  education: education;
  handleCancel(): void;
}

const EditForm = ({ editEducation, education, handleCancel }: props) => {
  const [componentSize, setComponentSize] = useState<SizeType | "default">(
    "default"
  );

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };
  const { RangePicker } = DatePicker;
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    const rangeTimeValue = values["rangeTimeValue"];
    const value = {
      ...values,
      id: education.id,
      duration: [
        rangeTimeValue[0].format("YYYY-MM-DD HH:mm:ss"),
        rangeTimeValue[1].format("YYYY-MM-DD HH:mm:ss"),
      ],
    };
    delete value["rangeTimeValue"];
    editEducation(value);
    handleCancel();
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
          initialValue={education.school}
          style={{ width: "100%" }}
          name="school"
          label="School/Institute"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          hasFeedback
          initialValue={education.degree}
          style={{ width: "100%" }}
          name="degree"
          label="Degree"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          hasFeedback
          initialValue={education.grade}
          rules={[{ required: true }]}
          name="grade"
          label="Grade"
        >
          <Input />
        </Form.Item>
        <Form.Item
          initialValue={education.duration.map((t) => dayjs(t, "'YYYY-MM-DD'"))}
          hasFeedback
          rules={[{ required: true }]}
          name="rangeTimeValue"
          label="Duration"
        >
          <RangePicker picker="month" format="YYYY-MM" />
        </Form.Item>
        <Form.Item
          initialValue={education.activities}
          rules={[{ required: true }]}
          name="activities"
          label="Activities"
        >
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item
          initialValue={education.description}
          name="description"
          label="Description"
        >
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
              Save
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </>
  );
};

export default EditForm;

import React, { useState } from "react";
import { Button, DatePicker, Flex, Form, Input, Select, Space } from "antd";

import dayjs from "dayjs";
import { experience } from "../../../types";
type SizeType = Parameters<typeof Form>[0]["size"];

interface props {
  editExperience(ex: experience): void;
  experience: experience;
  handleCancel(): void;
}

const EditForm = ({ editExperience, experience, handleCancel }: props) => {
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
      id: experience.id,
      duration: [
        rangeTimeValue[0].format("YYYY-MM-DD HH:mm:ss"),
        rangeTimeValue[1].format("YYYY-MM-DD HH:mm:ss"),
      ],
    };
    delete value["rangeTimeValue"];
    editExperience(value);
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
          style={{ width: "100%" }}
          name="title"
          label="Title"
          rules={[{ required: true }]}
          initialValue={experience?.title}
        >
          <Input />
        </Form.Item>
        <Form.Item
          initialValue={experience?.companyName}
          style={{ width: "100%" }}
          name="companyName"
          label="Company name "
          rules={[{ required: true }]}
          hasFeedback
        >
          <Input />
        </Form.Item>
        <Form.Item
          initialValue={experience?.employmentType}
          hasFeedback
          rules={[{ required: true }]}
          name="employmentType"
          label="Employment type"
        >
          <Select>
            <Select.Option value="Full Time">Full Time</Select.Option>
            <Select.Option value="Part Time">Part Time</Select.Option>
            <Select.Option value="Self Employed">Self Employed</Select.Option>
            <Select.Option value="Internship">Internship</Select.Option>
            <Select.Option value="Trainee">Trainee</Select.Option>
            <Select.Option value="Freelance">Freelance</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          initialValue={experience?.location}
          hasFeedback
          rules={[{ required: true }]}
          name="location"
          label="Location"
        >
          <Input />
        </Form.Item>

        <Form.Item
          initialValue={experience.duration.map((t) =>
            dayjs(t, "'YYYY-MM-DD'")
          )}
          hasFeedback
          rules={[{ required: true }]}
          name="rangeTimeValue"
          label="Duration"
        >
          <RangePicker picker="month" format="YYYY-MM" />
        </Form.Item>
        <Form.Item
          initialValue={experience?.locationType}
          hasFeedback
          rules={[{ required: true }]}
          name="locationType"
          label="Location type"
        >
          <Select>
            <Select.Option value="On-site">On-site</Select.Option>
            <Select.Option value="Hybrid">Hybrid</Select.Option>
            <Select.Option value="Remote">Remote</Select.Option>
          </Select>
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

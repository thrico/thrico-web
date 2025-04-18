import { Button, Flex, Form, Input, Segmented, Space } from "antd";
import React from "react";
import Editor from "../../../common/editor/Editor";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import SubmitButton from "./SubmitButton";
import { Step1Props } from "../../../../types/ts-types";

interface props {
  next: any;
  step1Data: Step1Props;
  setStep1Data: any;
}
const Step1 = ({ next, step1Data, setStep1Data }: props) => {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log("Received values of form:", values);
    next();
    setStep1Data(values);
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
      <Flex style={{ width: "100%" }} gap={20} wrap="wrap">
        <Form.Item
          style={{ width: "47%" }}
          hasFeedback
          name="jobTitle"
          label="Job Title"
          initialValue={step1Data.jobTitle}
          rules={[
            {
              required: true,
              message: "Please input Job Title",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          initialValue={step1Data.company}
          style={{ width: "47%" }}
          hasFeedback
          name="company"
          label="Company"
          rules={[
            {
              required: true,
              message: "Please input Company",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          initialValue={step1Data.workplaceType}
          style={{ width: "47%" }}
          name="workplaceType"
          label="Workplace Type"
          hasFeedback
          rules={[{ required: true }]}
        >
          <Segmented
            options={[
              {
                label: "On-Site",
                value: "on-Site",
              },
              {
                label: "Hybrid",
                value: "hybrid",
              },
              { label: "Remote", value: "remote" },
            ]}
          />
        </Form.Item>
        <Form.Item
          initialValue={step1Data.location}
          style={{ width: "47%" }}
          hasFeedback
          name="location"
          label="Location"
          rules={[
            {
              required: true,
              message: "Please input Company",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          initialValue={step1Data.salary}
          style={{ width: "47%" }}
          hasFeedback
          name="salary"
          label="Salary"
          rules={[
            {
              required: true,
              message: "Please input Company",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          initialValue={step1Data.experience}
          style={{ width: "47%" }}
          hasFeedback
          name="experience"
          label="Experience"
          rules={[
            {
              required: true,
              message: "Please input experience",
            },
          ]}
        >
          <Input placeholder="i.e 3 Years" />
        </Form.Item>
        <Form.Item
          initialValue={step1Data.jobType}
          style={{ width: "70%" }}
          name="jobType"
          label="Job Type"
          hasFeedback
          rules={[{ required: true }]}
        >
          <Segmented
            options={[
              {
                label: "Full-time",
                value: "full-time",
              },
              {
                label: "Part-Time",
                value: "part-time",
              },
              { label: "Contract", value: "contract" },
              { label: "Temporary", value: "temporary" },
              { label: "Internship", value: "internship" },
              { label: "Volunteer", value: "volunteer" },
              { label: "Other", value: "other" },
            ]}
          />
        </Form.Item>

        <Form.Item style={{ width: "100%" }}>
          <Flex style={{ width: "100%" }} justify="center">
            <SubmitButton form={form}>Next</SubmitButton>
          </Flex>
        </Form.Item>
      </Flex>
    </Form>
  );
};

export default Step1;

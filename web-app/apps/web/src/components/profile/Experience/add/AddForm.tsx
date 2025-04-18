import React, { useState } from "react";
import { Button, Checkbox, DatePicker, Flex, Form, Input, Select, Space } from "antd";
import { v4 } from "uuid";
import { EducationAutocompleteSelect } from "../../education/EducationAutoComplete";
import GooglePlacesInput from "@/components/location/Google-places-autocomplete";
import { experience } from "@/lib/types";
import dayjs from "dayjs";


type SizeType = Parameters<typeof Form>[0]["size"];

interface props {
  addExperience(ex: experience): void;
  handleCancel(): void;
}

const AddForm = ({ addExperience, handleCancel }: props) => {
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
    const currentlyWorking = values["currentlyWorking"];
    const startDate = values["Start Date"];
    const value = {
      id,
      ...values,
      duration: !currentlyWorking ? [
        rangeTimeValue[0].format("YYYY-MM-DD HH:mm:ss"),
        rangeTimeValue[1].format("YYYY-MM-DD HH:mm:ss"),
      ] : '',
      startDate: currentlyWorking &&
        startDate.format("YYYY-MM-DD HH:mm:ss"),
    };
    delete value["rangeTimeValue"];
    delete value["Start Date"];
    addExperience(value);
    handleCancel();
    form.resetFields();
  };

  const currentlyWorking = Form.useWatch("currentlyWorking", form);
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
          name="title"
          label="Title"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          hasFeedback
          style={{ width: "100%" }}
          name="company"
          label="Company name "
          rules={[{ required: true }]}
        >
          <EducationAutocompleteSelect
            onChange={(value) => form.setFieldsValue({ company: value })}
          />
        </Form.Item>
        <Form.Item
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
          hasFeedback
          rules={[{ required: true }]}
          name="location"
          label="Location"
        >
          <GooglePlacesInput
            onChange={(value) => form.setFieldsValue({ location: value })}
          />
        </Form.Item>

        <Form.Item
          name="currentlyWorking"
          valuePropName="checked"

          wrapperCol={{ offset: 5, span: 17 }}
        >
          <Checkbox>I am currently working in this role</Checkbox>
        </Form.Item>

        {
          !currentlyWorking && (
            <Form.Item

              hasFeedback
              rules={[{ required: true }]}
              name="rangeTimeValue"
              label="Duration"
            >
              <RangePicker
                picker="month"
                format="YYYY-MM"
                disabledDate={(current) => current && current > dayjs().endOf('day')}
              // Disable end date if currentlyWorking is true
              />
            </Form.Item>
          )
        }

        {
          currentlyWorking && (
            <Form.Item

              hasFeedback
              rules={[{ required: true }]}
              name="Start Date"
              label="Start Date"
            >
              <DatePicker
                picker="month"
                format="YYYY-MM"
                disabledDate={(current) => current && current > dayjs().endOf('day')}
              // Disable end date if currentlyWorking is true
              />
            </Form.Item>
          )
        }
        <Form.Item
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
              Add
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddForm;

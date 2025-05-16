import React, { useState } from "react";
import { Button, DatePicker, Form, Input, Modal, Space } from "antd";

import { v4 } from "uuid";
import { EducationAutocompleteSelect } from "./EducationAutoComplete";
import TextArea from "antd/es/input/TextArea";
import { education } from "@/lib/types";
interface props {
  addEducation(ex: education): void;
}

const AddEducation = ({ addEducation }: props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const { RangePicker } = DatePicker;
  const [form] = Form.useForm();
  const id = v4();
  interface FormValues {
    school: string;
    degree: string;
    grade: string;
    rangeTimeValue: [moment.Moment, moment.Moment];
    activities: string;
    description?: string;
  }

  const onFinish = (values: FormValues) => {
    const rangeTimeValue = values["rangeTimeValue"];
    const value = {
      id,
      ...values,
      duration: rangeTimeValue.map((date: any) =>
        date.format("YYYY-MM-DD HH:mm:ss")
      ),
    };
    delete value.rangeTimeValue;

    addEducation(value);
    handleCancel();
    form.resetFields();
  };

  return (
    <>
      <Space onClick={showModal}>
        <Button>Add</Button>
      </Space>
      <Modal
        title="Add Education"
        width={700}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={() => form.submit()}>
            Add
          </Button>,
        ]}
      >
        <Space>
          <Form
            form={form}
            name="register"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 17 }}
            layout="horizontal"
            onFinish={onFinish}
            style={{ width: 700 }}
          >
            <Form.Item
              hasFeedback
              style={{ width: "100%" }}
              name="school"
              label="School/Institute"
              rules={[
                { required: true, message: "Please enter School/Institute" },
              ]}
            >
              <EducationAutocompleteSelect
                onChange={(value) => form.setFieldsValue({ school: value })}
              />
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
          </Form>
        </Space>
      </Modal>
    </>
  );
};

export default AddEducation;

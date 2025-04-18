import React, { useState } from "react";
import { Button, Card, Form, Input, Modal, Select, Space } from "antd";
import EditButton from "@repo/ui/EditButton";
import TextArea from "antd/es/input/TextArea";
const Edit = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const { Option } = Select;
  const [form] = Form.useForm();
  const onFinish = (values: any) => {};
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  return (
    <>
      <Space onClick={showModal}></Space>

      <Modal
        title=""
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          scrollToFirstError
        >
          <Card
            extra={[
              <Space style={{ position: "sticky", top: 10, zIndex: 10 }}>
                <Button type="primary" htmlType="submit">
                  Update
                </Button>
                <Button onClick={handleCancel}>Cancel</Button>
              </Space>,
            ]}
          >
            <Form.Item name="details" label="Event Info">
              <TextArea rows={5} />
            </Form.Item>
            <Form.Item
              name="contactEmail"
              label="Contact Email"
              hasFeedback
              rules={[{ required: true }]}
              style={{ width: "100%" }}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="contactNumber"
              label="Contact Number"
              hasFeedback
              rules={[{ required: true }]}
              style={{ width: "100%" }}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="targetAudience"
              label="Target Audience"
              rules={[
                {
                  required: true,
                  message: "Please select your  Target Audience",
                  type: "array",
                },
              ]}
            >
              <Select
                mode="multiple"
                placeholder="Please select Target Audience"
              >
                <Option value="red">Student</Option>

                <Option value="blue">Entrepreneurship</Option>
              </Select>
            </Form.Item>
          </Card>
        </Form>
      </Modal>
    </>
  );
};

export default Edit;

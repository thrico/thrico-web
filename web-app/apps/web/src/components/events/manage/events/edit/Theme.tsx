import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Drawer,
  Form,
  Input,
  Row,
  Select,
  Space,
} from "antd";
import EditButton from "@repo/ui/EditButton";
import TextArea from "antd/es/input/TextArea";

const { Option } = Select;

const Theme = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
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
      <Space onClick={showDrawer}>
        <EditButton />
      </Space>
      <Drawer
        title="Edit Basic Details"
        width={720}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onClose} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          scrollToFirstError
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
            <Select mode="multiple" placeholder="Please select Target Audience">
              <Option value="red">Student</Option>

              <Option value="blue">Entrepreneurship</Option>
            </Select>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
};

export default Theme;

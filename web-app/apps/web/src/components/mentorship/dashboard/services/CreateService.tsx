"use client";

import { useState } from "react";
import {
  Steps,
  Form,
  Input,
  Card,
  Button,
  InputNumber,
  Typography,
  Space,
  Drawer,
} from "antd";
import { CalendarOutlined, ArrowLeftOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

interface CreateServiceDrawerProps {
  open: boolean;
  onClose: () => void;
}

type ServiceType = "1:1 Call";

export function CreateServiceDrawer({
  open,
  onClose,
}: CreateServiceDrawerProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [form] = Form.useForm();
  const [selectedType, setSelectedType] = useState<ServiceType>();

  const serviceTypes = [
    {
      key: "1:1 Call",
      icon: <CalendarOutlined />,
      title: "1:1 Call",
      description: "Conduct 1:1 video sessions",
    },
  ];

  const steps = [
    {
      title: "Select Type",
      content: (
        <div>
          <Title level={2}>What are you creating today?</Title>
          <Text strong style={{ display: "block", marginBottom: 16 }}>
            Select type
          </Text>
          <Space direction="vertical" size={16} style={{ width: "100%" }}>
            {serviceTypes.map((type) => (
              <Card
                key={type.key}
                hoverable
                style={{
                  cursor: "pointer",
                  borderColor: selectedType === type.key ? "#000" : "#d9d9d9",
                }}
                onClick={() => setSelectedType(type.key as ServiceType)}
              >
                <Space align="start">
                  <div style={{ fontSize: 24, marginRight: 16 }}>
                    {type.icon}
                  </div>
                  <div>
                    <Text strong style={{ fontSize: 16, display: "block" }}>
                      {type.title}
                    </Text>
                    <Text type="secondary">{type.description}</Text>
                  </div>
                </Space>
              </Card>
            ))}
          </Space>

          <Form.Item name="title" label="Title" style={{ marginTop: 24 }}>
            <Input placeholder="Name of Service" />
          </Form.Item>

          <Form.Item name="duration" label="Duration (mins)">
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item name="amount" label="Amount (₹)">
            <InputNumber
              style={{ width: "100%" }}
              prefix="₹"
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
            />
          </Form.Item>
        </div>
      ),
    },
    {
      title: "Customize",
      content: (
        <div>
          <Button
            type="text"
            icon={<ArrowLeftOutlined />}
            onClick={() => setCurrentStep(0)}
            style={{ marginBottom: 24 }}
          >
            Back
          </Button>

          <Form.Item name="title" label="Title">
            <Input />
          </Form.Item>

          <Form.Item name="shortDescription" label="Short Description">
            <Input.TextArea placeholder="This will be visible below your service title" />
          </Form.Item>

          <Form.Item name="longDescription" label="Long Description">
            {/* <ReactQuill theme="snow" placeholder="Describe your service" /> */}
          </Form.Item>

          <Form.Item name="duration" label="Duration (mins)">
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>

          <Title level={5} style={{ marginTop: 24 }}>
            Pricing
          </Title>

          <Form.Item name="amount" label="Amount (₹)">
            <InputNumber
              style={{ width: "100%" }}
              prefix="₹"
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
            />
          </Form.Item>
        </div>
      ),
    },
  ];

  const handleNext = async () => {
    try {
      await form.validateFields();
      setCurrentStep(1);
    } catch (error) {
      console.error("Validation failed:", error);
    }
  };

  const handleFinish = async () => {
    try {
      const values = await form.validateFields();
      console.log("Form values:", values);
      onCancel();
    } catch (error) {
      console.error("Validation failed:", error);
    }
  };

  return (
    <Drawer
      placement="right"
      onClose={onClose}
      open={open}
      width={700}
      footer={
        <div style={{ textAlign: "right" }}>
          {currentStep === 0 ? (
            <Button type="primary" onClick={handleNext} block>
              Next: Customize
            </Button>
          ) : (
            <Button type="primary" onClick={handleFinish} block>
              Create Service
            </Button>
          )}
        </div>
      }
    >
      <Steps current={currentStep} items={steps} style={{ marginBottom: 24 }} />
      <Form form={form} layout="vertical" requiredMark={false}>
        {steps[currentStep].content}
      </Form>
    </Drawer>
  );
}

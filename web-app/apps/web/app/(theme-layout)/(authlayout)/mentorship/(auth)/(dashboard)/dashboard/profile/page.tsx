"use client";

import { useState } from "react";
import {
  Form,
  Input,
  Button,
  Upload,
  Tabs,
  Typography,
  Space,
  Row,
  Col,
} from "antd";
import {
  CheckCircleFilled,
  ShareAltOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;
const { TextArea } = Input;

export default function ProfilePage() {
  const [form] = Form.useForm();
  const [imageUrl, setImageUrl] = useState<string>();

  const onFinish = (values: any) => {
    console.log("Form values:", values);
  };

  const uploadButton = (
    <div
      style={{
        width: 100,
        height: 100,
        borderRadius: "50%",
        backgroundColor: "#f5f5f5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <UserOutlined style={{ fontSize: 24, color: "#999" }} />
    </div>
  );

  const items = [
    {
      key: "profile",
      label: "Profile",
    },
    {
      key: "account",
      label: "Account",
    },
  ];

  return (
    <div style={{ margin: "0 auto", padding: "24px" }}>
      <Row justify="space-between" align="middle" style={{ marginBottom: 24 }}>
        <Title level={2} style={{ margin: 0 }}>
          Profile
        </Title>
        <Button type="primary" htmlType="submit" form="profileForm">
          Save changes
        </Button>
      </Row>

      <Tabs
        defaultActiveKey="profile"
        items={items}
        style={{ marginBottom: 24 }}
      />

      <Form
        id="profileForm"
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          firstName: "Pankaj",
          lastName: "Verma",
          displayName: "Pankaj Verma",
          intro: "tekk",
        }}
      >
        <div style={{ marginBottom: 24 }}>
          <Space direction="vertical" size={4}>
            <Text strong>Profile photo</Text>
            <Text type="secondary">Required</Text>
          </Space>
          <Upload
            name="avatar"
            listType="picture-circle"
            showUploadList={false}
            onChange={(info) => {
              if (info.file.status === "done") {
                setImageUrl(info.file.response.url);
              }
            }}
          >
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="avatar"
                style={{ width: 100, height: 100, borderRadius: "50%" }}
              />
            ) : (
              uploadButton
            )}
          </Upload>
        </div>

        <Form.Item label="Your topmate page link" style={{ marginBottom: 24 }}>
          <Input.Group compact>
            <Input
              style={{ width: "30%" }}
              defaultValue="topmate.io/"
              disabled
            />
            <Input
              style={{ width: "70%" }}
              defaultValue="pankaj_verma13"
              suffix={
                <Space>
                  <CheckCircleFilled style={{ color: "#52c41a" }} />
                  <ShareAltOutlined />
                </Space>
              }
            />
          </Input.Group>
        </Form.Item>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="firstName"
              label="First Name"
              rules={[
                { required: true, message: "Please input your first name!" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="lastName"
              label="Last Name"
              rules={[
                { required: true, message: "Please input your last name!" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          name="displayName"
          label="Display Name"
          rules={[
            { required: true, message: "Please input your display name!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="intro"
          label={
            <Space>
              <span>Your topmate intro</span>
              <Text type="secondary">(Required)</Text>
            </Space>
          }
          rules={[{ required: true, message: "Please input your intro!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="about" label="About yourself">
          <TextArea
            rows={4}
            placeholder="Tell us more about yourself, your interests and your experience"
          />
        </Form.Item>
      </Form>
    </div>
  );
}

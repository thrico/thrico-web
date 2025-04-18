"use client";

import { useState } from "react";
import {
  Button,
  Form,
  Input,
  Modal,
  Select,
  Typography,
  Checkbox,
  Card,
} from "antd";
import {
  EditOutlined,
  GlobalOutlined,
  InfoCircleOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { updateProfileDetails } from "@/graphql/actions/profile";

const { Title, Text } = Typography;

export default function EditProfile() {
  const [update, { loading }] = updateProfileDetails({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);

  const handleSubmit = (values: any) => {
    update({
      variables: {
        input: {
          ...values,
        },
      },
    });
  };

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 24 }}>
      <Button onClick={showModal} type="text" icon={<EditOutlined />} />

      <Modal
        title="Edit intro"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            loading={loading}
            key="submit"
            type="primary"
            onClick={() => form.submit()}
          >
            Save
          </Button>,
        ]}
        width={700}
        height={300}
      >
        <Card style={{ overflow: "auto", height: "50vh" }}>
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            initialValues={{
              firstName: "Pankaj",
              lastName: "Verma",
              position:
                "Full Stack Developer at PulsePlay Digital Private Limited",
            }}
          >
            <Text type="secondary">* Indicates required</Text>

            <Form.Item
              label="First name*"
              name="firstName"
              rules={[
                {
                  required: true,
                  message: "Please input your First Name",
                  max: 100,
                  min: 2,
                },
              ]}
            >
              <Input showCount />
            </Form.Item>

            <Form.Item
              label="Last name*"
              name="lastName"
              rules={[
                {
                  required: true,
                  message: "Please input your Last Name",
                  max: 100,
                  min: 2,
                },
              ]}
            >
              <Input showCount />
            </Form.Item>

            <Form.Item
              label="Pronouns"
              name="pronouns"
              extra="Let others know how to refer to you."
              required={true}
            >
              <Select
                placeholder="Please select"
                options={[
                  { value: "they/them", label: "They/Them" },
                  { value: "she/her", label: "She/Her" },
                  { value: "he/him", label: "He/Him" },
                ]}
              />
            </Form.Item>

            <Form.Item
              label="Headline*"
              name="headline"
              required
              initialValue="Engineering 👷 💼🎶 🤔"
              rules={[
                {
                  required: true,
                  message: "Please input your Headline",
                },
              ]}
            >
              <Input.TextArea showCount maxLength={100} minLength={2} />
            </Form.Item>

            <Title level={3}>Current position</Title>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please input your Current Position",
                },
              ]}
              label="Position*"
              name="currentPosition"
              required
            >
              <Input showCount maxLength={100} minLength={2} />
            </Form.Item>

            <Title level={2} style={{ marginTop: 24 }}>
              Website and Social Media
            </Title>

            <Text type="secondary">
              Add links that will appear at the top of your profile
            </Text>

            <Form.Item label="LinkedIn" name="linkedin">
              <Input
                maxLength={100}
                minLength={2}
                showCount
                prefix={<LinkedinOutlined />}
                placeholder="https://linkedin.com/in/yourprofile"
              />
            </Form.Item>
            <Form.Item label="Instagram" name="instagram">
              <Input
                maxLength={100}
                minLength={2}
                showCount
                prefix={<InstagramOutlined />}
                placeholder="https://instagram.com/yourusername"
              />
            </Form.Item>
            <Form.Item label="Portfolio" name="portfolio">
              <Input
                maxLength={100}
                minLength={2}
                showCount
                prefix={<GlobalOutlined />}
                placeholder="https://yourportfolio.com"
              />
            </Form.Item>
          </Form>
        </Card>
      </Modal>
    </div>
  );
}

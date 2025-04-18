"use client";
import {
  Breadcrumb,
  Button,
  Card,
  Form,
  Input,
  Layout,
  Space,
  Typography,
} from "antd";
import { HomeOutlined, InfoCircleOutlined } from "@ant-design/icons";
import Image from "next/image";

const { Content } = Layout;
const { Title, Text, Link } = Typography;
const { TextArea } = Input;

export default function ConfirmBooking() {
  return (
    <Layout style={{ background: "white", padding: "24px" }}>
      <div style={{ padding: "16px 24px" }}>
        <Breadcrumb
          items={[
            {
              title: (
                <Link href="/">
                  <HomeOutlined />
                </Link>
              ),
            },
            { title: <Link href="/mentor">Abhishek Jakhar</Link> },
            { title: <Link href="/sessions">Sessions</Link> },
            { title: "Details" },
          ]}
        />
      </div>
      <Content style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", gap: "48px" }}>
          {/* Left Column - Form */}
          <div style={{ flex: "1" }}>
            <Title level={1} style={{ marginBottom: 32 }}>
              Confirm booking
            </Title>

            <Form layout="vertical">
              <Title level={3} style={{ marginBottom: 24 }}>
                Contact information
              </Title>

              <div style={{ display: "flex", gap: 16, marginBottom: 24 }}>
                <Form.Item label="First name" style={{ flex: 1 }} required>
                  <Input placeholder="Pankaj" size="large" />
                </Form.Item>

                <Form.Item label="Last name" style={{ flex: 1 }} required>
                  <Input placeholder="Verma" size="large" />
                </Form.Item>
              </div>

              <Form.Item label="Email address" required>
                <Input
                  placeholder="pankaj.verma.pulseplaydigital@gmail.com"
                  size="large"
                />
              </Form.Item>

              <Form.Item
                label={
                  <Space>
                    Message for Abhishek
                    <Text type="secondary">(optional)</Text>
                  </Space>
                }
              >
                <TextArea
                  rows={4}
                  placeholder="Write your message here..."
                  size="large"
                />
              </Form.Item>

              <Title level={3} style={{ marginTop: 32, marginBottom: 24 }}>
                Availability
              </Title>

              <Card style={{ background: "#f0f7ff", border: "none" }}>
                <Space>
                  <InfoCircleOutlined style={{ color: "#1677ff" }} />
                  <Text>
                    You'll be able to pick one of Abhishek's available slots
                    after you confirm booking.
                  </Text>
                </Space>
              </Card>
            </Form>
          </div>

          {/* Right Column - Summary */}
          <div style={{ width: 400 }}>
            <Card>
              <Space align="start" style={{ marginBottom: 24 }}>
                <Image
                  src={"https://cdn.thrico.network/defaultEventCover.png"}
                  alt="Mentor"
                  width={64}
                  height={64}
                  style={{ borderRadius: 8 }}
                />
                <div>
                  <Title level={4} style={{ margin: 0 }}>
                    Introductory Call
                  </Title>
                  <Text type="secondary">Carried out by Abhishek Jakhar</Text>
                </div>
              </Space>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 8,
                }}
              >
                <Text>Price per Session</Text>
                <Text strong>$39</Text>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 24,
                }}
              >
                <Text>Duration</Text>
                <Text>15 minutes</Text>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 24,
                }}
              >
                <Text strong>Total</Text>
                <Text strong>$39</Text>
              </div>

              <Button
                type="primary"
                size="large"
                block
                style={{
                  marginBottom: 16,
                }}
              >
                Go to checkout →
              </Button>

              <Text type="secondary" style={{ fontSize: 12 }}>
                By clicking "Go to checkout", you agree to our{" "}
                <Link>Terms of Service</Link> and{" "}
                <Link>Cancellation Policy</Link>
              </Text>
            </Card>
          </div>
        </div>
      </Content>
    </Layout>
  );
}

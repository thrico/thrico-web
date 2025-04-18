"use client";

import {
  Breadcrumb,
  Typography,
  Rate,
  Card,
  Button,
  Space,
  Layout,
} from "antd";
import { HomeOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";

const { Content } = Layout;
const { Title, Text } = Typography;

export default function BookingPage() {
  return (
    <Layout style={{ background: "white", minHeight: "100vh" }}>
      {/* Breadcrumb Navigation */}
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
          ]}
        />
      </div>

      <Content style={{ padding: "0 24px" }}>
        <div
          style={{
            display: "flex",
            gap: "48px",
            maxWidth: 1200,
            margin: "0 auto",
          }}
        >
          {/* Left Column */}
          <div style={{ flex: 1 }}>
            <div style={{ marginBottom: 24 }}>
              <Title style={{ marginBottom: 16 }}>
                Book Session with <Text underline>Abhishek</Text>
              </Title>

              <Space size="large" align="center">
                <Title level={2} style={{ margin: 0 }}>
                  $39
                </Title>
                <Space>
                  <Rate disabled defaultValue={5} style={{ fontSize: 16 }} />
                  <Text type="secondary">76 reviews</Text>
                </Space>
                <img
                  src="/placeholder.svg?height=20&width=30"
                  alt="UAE flag"
                  style={{ height: 20 }}
                />
              </Space>
            </div>

            <Text
              style={{
                fontSize: 16,
                color: "#4B5563",
                display: "block",
                marginBottom: 24,
              }}
            >
              If you're looking for a mentor, and you're just not sure about how
              this all works – this one is for you. In a casual, informal
              introductory call, a mentor will introduce themselves, show you...{" "}
            </Text>

            <div style={{ display: "flex", gap: 16, marginBottom: 24 }}>
              <Card style={{ flex: 1 }}>
                <Title level={4}>15 minutes</Title>
                <Text type="secondary">
                  Reserve up to 15 minutes for your session.
                </Text>
              </Card>

              <Card style={{ flex: 1 }}>
                <Title level={4}>Instant Schedule</Title>
                <Text type="secondary">
                  You`ll be able pick a time that suits you right after booking.
                </Text>
              </Card>
            </div>

            <Text
              type="secondary"
              style={{ display: "block", marginBottom: 8 }}
            >
              Scheduling conflict? No-show? Cancel sessions & get your money
              back instantly.{" "}
              <Link href={"/"}>Review our cancellation policy.</Link>
            </Text>

            <Link href="/mentorship/book/details/2924">
              <Button
                type="primary"
                size="large"
                block
                style={{
                  height: 48,
                  marginBottom: 16,
                }}
              >
                Continue to booking
              </Button>
            </Link>
          </div>

          {/* Right Column - Image */}
          <div style={{ flex: 1 }}>
            <div
              style={{
                borderRadius: 16,
                overflow: "hidden",
                height: 600,
                position: "relative",
              }}
            >
              <Image
                src={"https://cdn.thrico.network/defaultEventCover.png"}
                alt="Mentor at Golden Gate Bridge"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  );
}

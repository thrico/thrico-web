import React from "react";
import { Card, Typography, List, Button, Space } from "antd";
import { Avatar } from "antd";
import { InfoCircleOutlined, RightOutlined } from "@ant-design/icons";
import Link from "next/link";

const { Title, Text } = Typography;

export default function News() {
  const newsItems = [
    {
      title: "Walking on a greener path",
      time: "3d ago",
      readers: "28,904 readers",
    },
    { title: "Indian startups", time: "5d ago", readers: "5,772 readers" },
    { title: "FMCG firms", time: "5d ago", readers: "2,832 readers" },
    {
      title: "US election: India impact",
      time: "4d ago",
      readers: "2,400 readers",
    },
    {
      title: "India's smartphone market",
      time: "1d ago",
      readers: "886 readers",
    },
  ];

  const puzzles = [
    {
      title: "Tango",
      description: "Harmonize the grid",
      icon: "🟦",
    },
    {
      title: "Queens",
      description: "Crown each region",
      icon: "🎮",
    },
    {
      title: "Pinpoint",
      description: "Guess the category",
      icon: "📱",
    },
    {
      title: "Crossclimb",
      description: "Unlock a trivia ladder",
      icon: "🎯",
    },
  ];

  return (
    <Card
      style={{
        maxWidth: 400,
        margin: "0 auto",
        borderRadius: 8,
      }}
      bodyStyle={{ padding: "20px 16px" }}
    >
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Title level={4} style={{ margin: 0 }}>
            News
          </Title>
          <InfoCircleOutlined
            style={{ fontSize: "20px", color: "rgba(0, 0, 0, 0.45)" }}
          />
        </div>

        <div>
          <Title
            level={5}
            style={{ color: "rgba(0, 0, 0, 0.45)", marginBottom: 16 }}
          >
            Top stories
          </Title>
          <List
            itemLayout="vertical"
            dataSource={newsItems}
            renderItem={(item) => (
              <List.Item style={{ padding: "8px 0", borderBottom: "none" }}>
                <div style={{ marginBottom: 4 }}>
                  <Text strong style={{ fontSize: "16px" }}>
                    {item.title}
                  </Text>
                </div>
                <Text type="secondary" style={{ fontSize: "14px" }}>
                  {item.time} • {item.readers}
                </Text>
              </List.Item>
            )}
          />
          <Link href="/news">
            <Button
              type="text"
              style={{ padding: 0, height: "auto", marginTop: 8 }}
            >
              <Space>
                <span style={{ fontWeight: 500 }}>Show more</span>
                <RightOutlined style={{ fontSize: "12px" }} />
              </Space>
            </Button>
          </Link>
        </div>

        <div>
          <Title
            level={5}
            style={{ color: "rgba(0, 0, 0, 0.45)", marginBottom: 16 }}
          >
            Today's Challenges
          </Title>
          <List
            itemLayout="horizontal"
            dataSource={puzzles}
            renderItem={(item) => (
              <List.Item
                style={{
                  padding: "8px 0",
                  cursor: "pointer",
                  borderBottom: "none",
                }}
                extra={
                  <RightOutlined style={{ color: "rgba(0, 0, 0, 0.45)" }} />
                }
              >
                <List.Item.Meta
                  avatar={
                    <Avatar style={{ background: "none", fontSize: "24px" }}>
                      {item.icon}
                    </Avatar>
                  }
                  title={<Text strong>{item.title}</Text>}
                  description={<Text type="secondary">{item.description}</Text>}
                />
              </List.Item>
            )}
          />
        </div>
      </Space>
    </Card>
  );
}

"use client";

import React from "react";
import {
  Tabs,
  Card,
  Avatar,
  Badge,
  Space,
  Button,
  List,
  Tag,
  Typography,
  Divider,
} from "antd";
import {
  MessageOutlined,
  LikeOutlined,
  BookOutlined,
  RightOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const { Title, Text, Paragraph } = Typography;

export default function BlogFeed() {
  const articles = [
    {
      id: 1,
      author: "BuildBear",
      authorImage: "/placeholder.svg?height=40&width=40",
      domain: "buildbear.hashnode.dev",
      date: "a day ago",
      title: "The Ultimate Guide to Web3.py for Developers",
      description:
        "For Python developers looking to interact with Ethereum, web3.py is the go-to library. This guide shows you how to use web3.py with BuildBear RPC to test, deploy, and manage...",
      likes: 11,
      reads: 31,
      category: "Web3",
      featured: true,
      thumbnail: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      author: "Michael Larocca",
      authorImage: "/placeholder.svg?height=40&width=40",
      domain: "michaeljudelarocca.hashnode.dev",
      date: "Nov 27, 2024",
      title: "How to Elevate Your Coding Skills to Stand Out in the Job Market",
      description:
        "Introduction To become a hirable and sought-after web developer in today's competitive job market, you must elevat...",
      likes: 13,
      reads: 38,
      category: "#codenewbies",
      featured: true,
      thumbnail: "/placeholder.svg?height=200&width=300",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        gap: "24px",
        padding: "20px",

        margin: "0 auto",
      }}
    >
      <Card style={{ width: 300, alignSelf: "flex-start" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 16,
          }}
        >
          <Title level={4} style={{ margin: 0 }}>
            Changelog
          </Title>
          <Button type="text" icon={<CloseOutlined />} />
        </div>
        <div
          style={{
            background: "#000",
            borderRadius: 8,
            padding: 16,
            marginBottom: 16,
          }}
        >
          <Space align="center">
            <Avatar style={{ background: "#fff" }} />
            <Text style={{ color: "#fff" }}>Changelog</Text>
          </Space>
        </div>
        <Title level={5}>
          New steps component and improved accessibility on Hashnode's blog and
          docs product.
        </Title>
        <Text type="secondary">Nov 5, 2024</Text>
        <Tag color="success" style={{ marginLeft: 8 }}>
          New
        </Tag>
        <Divider />
        <Button type="link" block>
          View previous changelogs
        </Button>
      </Card>
      <div style={{ flex: 1 }}>
        <Tabs
          defaultActiveKey="1"
          items={[
            {
              key: "1",
              label: (
                <Space>
                  <span style={{ color: "#4F46E5" }}>✦</span>
                  Personalized
                </Space>
              ),
            },
            {
              key: "2",
              label: (
                <Space>
                  <span>👥</span>
                  Following
                </Space>
              ),
            },
            {
              key: "3",
              label: (
                <Space>
                  <span>✨</span>
                  Featured
                </Space>
              ),
            },
          ]}
        />

        <List
          itemLayout="vertical"
          dataSource={articles}
          renderItem={(item) => (
            <Card style={{ marginBottom: 16 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 16,
                }}
              >
                <Space>
                  <Avatar src={item.authorImage} />
                  <div>
                    <Text strong>{item.author}</Text>
                    <Text type="secondary" style={{ display: "block" }}>
                      {item.date}
                    </Text>
                  </div>
                </Space>
                {item.featured && (
                  <Badge
                    count="Featured"
                    style={{
                      backgroundColor: "#EEF2FF",
                      color: "#4F46E5",
                      border: "none",
                    }}
                  />
                )}
              </div>

              <Link href="/news/ssdsdd">
                <Title level={4} style={{ marginBottom: 8 }}>
                  {item.title}
                </Title>
              </Link>
              <Paragraph type="secondary" ellipsis={{ rows: 2 }}>
                {item.description}
              </Paragraph>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 16,
                }}
              >
                <Space size="large">
                  <Button type="text" icon={<MessageOutlined />}>
                    Discuss
                  </Button>
                  <Space>
                    <LikeOutlined /> {item.likes} likes
                  </Space>
                  <Space>
                    <BookOutlined /> {item.reads} reads
                  </Space>
                </Space>
                <Space>
                  <Tag color="default">{item.category}</Tag>
                  <Button type="text" shape="circle" icon={<BookOutlined />} />
                </Space>
              </div>
            </Card>
          )}
        />

        <div style={{ marginTop: 32 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <Title level={4} style={{ margin: 0 }}>
              Top Discussions
            </Title>
            <Button type="link" icon={<RightOutlined />}>
              See all discussions
            </Button>
          </div>
          <Card>
            <List
              itemLayout="horizontal"
              dataSource={[
                {
                  title: "Error Handling: Keeping Your Code Safe!",
                  author: "Saanvi Kumar",
                  likes: 30,
                  comments: 2,
                },
              ]}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar>S</Avatar>}
                    title={item.title}
                    description={item.author}
                  />
                  <Space>
                    <MessageOutlined /> {item.comments}
                    <LikeOutlined /> {item.likes}
                  </Space>
                </List.Item>
              )}
            />
          </Card>
        </div>
      </div>
    </div>
  );
}

"use client";

import React from "react";
import {
  Layout,
  Card,
  Typography,
  Button,
  Tabs,
  List,
  Space,
  Avatar,
  Flex,
} from "antd";
import { MoreOutlined } from "@ant-design/icons";
import Container from "@/Layout/Container";

const { Content } = Layout;
const { Title, Text, Paragraph } = Typography;
const { TabPane } = Tabs;
import { faker } from "@faker-js/faker";
import { BellOutlined } from "@ant-design/icons";
import { useGetUser } from "@/graphql/actions";

function ProfileCard() {
  const {
    data: { getUser },
  } = useGetUser();
  return (
    <div style={{ maxWidth: "300px", margin: "0 auto" }}>
      <Card
        cover={
          <div
            style={{
              position: "relative",
              height: "100px",
              background: "linear-gradient(90deg, #e0e0e0 0%, #f0f0f0 100%)",
            }}
          >
            <UserCover cover={getUser.cover} />
          </div>
        }
      >
        <UserAvatar
          size={72}
          src={getUser.avatar}
          style={{
            position: "absolute",
            top: "20%",
            left: "37%",
            border: "4px solid white",
            marginBottom: "-36px",
          }}
        />
        <Title level={4} style={{ marginBottom: "4px", marginTop: 40 }}>
          {getUser?.firstName} {getUser?.lastName}
        </Title>
        <Text>{getUser?.currentPosition}</Text>
        <Text
          type="secondary"
          style={{ display: "block", marginBottom: "12px" }}
        >
          Dharamshala, Himachal Pradesh
        </Text>
      </Card>

      <Card style={{ marginTop: "16px" }}>
        <Space align="start">
          <BellOutlined style={{ fontSize: "24px", color: "#1890ff" }} />
          <div>
            <Text strong style={{ display: "block" }}>
              Manage your Notifications
            </Text>
            <Button type="link" style={{ padding: "0" }}>
              View Settings
            </Button>
          </div>
        </Space>
      </Card>
    </div>
  );
}

import { EllipsisOutlined } from "@ant-design/icons";

import UserAvatar from "@/components/avatar/Avatar";
import UserCover from "@/components/avatar/UserCover";

function AdCard() {
  return (
    <Card
      style={{
        width: "25%",
        height: 270,
        margin: "0 auto",
        borderRadius: "8px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "16px",
        }}
      >
        <Paragraph
          style={{
            margin: 0,
            fontSize: "14px",
            width: "80%",
            color: "rgba(0, 0, 0, 0.65)",
          }}
        >
          Expert prep to help you land a role at Google
        </Paragraph>
        <Space>
          <Text style={{ fontSize: "12px", color: "rgba(0, 0, 0, 0.45)" }}>
            Ad
          </Text>
          <EllipsisOutlined
            style={{ fontSize: "16px", color: "rgba(0, 0, 0, 0.45)" }}
          />
        </Space>
      </div>
      <Space align="start" size={16} style={{ marginBottom: "16px" }}>
        <UserAvatar size={48} />
        <div
          style={{
            width: 48,
            height: 48,
            backgroundColor: "#1890ff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "4px",
          }}
        >
          <Text
            style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}
          >
            &#123;ik&#125;
          </Text>
        </div>
      </Space>
      <Paragraph
        strong
        style={{ margin: 0, fontSize: "16px", lineHeight: "1.4" }}
      >
        Take Your Career to Google, Pankaj
      </Paragraph>
      <Button
        type="default"
        block
        style={{
          marginTop: "16px",
        }}
      >
        Join Free Webinar
      </Button>
    </Card>
  );
}

const FeedItem = ({ type, avatar, author, content, time }) => (
  <Card
    style={{
      marginBottom: 16,
      background: type === "comment" ? "#e6f7ff" : "white",
    }}
  >
    <Space align="start">
      <Avatar src={avatar} />
      <Space direction="vertical" style={{ flex: 1, width: "90%" }}>
        <Text strong>{author}</Text>
        <Paragraph>{content}</Paragraph>
        <Text type="secondary">{time}</Text>
      </Space>
      <Space style={{ position: "absolute", right: 10 }} direction="vertical">
        <Button type="text" icon={<MoreOutlined />} />
      </Space>
    </Space>
  </Card>
);

export default function LinkedInFeed() {
  return (
    <>
      <Container>
        <Flex
          justify="space-between"
          style={{
            width: "100%",
            marginTop: 20,
          }}
          gap={40}
        >
          <ProfileCard />
          <Flex style={{ width: "60%" }} vertical>
            <Content style={{ padding: "0 24px", minHeight: 280 }}>
              <Tabs defaultActiveKey="1">
                <TabPane tab="All" key="1" />
                <TabPane tab="Jobs" key="2" />
                <TabPane tab="My posts" key="3" />
                <TabPane tab="Mentions" key="4" />
              </Tabs>
              <Card>
                <List
                  itemLayout="vertical"
                  dataSource={[
                    {
                      type: "comment",
                      avatar: faker.image.avatar(),
                      author: faker.internet.username(),
                      content:
                        "commented on Arpit Bhayani's post: However, not all the solutions are worth the effort",
                      time: "18m",
                    },
                    {
                      type: "post",
                      avatar: faker.image.avatar(),
                      author: faker.internet.username(),
                      content:
                        "Tech Mahindra is proud to be Presenting Sponsor for the ninth consecutive year at the WSJ CEO Council Summit 2024. As enterprises face unprecedented challenges...",
                      time: "48m",
                    },
                    {
                      type: "comment",
                      avatar: faker.image.avatar(),
                      author: faker.internet.username(),
                      content:
                        "and others have added 17 comments on Pranjal Kalita's post",
                      time: "1h",
                    },
                    {
                      type: "post",
                      avatar: faker.image.avatar(),
                      author: faker.internet.username(),
                      content:
                        "The power of connection at first conversation is highly underrated! We just clicked over a coffee and rest is a story. Welcome to the tribe Manisha! and for many...",
                      time: "1h",
                    },
                    {
                      type: "birthday",
                      avatar: faker.image.avatar(),
                      author: faker.internet.username(),
                      content:
                        "Wish Abhishek Singh a happy birthday. View more opportunities to catch up with your network.",
                      time: "1h",
                    },
                  ]}
                  renderItem={(item) => <FeedItem {...item} />}
                />
              </Card>
            </Content>
          </Flex>

          <AdCard />
        </Flex>
      </Container>
    </>
  );
}

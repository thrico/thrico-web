import NextImage from "@/components/common/Image";
import {
  CalendarOutlined,
  EditOutlined,
  GlobalOutlined,
  LockOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Card, Space, Tag, Typography } from "antd";

import React from "react";
import People from "../discover/list/Card/People";
import moment from "moment";
import CTA from "../discover/list/Card/CTA";

const HeroSection = ({ data, slug }) => {
  const { Title, Text, Paragraph } = Typography;
  return (
    <Card
      cover={
        <div
          style={{
            height: 300,
            background: "#f0f2f5",
            position: "relative",
          }}
        >
          <NextImage src={data?.group?.cover} />;
          <Button
            icon={<EditOutlined />}
            style={{ position: "absolute", top: 16, right: 16 }}
          >
            Edit
          </Button>
        </div>
      }
    >
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <Space direction="vertical">
          <Title level={3}>{data?.group?.title}</Title>
          <Space wrap>
            <Tag
              icon={
                data?.groupSettings.privacy === "public" ? (
                  <GlobalOutlined />
                ) : (
                  <LockOutlined />
                )
              }
            >
              <span style={{ textTransform: "capitalize" }}>
                {data?.groupSettings.privacy}
              </span>
            </Tag>

            <Text type="secondary">
              <CalendarOutlined /> {moment(data?.group.createdAt).fromNow()}
            </Text>
          </Space>
          <Paragraph type="secondary">{data?.group?.about}</Paragraph>
        </Space>

        <Space wrap justify="space-between" style={{ width: "100%" }}>
          <Space>
            <Tag color="orange">Nature</Tag>
            <Tag color="red">Trekking</Tag>
            <Tag color="cyan">Mountains</Tag>
          </Space>

          <Button type="primary" icon={<UserOutlined />}>
            + Invite
          </Button>
        </Space>

        <Space align="center">
          <People id={slug} />
        </Space>
      </Space>
    </Card>
  );
};

export default HeroSection;

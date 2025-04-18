import CommunitiesGuides from "@/components/guides/CommunitiesGuides";
import { GlobalOutlined, LockOutlined } from "@ant-design/icons";
import { Alert, Card, Image, Space, Tabs, Typography } from "antd";

import React from "react";

interface props {
  name: string;
  privacy: string;
  about: string;
  imageUrl: string;
}
const Preview = ({ name, privacy, about, imageUrl }: props) => {
  return (
    <Card
      style={{ width: "60rem", position: "sticky", top: 0, height: "50rem" }}
      title="Preview"
      extra={
        <Space>
          <CommunitiesGuides />
        </Space>
      }
    >
      <Image
        preview={false}
        alt="cover"
        style={{
          width: "100%",
          height: "20rem",
          filter: "grayscale(100%)",
          objectFit: "cover",
        }}
        src={imageUrl}
      />
      <Typography.Title style={{ marginTop: 20 }} level={3}>
        {name}
      </Typography.Title>
      <Typography.Title level={5} style={{ textTransform: "capitalize" }}>
        {privacy === "private" ? (
          <LockOutlined style={{ marginRight: 10 }} />
        ) : (
          <GlobalOutlined style={{ marginRight: 10 }} />
        )}
        {privacy}
      </Typography.Title>
      <Typography.Paragraph>{about}</Typography.Paragraph>
      <Tabs
        style={{ marginTop: 20 }}
        items={[
          "Discussion",
          "Featured",
          "People",
          "Media",
          "Events",
          "Invites",
        ].map((t, i) => {
          const id = String(i + 1);
          return {
            key: id,
            label: t,
          };
        })}
      />
      <Alert
        banner
        message={
          "When you create a group, it will undergo verification by the admin. Once approved, it will become visible to the public. You'll receive a notification once the group is verified."
        }
      />
    </Card>
  );
};

export default Preview;

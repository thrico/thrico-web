"use client";

import { Typography, Tabs, Button, Empty } from "antd";
import Image from "next/image";

const { Title, Text } = Typography;

export default function BookingsPage() {
  return (
    <div style={{ margin: "0 auto", padding: "24px" }}>
      <Title level={1} style={{ marginBottom: 32 }}>
        Bookings
      </Title>

      {/* Filter Buttons */}
      <div
        style={{
          display: "flex",
          gap: 12,
          marginBottom: 32,
          flexWrap: "wrap",
        }}
      ></div>

      {/* Tabs */}
      <Tabs
        defaultActiveKey="upcoming"
        items={[
          {
            key: "upcoming",
            label: "Upcoming",
            children: <EmptyState />,
          },
          {
            key: "completed",
            label: "Completed",
            children: <EmptyState />,
          },
          {
            key: "action",
            label: "Need Action (1)",
            children: <EmptyState />,
          },
        ]}
      />
    </div>
  );
}

function EmptyState() {
  return (
    <Empty
      description={
        <div style={{ textAlign: "center" }}>
          <Title level={2} style={{ marginBottom: 16 }}>
            Share your page
          </Title>
          <Text
            style={{
              display: "block",
              color: "#666",
              marginBottom: 24,
              fontSize: 16,
            }}
          >
            A new booking might just be around the corner,
            <br />
            share your page today!
          </Text>
          <Button
            type="primary"
            style={{
              background: "#000",
              borderColor: "#000",
              height: 48,
              padding: "0 32px",
              fontSize: 16,
            }}
          >
            Share page
          </Button>
        </div>
      }
      style={{ margin: "48px 0" }}
    />
  );
}

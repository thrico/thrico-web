"use client";

import { Typography, Button, Card, Statistic, Tag, Dropdown } from "antd";
import {
  EyeOutlined,
  ShareAltOutlined,
  MoreOutlined,
  EditOutlined,
  LineChartOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { CreateServiceDrawer } from "@/components/mentorship/dashboard/services/CreateService";

const { Title, Text } = Typography;

export default function ServicesPage() {
  const filterButtons = [{ key: "1-1", label: "1:1 Call", active: true }];

  const services = [
    {
      id: 1,
      name: "1sddsds",
      duration: "30 mins",
      price: "₹1+",
      visibility: "Public",
      stats: {
        views: 12,
        bookings: 2,
        earnings: "₹2",
        conversion: "16.67%",
      },
    },
    {
      id: 2,
      name: "dsds",
      duration: "30 mins",
      price: "₹200+",
      visibility: "Public",
      stats: {
        views: 0,
        bookings: 0,
        earnings: "₹0",
        conversion: "0%",
      },
    },
    {
      id: 3,
      name: "Call",
      duration: "30 mins",
      price: "₹500+",
      visibility: "Hidden",
      stats: {
        views: 0,
        bookings: 0,
        earnings: "₹0",
        conversion: "0%",
      },
    },
  ];

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "24px" }}>
      <CreateServiceDrawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 32,
        }}
      >
        <Title level={1} style={{ margin: 0 }}>
          Services
        </Title>
        <div style={{ display: "flex", gap: 12 }}>
          <Button
            type="primary"
            onClick={() => setIsDrawerOpen(true)}
            icon={<PlusOutlined />}
          >
            Add New
          </Button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: 12,
          marginBottom: 32,
          flexWrap: "wrap",
        }}
      >
        {filterButtons.map((button) => (
          <Button
            key={button.key}
            type={button.active ? "primary" : "default"}
            style={{
              borderRadius: 20,
              background: button.active ? "#000" : "#fff",
              borderColor: "#000",
              color: button.active ? "#fff" : "#000",
            }}
          >
            {button.label}
          </Button>
        ))}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {services.map((service) => (
          <Card
            key={service.id}
            style={{ borderRadius: 12 }}
            bodyStyle={{ padding: 24 }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <div>
                <Title level={4} style={{ margin: 0 }}>
                  {service.name}
                </Title>
                <Text type="secondary">
                  {service.duration} | {service.price}
                </Text>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Tag icon={<EyeOutlined />}>{service.visibility}</Tag>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 24,
              }}
            >
              <div style={{ display: "flex", gap: 12 }}>
                <Button icon={<EditOutlined />}>Edit</Button>
                <Button icon={<ShareAltOutlined />} />
                <Dropdown
                  menu={{
                    items: [
                      { key: "1", label: "Edit" },
                      { key: "2", label: "Delete" },
                    ],
                  }}
                  trigger={["click"]}
                >
                  <Button icon={<MoreOutlined />} />
                </Dropdown>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 24,
                  borderLeft: "1px solid #eee",
                  paddingLeft: 24,
                }}
              >
                <Statistic
                  title="Views"
                  value={service.stats.views}
                  style={{ marginRight: 24 }}
                />
                <Statistic
                  title="Bookings"
                  value={service.stats.bookings}
                  style={{ marginRight: 24 }}
                />
                <Statistic
                  title="Earnings"
                  value={service.stats.earnings}
                  style={{ marginRight: 24 }}
                />
                <Statistic
                  title="Conversion"
                  value={service.stats.conversion}
                  style={{ marginRight: 24 }}
                />
                <Button
                  type="text"
                  icon={<LineChartOutlined style={{ fontSize: 24 }} />}
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

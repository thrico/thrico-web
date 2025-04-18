"use client";

import {
  Card,
  Radio,
  Space,
  Typography,
  Rate,
  Badge,
  Grid,
  Row,
  Col,
  Button,
  Tooltip,
} from "antd";
import {
  InfoCircleOutlined,
  ArrowRightOutlined,
  CalendarOutlined,
  GiftOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const { Title, Text } = Typography;

interface Service {
  id: string;
  title: string;
  duration: number;
  type: string;
  price: number;
  rating?: number;
  description?: string;
  badge?: {
    text: string;
    color: string;
  };
  products?: number;
}

export default function Services() {
  const services: Service[] = [
    {
      id: "1",
      title: "sdsd",
      duration: 30,
      type: "Video Meeting",
      price: 30,
    },
    {
      id: "2",
      title: "1sddsds",
      duration: 30,
      type: "Video Meeting",
      price: 1,
      rating: 5,
      description: "dds sd dssd s d sd",
    },
    {
      id: "3",
      title: "Call",
      duration: 30,
      type: "Video Meeting",
      price: 500,
      badge: {
        text: "Best Deal",
        color: "#f3e8ff",
      },
      products: 1,
    },
    {
      id: "4",
      title: "dsds",
      duration: 30,
      type: "Video Meeting",
      price: 200,
      badge: {
        text: "Popular",
        color: "#e8f0ff",
      },
    },
  ];

  return (
    <div style={{ padding: 24, maxWidth: 1200, margin: "0 auto" }}>
      <Radio.Group
        defaultValue="all"
        buttonStyle="solid"
        style={{ marginBottom: 24 }}
      >
        <Radio.Button
          value="all"
          style={{ backgroundColor: "black", color: "white" }}
        >
          All
        </Radio.Button>
        <Radio.Button value="call">1:1 Call</Radio.Button>
        <Radio.Button value="package">Package</Radio.Button>
      </Radio.Group>

      <Row gutter={[24, 24]}>
        {services.map((service) => (
          //   <Link href="/mentorship/book/session/2924">
          <Col key={service.id} xs={24} sm={12} lg={8}>
            <Card
              style={{
                borderRadius: 16,
                height: "100%",
              }}
              bodyStyle={{ height: "100%" }}
            >
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {service.badge && (
                  <Badge
                    count={service.badge.text}
                    style={{
                      backgroundColor: service.badge.color,
                      color:
                        service.badge.color === "#f3e8ff"
                          ? "#9333ea"
                          : "#2563eb",
                      marginBottom: 12,
                    }}
                  />
                )}

                <Title level={4} style={{ margin: 0, marginBottom: 8 }}>
                  {service.title}
                </Title>

                {service.rating && (
                  <Space style={{ marginBottom: 8 }}>
                    <Rate disabled defaultValue={service.rating} />
                    <Text>{service.rating}</Text>
                  </Space>
                )}

                {service.description && (
                  <Text type="secondary" style={{ marginBottom: 12 }}>
                    {service.description}
                  </Text>
                )}

                <div
                  style={{
                    marginTop: "auto",
                    backgroundColor: "#f5f5f5",
                    padding: 16,
                    borderRadius: 12,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Space>
                    {service.products ? (
                      <>
                        <GiftOutlined style={{ fontSize: 20, color: "#666" }} />
                        <div>
                          <Text>Package</Text>
                          <br />
                          <Text type="secondary">
                            {service.products} products
                          </Text>
                        </div>
                      </>
                    ) : (
                      <>
                        <CalendarOutlined
                          style={{ fontSize: 20, color: "#666" }}
                        />
                        <div>
                          <Text>{service.duration} mins</Text>
                          <br />
                          <Text type="secondary">{service.type}</Text>
                        </div>
                      </>
                    )}
                  </Space>

                  <Space>
                    <Tooltip title="Price breakdown">
                      <InfoCircleOutlined style={{ color: "#999" }} />
                    </Tooltip>
                    <Link href="/mentorship/book/session/2924">
                      <Button type="default" style={{ borderRadius: 20 }}>
                        ₹{service.price}+ <ArrowRightOutlined />
                      </Button>
                    </Link>
                  </Space>
                </div>
              </div>
            </Card>
          </Col>
          //   </Link>
        ))}
      </Row>
    </div>
  );
}

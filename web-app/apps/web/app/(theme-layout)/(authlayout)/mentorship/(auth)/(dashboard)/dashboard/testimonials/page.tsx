"use client";

import { useState } from "react";
import {
  Typography,
  Card,
  Rate,
  Button,
  Radio,
  Space,
  Dropdown,
  Row,
  Col,
} from "antd";
import {
  ShareAltOutlined,
  MoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

interface Testimonial {
  id: string;
  rating: number;
  text: string;
  author: string;
  date: string;
}

export default function TestimonialsPage() {
  const [filter, setFilter] = useState("all");

  const testimonials: Testimonial[] = [
    {
      id: "1",
      rating: 5,
      text: "good",
      author: "Pankaj Verma",
      date: "4th May, 2024",
    },
  ];

  const filteredTestimonials = testimonials.filter((testimonial) => {
    switch (filter) {
      case "high":
        return testimonial.rating >= 4;
      case "low":
        return testimonial.rating < 4;
      default:
        return true;
    }
  });

  const moreItems = [
    { key: "report", label: "Report" },
    { key: "delete", label: "Delete" },
  ];

  return (
    <div style={{ margin: "0 auto", padding: "24px" }}>
      <Row justify="space-between" align="middle" style={{ marginBottom: 24 }}>
        <Title level={2} style={{ margin: 0 }}>
          Testimonials and Ratings
        </Title>
      </Row>

      <Radio.Group
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{ marginBottom: 24 }}
      >
        <Space>
          <Radio.Button value="all">All ({testimonials.length})</Radio.Button>
          <Radio.Button value="high">
            High rating ({testimonials.filter((t) => t.rating >= 4).length})
          </Radio.Button>
          <Radio.Button value="low">
            Low rating ({testimonials.filter((t) => t.rating < 4).length})
          </Radio.Button>
        </Space>
      </Radio.Group>

      {filteredTestimonials.map((testimonial) => (
        <Card
          key={testimonial.id}
          style={{
            marginBottom: 16,
            backgroundColor: "#fafafa",
            border: "none",
            borderRadius: 12,
          }}
        >
          <div>
            <Rate
              disabled
              defaultValue={testimonial.rating}
              style={{ fontSize: 16 }}
            />
            <Text style={{ marginLeft: 8 }}>{testimonial.rating}/5</Text>
          </div>

          <Text
            style={{
              display: "block",
              margin: "16px 0",
              fontSize: 16,
            }}
          >
            {testimonial.text}
          </Text>

          <Row justify="space-between" align="middle">
            <Space direction="vertical" size={4}>
              <Text strong>{testimonial.author}</Text>
              <Text type="secondary">{testimonial.date}</Text>
            </Space>
            <Space>
              <Button
                type="primary"
                icon={<ShareAltOutlined />}
                style={{ backgroundColor: "#000" }}
              >
                Share
              </Button>
              <Dropdown menu={{ items: moreItems }} placement="bottomRight">
                <Button
                  type="text"
                  icon={<MoreOutlined />}
                  style={{
                    width: 32,
                    height: 32,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    backgroundColor: "#f0f0f0",
                  }}
                />
              </Dropdown>
            </Space>
          </Row>
        </Card>
      ))}
    </div>
  );
}

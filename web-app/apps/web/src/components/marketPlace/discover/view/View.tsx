import React from "react";
import { Card, Avatar, Row, Col, Typography, Space, Tooltip } from "antd";
import {
  EllipsisOutlined,
  HeartOutlined,
  ClockCircleOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

const listings = [
  {
    id: 1,
    title: "Golden Retriever - 5 months old",
    price: "₹18,000",
    user: "Harshita",
    time: "5 mins ago",
    location: "Dharamshala, Himachal Pradesh, India",
    image: "https://images.unsplash.com/photo-1558788353-f76d92427f16",
  },
  {
    id: 2,
    title: "5 BHK Villa - 3854 sqft.",
    price: "₹5,75,20,600",
    user: "Sara",
    time: "1 hour ago",
    location: "Chennai, Tamil Nadu, India",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    id: 3,
    title: "Realme Narzo N63 (8GB RAM) - 2 yrs old",
    price: "₹10,999",
    user: "Mohan",
    time: "23 hours ago",
    location: "Hyderabad, Telangana, India",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
  {
    id: 3,
    title: "Realme Narzo N63 (8GB RAM) - 2 yrs old",
    price: "₹10,999",
    user: "Mohan",
    time: "23 hours ago",
    location: "Hyderabad, Telangana, India",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
  // Add more items here
];

const ListingCard = ({ item }: { item: (typeof listings)[0] }) => (
  <Card
    hoverable
    style={{ width: "100%" }}
    cover={
      <img
        alt={item.title}
        src={item.image}
        style={{ height: 200, objectFit: "cover" }}
      />
    }
    actions={[
      <Tooltip key="wishlist" title="Add to wishlist">
        <HeartOutlined key="heart" />
      </Tooltip>,
      <Tooltip key="options" title="More options">
        <EllipsisOutlined key="ellipsis" />
      </Tooltip>,
    ]}
  >
    <Space direction="vertical" size="small">
      <Title level={4} style={{ marginBottom: 0 }}>
        {item.price}
      </Title>
      <Text strong>{item.title}</Text>
      <Space size="small">
        <Avatar size="small">{item.user[0]}</Avatar>
        <Text type="secondary">{item.user}</Text>
      </Space>
      <Space size="small">
        <ClockCircleOutlined />
        <Text type="secondary">{item.time}</Text>
      </Space>
      <Space size="small">
        <EnvironmentOutlined />
        <Text type="secondary" ellipsis>
          {item.location}
        </Text>
      </Space>
    </Space>
  </Card>
);

const MarketplaceGrid = () => (
  <div style={{ padding: 24 }}>
    <Row gutter={[16, 16]}>
      {listings.map((item) => (
        <Col key={item.id}>
          <ListingCard item={item} />
        </Col>
      ))}
    </Row>
  </div>
);

export default MarketplaceGrid;

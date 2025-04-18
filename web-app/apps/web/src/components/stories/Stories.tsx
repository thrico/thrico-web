import React from "react";
import { Typography, Card, Avatar, Row, Col, Flex } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { faker } from "@faker-js/faker";

const { Title } = Typography;

interface StoryProps {
  image: string;
  avatar: string;
  name: string;
}

const Story: React.FC<StoryProps> = ({ image, avatar, name }) => (
  <div
    style={{
      position: "relative",
      borderRadius: "16px",
      overflow: "hidden",
      height: "180px",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
    }}
  >
    <img
      src={image}
      alt="story"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: "8px",
        background:
          "linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0))",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Avatar
        src={avatar}
        icon={<UserOutlined />}
        size={20}
        style={{ border: "2px solid #fff" }}
      />
      <span
        style={{
          color: "white",
          fontSize: "12px",

          marginLeft: "8px",
        }}
      >
        {name}
      </span>
    </div>
  </div>
);

const Stories: React.FC = () => (
  <div style={{ padding: "24px", maxWidth: "600px", margin: "0 auto" }}>
    <Title
      level={2}
      style={{
        marginBottom: "16px",
        fontSize: "28px",
        fontWeight: "bold",
      }}
    >
      Stories
    </Title>
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={12}>
        <Story
          image={faker.image.urlPicsumPhotos()}
          avatar={faker.image.avatar()}
          name="Anatoly Pr..."
        />
      </Col>
      <Col xs={24} sm={12}>
        <Story
          image={faker.image.urlPicsumPhotos()}
          avatar={faker.image.avatar()}
          name="Lolita Earns"
        />
      </Col>
    </Row>
  </div>
);

export default Stories;

import type React from "react";
import { Card, Typography, Avatar, Button, Row, Col, Space } from "antd";
import {
  GlobalOutlined,
  StarOutlined,
  LineChartOutlined,
  MoreOutlined,
  CalendarOutlined,
  UserOutlined,
  MessageOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import Image from "next/image";

const { Title, Paragraph } = Typography;

const TechSourceClub: React.FC = () => {
  return (
    <Card style={{ width: 300, borderRadius: 8, overflow: "hidden" }}>
      <div style={{ position: "relative", height: 200 }}>
        <Image
          src="/placeholder.svg?height=200&width=300"
          alt="Tech Source Club"
          layout="fill"
          objectFit="cover"
        />
        <div
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            display: "flex",
            gap: 8,
          }}
        >
          <Avatar
            icon={<GlobalOutlined />}
            style={{ backgroundColor: "white", color: "#1890ff" }}
          />
          <Avatar
            icon={<StarOutlined />}
            style={{ backgroundColor: "white", color: "#1890ff" }}
          />
          <Avatar
            icon={<LineChartOutlined />}
            style={{ backgroundColor: "white", color: "#1890ff" }}
          />
          <Avatar
            icon={<MoreOutlined />}
            style={{ backgroundColor: "white", color: "#1890ff" }}
          />
        </div>
      </div>

      <div style={{ padding: "16px" }}>
        <Title level={4} style={{ marginBottom: 8 }}>
          Tech Source Club Tech Sou...
        </Title>
        <Paragraph type="secondary" style={{ marginBottom: 16 }}>
          A community for tech lovers to explore, learn, and connect.
        </Paragraph>

        <Row align="middle" style={{ marginBottom: 16 }}>
          <Col>
            <Avatar src="/placeholder.svg?height=32&width=32" />
          </Col>
          <Col flex="auto" style={{ marginLeft: 8 }}>
            <Typography.Text>Created by </Typography.Text>
            <Typography.Text type="secondary">Harshita</Typography.Text>
          </Col>
        </Row>

        <Row align="middle" style={{ marginBottom: 16 }}>
          <Col>
            <CalendarOutlined style={{ marginRight: 8 }} />
          </Col>
          <Col>
            <Typography.Text type="secondary">
              Created on 04 Jan, 2024
            </Typography.Text>
          </Col>
        </Row>

        <Row align="middle" style={{ marginBottom: 16 }}>
          <Space size={4}>
            <Avatar src="/placeholder.svg?height=24&width=24" size="small" />
            <Avatar src="/placeholder.svg?height=24&width=24" size="small" />
            <Avatar src="/placeholder.svg?height=24&width=24" size="small" />
            <Avatar style={{ backgroundColor: "#1890ff" }} size="small">
              +1k
            </Avatar>
          </Space>
          <Col flex="auto" />
          <Col>
            <Button type="primary">Join</Button>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={8}>
            <Space>
              <UserOutlined />
              <Typography.Text>1.1k</Typography.Text>
            </Space>
          </Col>
          <Col span={8}>
            <Space>
              <MessageOutlined />
              <Typography.Text>900</Typography.Text>
            </Space>
          </Col>
          <Col span={8}>
            <Space>
              <EyeOutlined />
              <Typography.Text>4.3k</Typography.Text>
            </Space>
          </Col>
        </Row>
      </div>
    </Card>
  );
};

export default TechSourceClub;

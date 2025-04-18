"use client";

import React from "react";
import {
  Layout,
  Menu,
  Button,
  Typography,
  Avatar,
  Row,
  Col,
  Space,
  Image,
} from "antd";

import { faker } from "@faker-js/faker";

const { Header, Content } = Layout;
const { Title, Paragraph } = Typography;

export default function HeroSection() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          background: "#fff",

          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 120,
              height: 31,
              background: "#1890ff",
              margin: "16px 24px 16px 0",
            }}
          />
          <Menu mode="horizontal" defaultSelectedKeys={["home"]}>
            <Menu.Item key="home">Home</Menu.Item>
            <Menu.Item key="about">About</Menu.Item>
            <Menu.Item key="events">Events</Menu.Item>
            <Menu.Item key="news">News</Menu.Item>
            <Menu.Item key="contact">Contact</Menu.Item>
          </Menu>
        </div>
        <Space>
          <Button>Login</Button>
          <Button type="primary">Register</Button>
        </Space>
      </Header>

      <Content></Content>
    </Layout>
  );
}

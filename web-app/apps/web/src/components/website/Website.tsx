"use client";

import React from "react";
import {
  Layout,
  Button,
  Typography,
  Avatar,
  Row,
  Col,
  Space,
  Image,
} from "antd";
import { UserOutlined } from "@ant-design/icons";

import Stories from "./Stories";
import WebsiteFooter from "./Footer";
import { faker } from "@faker-js/faker";
import { useGetUser } from "@/graphql/actions";
import LoginButton from "../common/button/LoginButton";

const { Title, Paragraph } = Typography;
const { Content } = Layout;
export default function HeroSection() {
  const { data: { getUser } = {}, loading, error } = useGetUser();
  return (
    <>
      <Content>
        <div
          style={{
            position: "relative",
            height: 500,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            textAlign: "center",
            width: "100%",
            backgroundImage: `url(${faker.image.urlLoremFlickr()})`,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.5)",
            }}
          />
          <div style={{ position: "relative", zIndex: 1 }}>
            <Title style={{ color: "#fff", marginBottom: 16 }}>
              Build Thriving Communities
            </Title>
            <Title level={2} style={{ color: "#fff", marginBottom: 24 }}>
              Drive Outcomes
            </Title>
            {!getUser && (
              <LoginButton>
                Register an Account
              </LoginButton>
            )}
          </div>
        </div>

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 50px" }}>
          <Row gutter={64} align="middle">
            <Col span={12}>
              <Image
                preview={false}
                alt="logo"
                src={faker.image.urlLoremFlickr()}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: 400,
                  marginBottom: 20,
                }}
              />
            </Col>
            <Col span={12}>
              <div
                style={{
                  marginBottom: 8,
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#1890ff",
                }}
              >
                MEMBERS
              </div>
              <Title level={2}>
                Professional Reunion: Old Colleagues Directory
              </Title>
              <Paragraph
                style={{
                  fontSize: 16,
                  color: "rgba(0, 0, 0, 0.65)",
                  marginBottom: 24,
                }}
              >
                The Directory feature offers users a comprehensive list of
                members, groups, and resources within the community,
                facilitating easy navigation and discovery.
              </Paragraph>
              <Button type="primary" size="large">
                Find Members
              </Button>
              <div style={{ marginTop: 24 }}>
                <Space align="center">
                  <Avatar.Group>
                    <Avatar src={faker.image.avatar()} />
                    <Avatar src={faker.image.avatar()} />
                    <Avatar src={faker.image.avatar()} />
                    <Avatar src={faker.image.avatar()} />
                  </Avatar.Group>
                  <span style={{ fontWeight: 600 }}>+3K Members</span>
                </Space>
              </div>
            </Col>
          </Row>
        </div>
      </Content>

      <Stories />
    </>
  );
}

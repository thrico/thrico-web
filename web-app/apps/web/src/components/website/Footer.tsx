"use client";

import React from "react";
import { Layout, Row, Col, Typography, Space, Divider, Image } from "antd";
import {
  FacebookOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;
const { Title, Text, Link } = Typography;

export default function WebisteFooter({ data }) {
  return (
    <Footer
      style={{
        background: "#1B1F23",
        color: "#fff",
        padding: "48px 24px 0",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url(/placeholder.svg?height=400&width=1920)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Main Footer Content */}
        <Row gutter={[48, 32]}>
          {/* Contact Information */}
          <Col xs={24} sm={24} md={8}>
            <Image
              preview={false}
              alt="logo"
              src={`https://cdn.thrico.network/${data?.logo}`}
              style={{
                objectFit: "contain",
                width: 120,
                height: 31,
                marginBottom: 20,
              }}
            />
            <Text style={{ color: "#ccc", display: "block" }}>
              Frances C. Arrillaga Alumni Center
            </Text>
            <Text style={{ color: "#ccc", display: "block" }}>
              326 Galvez Street
            </Text>
            <Text style={{ color: "#ccc", display: "block", marginBottom: 16 }}>
              Stanford, CA 94305-6105
            </Text>
            <Link href="#" style={{ color: "#fff" }}></Link>

            <Space size={16} style={{ marginTop: 24 }}>
              <Link href="#" style={{ color: "#fff", fontSize: "20px" }}>
                <FacebookOutlined />
              </Link>
              <Link href="#" style={{ color: "#fff", fontSize: "20px" }}>
                <LinkedinOutlined />
              </Link>
              <Link href="#" style={{ color: "#fff", fontSize: "20px" }}>
                <TwitterOutlined />
              </Link>
              <Link href="#" style={{ color: "#fff", fontSize: "20px" }}>
                <InstagramOutlined />
              </Link>
              <Link href="#" style={{ color: "#fff", fontSize: "20px" }}>
                <YoutubeOutlined />
              </Link>
            </Space>
          </Col>

          {/* Quick Links */}
          <Col xs={24} sm={12} md={5}>
            <Space direction="vertical" size={12}>
              <Link href="#" style={{ color: "#fff" }}>
                Get to Know SAA
              </Link>
              <Link href="#" style={{ color: "#fff" }}>
                STANFORD Magazine
              </Link>
              <Link href="#" style={{ color: "#fff" }}>
                Contact Us
              </Link>
              <Link href="#" style={{ color: "#fff" }}>
                Help
              </Link>
            </Space>
          </Col>

          <Col xs={24} sm={12} md={5}>
            <Space direction="vertical" size={12}>
              <Link href="#" style={{ color: "#fff" }}>
                Access SAA Member Card
              </Link>
              <Link href="#" style={{ color: "#fff" }}>
                Check your alumni email
              </Link>
              <Link href="#" style={{ color: "#fff" }}>
                My Alumni Account
              </Link>
              <Link href="#" style={{ color: "#fff" }}>
                Give to Stanford
              </Link>
            </Space>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <Space direction="vertical" size={12}>
              <Link href="#" style={{ color: "#fff" }}>
                Accessibility
              </Link>
              <Link href="#" style={{ color: "#fff" }}>
                Privacy Policy
              </Link>
              <Link href="#" style={{ color: "#fff" }}>
                Terms of Use
              </Link>
              <Link href="#" style={{ color: "#fff" }}>
                Code of Conduct
              </Link>
            </Space>
          </Col>
        </Row>

        {/* Bottom Footer */}
        <Divider style={{ borderColor: "#333", margin: "48px 0 24px" }} />

        <Row gutter={[16, 16]} style={{ paddingBottom: 24 }}>
          <Col xs={24} md={8}>
            <Title level={4} style={{ color: "#fff", margin: 0 }}>
              {data?.name}
            </Title>
          </Col>
          <Col xs={24} md={16}>
            <Space
              split={
                <Divider type="vertical" style={{ borderColor: "#444" }} />
              }
              wrap
            >
              <Link href="#" style={{ color: "#ccc" }}>
                Stanford Home
              </Link>
              <Link href="#" style={{ color: "#ccc" }}>
                Maps & Directions
              </Link>
              <Link href="#" style={{ color: "#ccc" }}>
                Search Stanford
              </Link>
              <Link href="#" style={{ color: "#ccc" }}>
                Emergency Info
              </Link>
            </Space>
            <Row style={{ marginTop: 16 }}>
              <Col span={24}>
                <Space
                  split={
                    <Divider type="vertical" style={{ borderColor: "#444" }} />
                  }
                  wrap
                >
                  <Link href="#" style={{ color: "#ccc" }}>
                    Terms of Use
                  </Link>
                  <Link href="#" style={{ color: "#ccc" }}>
                    Privacy
                  </Link>
                  <Link href="#" style={{ color: "#ccc" }}>
                    Copyright
                  </Link>
                  <Link href="#" style={{ color: "#ccc" }}>
                    Trademarks
                  </Link>
                  <Link href="#" style={{ color: "#ccc" }}>
                    Non-Discrimination
                  </Link>
                  <Link href="#" style={{ color: "#ccc" }}>
                    Accessibility
                  </Link>
                </Space>
              </Col>
            </Row>
            <Text style={{ color: "#666", display: "block", marginTop: 16 }}>
              © {data?.name}
            </Text>
          </Col>
        </Row>
      </div>
    </Footer>
  );
}

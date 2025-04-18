"use client";
import React from "react";
import { Typography, Button, Space } from "antd";
import { SettingOutlined, HomeOutlined } from "@ant-design/icons";
import Link from "next/link";

const { Title, Paragraph } = Typography;

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <div style={{ maxWidth: "400px", textAlign: "center" }}>
        <div
          style={{
            marginBottom: "32px",
            position: "relative",
            height: "240px",
          }}
        >
          {/* Server illustration */}
          <div
            style={{
              position: "absolute",
              right: "25%",
              bottom: 0,
              width: "128px",
              height: "160px",
              backgroundColor: "#001529",
              borderRadius: "8px",
              display: "flex",
              flexWrap: "wrap",
              padding: "8px",
              gap: "4px",
            }}
          >
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: Math.random() > 0.5 ? "#1890ff" : "#8c8c8c",
                }}
              />
            ))}
          </div>
          {/* Laptop illustration */}
          <div
            style={{
              position: "absolute",
              left: "25%",
              bottom: 0,
              width: "96px",
              height: "128px",
              backgroundColor: "#f0f0f0",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "80px",
                height: "64px",
                backgroundColor: "#d9d9d9",
                borderRadius: "4px",
              }}
            />
          </div>
        </div>
        <Title level={2}>Hmm, this page doesn&apos;t exist</Title>
        <Paragraph
          style={{
            fontSize: "16px",
            color: "rgba(0, 0, 0, 0.45)",
            marginBottom: "32px",
          }}
        >
          Sorry, we couldn&apos;t find the page you&apos;re looking for
        </Paragraph>
        {/* <Space direction="vertical" size="middle" style={{ width: "100%" }}>
          <Link href="/settings" passHref>
            <Button
              type="primary"
              icon={<SettingOutlined />}
              size="large"
              block
            >
              Go to Settings
            </Button>
          </Link>
          <Link href="/" passHref>
            <Button icon={<HomeOutlined />} size="large" block>
              Go to Homepage
            </Button>
          </Link>
        </Space> */}
      </div>
    </div>
  );
}

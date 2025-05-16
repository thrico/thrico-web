"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

import { Card, Typography, Progress, Spin } from "antd";
import { useTokenOrganization } from "../../../store/store";
import { LoadingOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;
const Check = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams?.get("token");

  const storeToken = useTokenOrganization((state) => state.storeToken);

  useEffect(() => {
    if (token) {
      storeToken(token.replaceAll(" ", "+"));
      router.push("/login");
    }
  }, [token]);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f0f2f5",
      }}
    >
      <Card
        variant="borderless"
        style={{
          width: "100%",
          maxWidth: "500px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        }}
      >
        <div style={{ textAlign: "center", padding: "24px" }}>
          <Spin
            indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />}
            size="large"
          />
          <div style={{ marginTop: 24, marginBottom: 16 }}>
            <Title level={3}>Authenticating</Title>
            <Text type="secondary">Redirecting to login...</Text>
          </div>
          <Progress percent={100} status="active" />
        </div>
      </Card>
    </div>
  );
};

export default Check;

"use client";

import { useTokenStore } from "@/store/store";
import { LoadingOutlined } from "@ant-design/icons";
import { Card, Progress, Spin, Typography } from "antd";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  const { Title, Text } = Typography;
  const searchParams = useSearchParams();
  const path = searchParams?.get("path");
  const token = searchParams?.get("token");

  const storeToken = useTokenStore((state) => state.storeToken);
  const router = useRouter();

  useEffect(() => {
    if (token && path) {
      storeToken(token.replaceAll(" ", "+"));
      try {
        const url = new URL(path); // validate URL
        router.replace(`${url.origin}/profile`);
      } catch {
        router.replace("/profile"); // fallback
      }
    } else if (!token) {
      router.replace("/");
    }
  }, [token, path, router, storeToken]);

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
            <Text type="secondary">
              Please wait while we verify your credentials
            </Text>
          </div>
          <Progress percent={100} status="active" />
        </div>
      </Card>
    </div>
  );
};

export default Page;

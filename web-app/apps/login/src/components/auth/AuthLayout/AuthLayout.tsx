"use client";
import { Card, Flex, Image, Typography } from "antd";

import React from "react";

interface props {
  children: React.ReactNode;
  svg: React.ReactNode;
  width?: number; // Optional width property
  logo?: string; // Optional logo property
  name?: string; // Optional name property
}
const { Title, Text } = Typography;
const AuthLayout = ({ children, svg, width, logo, name }: props) => (
  <>
    <Flex
      style={{
        backgroundImage: `url("https://cdn.thrico.network/l@3000x3000@1x.webp")`,
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
        height: "100vh",
        width: "100vw",
      }}
      align="center"
      justify="center"
    >
      <Flex
        style={{ width: "90%", height: "90%" }}
        align="center"
        justify="center"
      >
        <Flex align="center" justify="center" style={{ width: "100%" }}>
          <Flex align="center" justify="center" style={{ width: "90%" }}>
            <Card
              style={{
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                background: "#fff",
                width: width ? width : 1000,
              }}
              actions={[
                <Typography.Link
                  key="help"
                  target="_blank"
                  href="https://thrico.com/privacy-policy/"
                >
                  Help
                </Typography.Link>,
                <Typography.Link
                  key="privacy"
                  target="_blank"
                  href="https://thrico.com/privacy-policy/"
                >
                  Privacy
                </Typography.Link>,
                <Typography.Link
                  key="terms"
                  target="_blank"
                  href="https://thrico.com/privacy-policy/"
                >
                  Terms
                </Typography.Link>,
              ]}
            >
              <Flex vertical align="center" style={{ marginBottom: "20px" }}>
                {logo && (
                  <Image
                    src={logo}
                    alt="Logo"
                    style={{ width: "150px", marginBottom: "10px" }}
                  />
                )}
                {name && <Title level={4}>{name}</Title>}
              </Flex>
              {children}
            </Card>
          </Flex>
        </Flex>

        {/* <Flex style={{ width: "40%" }}>
          <Flex style={{ width: "90%" }}>{svg}</Flex>
        </Flex> */}
      </Flex>
    </Flex>
  </>
);

export default AuthLayout;

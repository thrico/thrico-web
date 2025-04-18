"use client";

import React from "react";

import { Flex } from "antd";
import Container from "@/Layout/Container";

import NetworkManagement from "@/components/network/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      <Flex
        justify="space-between"
        style={{
          width: "100%",
          marginTop: 20,
        }}
        gap={40}
      >
        <NetworkManagement />
        <Flex style={{ width: "75%" }} vertical>
          {children}
        </Flex>
      </Flex>
    </Container>
  );
}

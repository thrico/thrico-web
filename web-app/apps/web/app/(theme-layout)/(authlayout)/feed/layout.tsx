"use client";

import React from "react";

import { Flex } from "antd";
import Container from "@/Layout/Container";

import Sidebar from "@/components/homeFeed/sidebar/Sidebar";
import Profile from "@/components/homeFeed/profile/Sidebar";

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
        }}
        gap={20}
      >
        <Profile />
        <Flex style={{ width: "70%" }} vertical>
          {children}
        </Flex>
        <Sidebar />
      </Flex>
    </Container>
  );
}

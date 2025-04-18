"use client";

import React from "react";

import {  Image, Layout, Menu } from "antd";

import { useRouter } from "next/navigation";
import LoginAuth from "@/Layout/header/LoginAuth";
const { Header } = Layout;
interface NavbarProps {
  logo: string;
}
export const Navbar: React.FC<NavbarProps> = ({ logo }) => {
  const router = useRouter();
  return (
    <>
      <Header
        style={{
          background: "#fff",
          padding: "0 50px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              margin: "16px 24px 16px 0",
            }}
          >
            <Image
              preview={false}
              alt="logo"
              src={`https://cdn.thrico.network/${logo}`}
              style={{
                objectFit: "contain",
                width: 120,
                height: 31,
              }}
            />
          </div>
          <Menu mode="horizontal" defaultSelectedKeys={["home"]}>
            <Menu.Item onClick={() => router.push("/")} key="">
              Home
            </Menu.Item>
            <Menu.Item key="about">About</Menu.Item>
            <Menu.Item key="events">Events</Menu.Item>
            <Menu.Item key="news">News</Menu.Item>
            <Menu.Item onClick={({ key }) => router.push(key)} key="contact">
              Contact
            </Menu.Item>
          </Menu>
        </div>
        <LoginAuth />
      </Header>
    </>
  );
};

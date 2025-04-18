"use client";

import {
  ArrowRightOutlined,
  BellOutlined,
  EyeOutlined,
  LockOutlined,
  PictureOutlined,
  SafetyCertificateOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Layout, List, Menu, Space, Switch, Typography } from "antd";
import { CSSProperties } from "react";

const { Sider, Content } = Layout;
const { Title } = Typography;

const contentStyle: CSSProperties = {
  padding: 24,
  minHeight: "100vh",
  background: "#fff",
};

const siderStyle: CSSProperties = {
  background: "#fff",
  borderRight: "1px solid #f0f0f0",
};

export default function Component() {
  const menuItems = [
    {
      key: "account",
      icon: <UserOutlined />,
      label: "Account preferences",
      style: { color: "#0a66c2" },
    },
    {
      key: "security",
      icon: <LockOutlined />,
      label: "Sign in & security",
    },
    {
      key: "visibility",
      icon: <EyeOutlined />,
      label: "Visibility",
    },
    {
      key: "privacy",
      icon: <SafetyCertificateOutlined />,
      label: "Data privacy",
    },
    {
      key: "advertising",
      icon: <PictureOutlined />,
      label: "Advertising data",
    },
    {
      key: "notifications",
      icon: <BellOutlined />,
      label: "Notifications",
    },
  ];

  const profileSection = [
    {
      title: "Name, location, and industry",
      onClick: () => console.log("clicked"),
      extra: <ArrowRightOutlined />,
    },
    {
      title: "Personal demographic information",
      onClick: () => console.log("clicked"),
      extra: <ArrowRightOutlined />,
    },
    {
      title: "Verifications",
      onClick: () => console.log("clicked"),
      extra: <ArrowRightOutlined />,
    },
  ];

  const displaySection = [
    {
      title: "Dark mode",
      onClick: () => console.log("clicked"),
      extra: <ArrowRightOutlined />,
    },
  ];

  const preferencesSection = [
    {
      title: "Language",
      onClick: () => console.log("clicked"),
      extra: <ArrowRightOutlined />,
    },
    {
      title: "Content language",
      onClick: () => console.log("clicked"),
      extra: <Switch defaultChecked />,
    },
    {
      title: "Autoplay videos",
      extra: <Switch defaultChecked />,
      onClick: () => console.log("clicked"),
    },
    {
      title: "Sound effects",
      extra: <Switch defaultChecked />,
      onClick: () => console.log("clicked"),
    },
    {
      title: "Showing profile photos",
      extra: "All LinkedIn members",
      onClick: () => console.log("clicked"),
    },
    {
      title: "Preferred Feed View",
      extra: "Most relevant posts (Recommended)",
      onClick: () => console.log("clicked"),
    },
    {
      title: "People you unfollowed",
      onClick: () => console.log("clicked"),
    },
  ];

  return (
    <Layout>
      <Sider width={280} style={siderStyle}>
        <Space style={{ padding: 16 }}>
          <Avatar size={32} icon={<UserOutlined />} />
          <Typography.Text strong>Settings</Typography.Text>
        </Space>
        <Menu
          mode="inline"
          defaultSelectedKeys={["account"]}
          items={menuItems}
          style={{ border: "none" }}
        />
      </Sider>
      <Content style={contentStyle}>
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <List
            header={<Title level={5}>Profile information</Title>}
            bordered
            style={{ background: "#fff" }}
          >
            {profileSection.map((item) => (
              <List.Item
                key={item.title}
                extra={item.extra}
                onClick={item.onClick}
                style={{ cursor: "pointer" }}
              >
                {item.title}
              </List.Item>
            ))}
          </List>

          <List
            header={<Title level={5}>Display</Title>}
            bordered
            style={{ background: "#fff" }}
          >
            {displaySection.map((item) => (
              <List.Item
                extra={item.extra}
                key={item.title}
                onClick={item.onClick}
                style={{ cursor: "pointer" }}
              >
                {item.title}
              </List.Item>
            ))}
          </List>

          <List
            header={<Title level={5}>General preferences</Title>}
            bordered
            style={{ background: "#fff" }}
          >
            {preferencesSection.map((item) => (
              <List.Item
                key={item.title}
                extra={item.extra}
                onClick={item.onClick}
                style={{ cursor: "pointer" }}
              >
                {item.title}
              </List.Item>
            ))}
          </List>
        </Space>
      </Content>
    </Layout>
  );
}

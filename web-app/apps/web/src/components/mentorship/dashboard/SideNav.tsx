"use client";

import { Menu, Button, Avatar } from "antd";
import Image from "next/image";

import {
  HomeOutlined,
  CalendarOutlined,
  MessageOutlined,
  HeartOutlined,
  AppstoreOutlined,
  BarChartOutlined,
  DollarOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  TrophyOutlined,
  BellOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";

export default function SideNav() {
  const router = useRouter();
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "20px" }}></div>

      <Menu
        mode="inline"
        defaultSelectedKeys={["home"]}
        style={{
          border: "none",
          background: "transparent",
        }}
        onClick={({ key }) => router.push(`/mentorship/dashboard/${key}`)}
        items={[
          {
            key: "",
            icon: <HomeOutlined />,
            label: "Home",
          },
          {
            key: "bookings",
            icon: <CalendarOutlined />,
            label: "Bookings",
          },

          {
            key: "testimonials",
            icon: <HeartOutlined />,
            label: "Testimonials",
          },
          {
            key: "services",
            icon: <AppstoreOutlined />,
            label: "Services",
          },
          {
            key: "analytics",
            icon: <BarChartOutlined />,
            label: "Analytics",
          },

          {
            key: "payments",
            icon: <DollarOutlined />,
            label: "Payments",
          },

          {
            key: "profile",
            icon: <UserOutlined />,
            label: "Profile",
          },
          {
            key: "achievements",
            icon: <TrophyOutlined />,
            label: "Achievements",
          },
        ]}
      />
    </div>
  );
}

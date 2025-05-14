import { Button, Flex, Space, theme } from "antd";
import { Header } from "antd/es/layout/layout";
import React from "react";
import Container from "../Container";
import Link from "next/link";
import { BiHelpCircle } from "react-icons/bi";
import { NotificationOutlined } from "@ant-design/icons";

const MenuBar = () => {
  const {
    token: { colorPrimary },
  } = theme.useToken();

  const data = [
    {
      link: "/",
      name: "Home",
    },
    {
      link: "/about-us",
      name: "About us",
    },
    {
      link: "/services",
      name: "Services",
    },

    {
      link: "/solutions",
      name: "Solutions",
    },

    {
      link: "/contact",
      name: "Contact us",
    },
  ];

  return (
    <Header
      style={{
        background: colorPrimary,
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: 50,
      }}
    >
      <Container>
        <Flex
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Space style={{ gap: 30 }}>
            {data.map((set, index) => (
              <Link key={index} style={{ color: "white" }} href={set.link}>
                {set.name}
              </Link>
            ))}
          </Space>
          <Space style={{ gap: 10 }}>
            <Button icon={<BiHelpCircle />}>Assist</Button>
            <Link href="/notifications">
              <Button icon={<NotificationOutlined />}>Notification</Button>
            </Link>
          </Space>
        </Flex>
      </Container>
    </Header>
  );
};

export default MenuBar;

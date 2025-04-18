import { Badge, Button, Flex, Space, theme } from "antd";
import { Header } from "antd/es/layout/layout";
import React, { useState } from "react";
import Container from "../Container";
import Link from "next/link";
import { BiHelpCircle } from "react-icons/bi";
import { NotificationOutlined } from "@ant-design/icons";

import { CgMenuRound } from "react-icons/cg";
import { unSeenNotification } from "@/graphql/actions/notification";
import { ThricoMenu } from "@/components/menu/ThricoMenu";
import { FaRegBell } from "react-icons/fa";
import { MdChatBubbleOutline } from "react-icons/md";

const MenuBar = () => {
  const { data: notification } = unSeenNotification({
    pollInterval: 5000,
  });
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const {
    token: { colorBgContainer, borderRadiusLG, colorPrimary },
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
      link: "/contact-us",
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
            <Link shallow href="/messages">
              <Button icon={<MdChatBubbleOutline />}></Button>
            </Link>

            <Button icon={<BiHelpCircle />}></Button>
            <Link href={"/notifications"}>
              <Button
                icon={
                  <Badge size="small" count={notification?.unSeenNotification}>
                    <FaRegBell />
                  </Badge>
                }
              ></Button>
            </Link>
            <Button onClick={showDrawer} icon={<CgMenuRound />}></Button>
          </Space>
        </Flex>
      </Container>
      <ThricoMenu showDrawer={showDrawer} onClose={onClose} open={open} />
    </Header>
  );
};

export default MenuBar;

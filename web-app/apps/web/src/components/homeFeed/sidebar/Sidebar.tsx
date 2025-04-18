import { Card, Divider, Flex, Space, theme, Typography } from "antd";
import Link from "next/link";
import React from "react";
import { CiInstagram, CiLinkedin, CiYoutube } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import TopProfile from "./TopProfile";

import StickyBox from "react-sticky-box";
import News from "./News";
import Stories from "@/components/stories/Stories";

const Sidebar = () => {
  const {
    token: { colorPrimary },
  } = theme.useToken();
  return (
    <Space
      direction="vertical"
      style={{ width: "27%", height: "190vh", position: "sticky", top: 0 }}
    >
      <StickyBox offsetTop={10} offsetBottom={20} style={{ zIndex: 1 }}>
        <Stories />
        <News />
        <Card style={{ width: "100%" }}>
          <Space style={{ gap: 20, width: "100%" }} direction="vertical">
            <Space direction="vertical">
              <Typography.Title level={5}>External links</Typography.Title>
              <Flex style={{ width: "100%", flexWrap: "wrap" }}>
                <Typography style={{ width: "50%" }}>
                  Feature Request
                </Typography>
                <Typography style={{ width: "50%" }}>Changelog</Typography>

                <Typography style={{ width: "50%" }}>
                  Thrico Open Api's
                </Typography>
              </Flex>
            </Space>
            <Space direction="vertical">
              <Typography.Title level={5}>Company</Typography.Title>
              <Flex style={{ width: "100%", flexWrap: "wrap" }}>
                <Typography style={{ width: "50%" }}>About</Typography>
                <Typography style={{ width: "50%" }}>
                  Services Status
                </Typography>

                <Typography style={{ width: "50%" }}>Blog</Typography>
                <Typography style={{ width: "50%" }}>Support</Typography>
              </Flex>
            </Space>

            <Space direction="vertical">
              <Typography.Title level={5}>Connect with us</Typography.Title>
              <Space>
                <Link href="">
                  <Space>
                    <FaXTwitter style={{ fontSize: 25, color: colorPrimary }} />
                  </Space>
                </Link>
                <Link href="">
                  <CiLinkedin style={{ fontSize: 30, color: colorPrimary }} />
                </Link>

                <Link href="">
                  <CiInstagram style={{ fontSize: 30, color: colorPrimary }} />
                </Link>
                <Link href="">
                  <CiYoutube style={{ fontSize: 30, color: colorPrimary }} />
                </Link>
              </Space>
            </Space>

            <Divider />
            <Space style={{ width: "100%" }}>
              <Typography>Blog</Typography>
              <Typography>Support</Typography>
              <Typography>© 2024 Thrico</Typography>
            </Space>
          </Space>
        </Card>
      </StickyBox>
    </Space>
  );
};

export default Sidebar;

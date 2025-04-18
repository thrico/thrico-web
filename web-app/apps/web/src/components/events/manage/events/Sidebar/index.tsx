"use client";

import React, { useState } from "react";

import type { MenuProps } from "antd";
import { Button, Card, Flex, Layout, List, Space, theme } from "antd";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { usePathname } from "next/navigation";

import {
  CreditCardOutlined,
  FileImageOutlined,
  FlagOutlined,
  GoldFilled,
  GoldOutlined,
  OrderedListOutlined,
  UnorderedListOutlined,
  UserSwitchOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import Container from "../../../../Layout/Container";

import { MdHelpOutline } from "react-icons/md";
import EditButton from "@repo/ui/EditButton";
import Theme from "../edit/Theme";
import EditGallery from "../edit/EditGallery";
import EditSponsorship from "../edit/EditSponsorship";
import EditPayments from "../edit/EditPayments";
import MainBreadcrumb from "../../../../Layout/BreadCrumb";

const { Content, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

export default async function Sidebar({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();

  const {
    token: { colorBgContainer, borderRadiusLG, colorPrimary },
  } = theme.useToken();

  const data = [
    {
      title: "Banners & Theme",
      component: <Theme />,
      svg: <FlagOutlined />,
    },
    {
      title: "Basic Details & Registrations",
      component: <Theme />,
      svg: <UnorderedListOutlined />,
    },

    {
      title: "Payments",
      component: <EditPayments />,
      svg: <CreditCardOutlined />,
    },
    {
      title: "Agenda & Timeline",
      component: <Theme />,
      svg: <OrderedListOutlined />,
    },
    {
      title: "Speakers",
      component: <Theme />,
      svg: <UsergroupAddOutlined />,
    },
    {
      title: "Session Curators",
      component: <Theme />,
      svg: <UserSwitchOutlined />,
    },
    {
      title: "Sponsorship",
      component: <EditSponsorship />,
      svg: <GoldOutlined />,
    },
    {
      title: "Gallery",
      component: <EditGallery />,
      svg: <FileImageOutlined />,
    },
  ];
  const [active, setActive] = useState("");
  return (
    <Container>
      <Layout
        style={{
          paddingTop: "1rem",
        }}
      >
        <Space direction="vertical">
          <MainBreadcrumb />
          <Card
            title="Customize Events Features"
            extra={
              <Space>
                <Button icon={<MdHelpOutline />}>Help</Button>
              </Space>
            }
            style={{
              background: colorBgContainer,

              width: 400,
            }}
          >
            <Sider
              style={{
                position: "sticky",
                background: colorBgContainer,
                width: "100%",
                top: "2%",
              }}
            >
              <List
                size="large"
                itemLayout="vertical"
                dataSource={data}
                renderItem={(item) => (
                  <List.Item
                    style={{
                      cursor: "pointer",
                      width: 350,
                      backgroundColor: `${colorPrimary}10`,
                      marginTop: 10,
                      borderRadius: 10,
                    }}
                    key={item.title}
                    extra={item.component}
                  >
                    <List.Item.Meta
                      avatar={
                        <Flex
                          style={{
                            height: 40,
                            width: 40,
                            borderRadius: 10,
                            border: `2px solid ${colorPrimary}`,
                            backgroundColor: colorBgContainer,
                          }}
                          justify="center"
                          align="center"
                        >
                          {item.svg}
                        </Flex>
                      }
                      title={item.title}
                      description={
                        "Upload custom banners or modify default banners, from here!"
                      }
                    />
                  </List.Item>
                )}
              />
            </Sider>
          </Card>
        </Space>
        <Layout>
          <Content style={{ margin: "0 16px" }}>
            <Card
              extra={<Button type="primary">Publish</Button>}
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
              }}
            >
              {children}
            </Card>
          </Content>
        </Layout>
      </Layout>
    </Container>
  );
}

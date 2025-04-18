import { Card, Menu, theme, Layout, MenuProps, Space, Flex } from "antd";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import React from "react";
const { Content, Sider } = Layout;
import StickyBox from "react-sticky-box";
import { LuClipboardList } from "react-icons/lu";
type MenuItem = Required<MenuProps>["items"][number];
import {
  IoChatboxEllipsesOutline,
  IoDocumentTextOutline,
} from "react-icons/io5";

import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { TbListSearch } from "react-icons/tb";
import { PiListStarBold } from "react-icons/pi";
import { IoMdTrendingUp } from "react-icons/io";
import { RiSurveyLine } from "react-icons/ri";
import Container from "@/Layout/Container";
import MainBreadcrumb from "@/Layout/BreadCrumb";
interface props {
  children: React.ReactNode;
  actions: React.ReactNode;
  items: MenuItem[];
  height?: any;
  title?: String;
}
const SidebarLayout = ({ children, actions, items, height, title }: props) => {
  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[]
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }
  const path = usePathname();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const url = title?.toLowerCase();


  const commonList = [
    getItem(
      <Link shallow={true} href={`/${url}`}>
        Discover
      </Link>,
      `/${url}`,
      <TbListSearch style={{ fontSize: 18 }} />
    ),
    getItem(
      <Link shallow={true} href={`/${url}/featured`}>
        Featured
      </Link>,
      `/${url}/featured`,
      <PiListStarBold style={{ fontSize: 18 }} />
    ),
    getItem(
      <Link shallow={true} href={`/${url}/trending`}>
        Trending
      </Link>,
      `/${url}/trending`,
      <IoMdTrendingUp style={{ fontSize: 18 }} />
    ),

    ...items,

    getItem(
      <Link shallow={true} href={`/terms-and-conditions/${url}`}>
        T&C
      </Link>,
      `/${url}/terms-and-conditions`,
      <HiOutlineClipboardDocumentList style={{ fontSize: 18 }} />
    ),

    getItem(
      <Link shallow={true} href={`guidelines/${url}/`}>
        Guidelines
      </Link>,
      `/guidelines/${url}`,
      <LuClipboardList style={{ fontSize: 18 }} />
    ),
    getItem(
      <Link shallow={true} href={`/resources/${url}`}>
        Resources
      </Link>,
      `resources/${url}/`,
      <IoDocumentTextOutline style={{ fontSize: 18 }} />
    ),
    getItem(
      <Link shallow={true} href={`/faq/${url}`}>
        FAQ
      </Link>,
      `/faq/${url}`,
      <IoChatboxEllipsesOutline style={{ fontSize: 18 }} />
    ),
  ];

  return (
    <Container>
      <Layout
        style={{
          paddingTop: "1rem",
          display: "flex",
          position: "sticky",
          top: 1,
        }}
      >
        <Flex gap={30} vertical>
          <StickyBox offsetTop={10} offsetBottom={20} style={{ zIndex: 1 }}>
            <Card
              actions={[actions]}
              title={title}
              style={{
                background: colorBgContainer,
              }}
            >
              <Sider
                style={{
                  background: colorBgContainer,
                  width: "90%",
                  border: "none",
                }}
              >
                <Menu
                  theme="light"
                  style={{ border: "none", background: colorBgContainer }}
                  selectedKeys={[path]}
                  items={commonList}
                  mode="inline"
                />
              </Sider>
            </Card>
          </StickyBox>
          {/* <Recommendation /> */}
        </Flex>

        <Layout>
          <Content style={{ margin: "0 16px" }}>
            <MainBreadcrumb />
            <div
              style={{
                padding: 24,
                minHeight: 360,

                borderRadius: borderRadiusLG,
              }}
            >
              {children}
            </div>
          </Content>
        </Layout>
      </Layout>
    </Container>
  );
};

export default SidebarLayout;

import React from "react";
import Container from "../Layout/Container";

import { Layout, Menu, theme } from "antd";
import MainBreadcrumb from "../Layout/BreadCrumb";

import type { MenuProps } from "antd";

interface SideBarLayoutProps {
  items: MenuProps["items"];
  children: React.ReactNode;
}

const SideBarLayout: React.FC<SideBarLayoutProps> = ({ items, children }) => {
  const { Content, Sider } = Layout;
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Container>
      <Layout
        style={{
          width: "100%",
          paddingTop: "1rem",
          paddingBottom: "1rem",
        }}
      >
        <Sider
          style={{
            background: colorBgContainer,
            width: 256,
          }}
        >
          <Menu selectedKeys={[]} mode="inline" items={items} />
        </Sider>

        <Layout>
          <Content style={{ margin: "0 16px" }}>
            <MainBreadcrumb />
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
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

export default SideBarLayout;

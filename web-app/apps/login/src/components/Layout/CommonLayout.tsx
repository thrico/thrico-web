"use client";
import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Navbar from "./Header";
import HeaderBreadCrumb from "./BreadCrumb";
import Footer from "./Footer";

const { Header, Content } = Layout;

interface props {
  logo: string;
  children: React.ReactNode;
}

const CommonLayout = ({ children, logo }: props) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Navbar logo={logo} />
      <Content style={{ padding: "0 48px" }}>
        <HeaderBreadCrumb />

        <div
          style={{
            padding: "16px",
            background: colorBgContainer,
            minHeight: 280,

            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </div>
      </Content>

      <Footer />
    </Layout>
  );
};

export default CommonLayout;

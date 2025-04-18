"use client";
import React from "react";
import { Layout, theme } from "antd";
import Navbar from "./header/Header";

import Footer from "./Footer";
import MenuBar from "./header/MenuBar";
import { usePathname } from "next/navigation";

const { Content } = Layout;

interface props {
  logo: string;
  children: React.ReactNode;
}

const CommonLayout = ({ children, data }: props) => {
  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  const pathName = usePathname();

  return (
    <Layout>
      {pathName !== "/" && (
        <>
          <MenuBar />
          <Navbar logo={data.logo} />
        </>
      )}

      <Content style={{ padding: "0 48px" }}>
        <div
          style={{
            padding: "16px",
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

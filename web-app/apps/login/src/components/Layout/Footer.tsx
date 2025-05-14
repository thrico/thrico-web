import React from "react";
import { Layout } from "antd";
const { Footer: FooterLayout } = Layout;
const Footer = () => {
  return (
    <FooterLayout style={{ textAlign: "center" }}>
      Thrico ©{new Date().getFullYear()}
    </FooterLayout>
  );
};

export default Footer;

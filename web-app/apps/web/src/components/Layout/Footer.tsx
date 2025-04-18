import React from "react";
import { Flex, Layout, Space, Typography, theme } from "antd";
import Container from "./Container";
import ThricoLogo from "../svg/ThrcioLogo";
const { Footer: FooterLayout } = Layout;
const Footer = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <FooterLayout
      style={{
        textAlign: "center",
        backgroundColor: colorBgContainer,

        padding: 50,
      }}
    >
      <Container>
        <Flex>
          <Space>
            <Space direction="vertical">
              <Typography style={{ textAlign: "left" }}>Powered By</Typography>
              <ThricoLogo />
            </Space>
          </Space>

          <Space></Space>
          <Space></Space>
        </Flex>
      </Container>
    </FooterLayout>
  );
};

export default Footer;

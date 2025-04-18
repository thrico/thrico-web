import React from "react";
import { Flex, Image, Layout, theme } from "antd";

import Link from "next/link";

import MenuItem from "./Menu";
import Container from "../Container";

import LoginAuth from "./LoginAuth";

const { Header } = Layout;
interface logo {
  logo: string;
}
const Navbar = ({ logo }: logo) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Header
      style={{
        background: colorBgContainer,
        display: "flex",
        justifyContent: "center",
        width: "100%",
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
          <Link href="/dashboard">
            <Image
              preview={false}
              alt="logo"
              src={`https://cdn.thrico.network/${logo}`}
              style={{
                objectFit: "contain",
                height: "3rem",
                width: "3rem",
              }}
            />
          </Link>
          <MenuItem />
          <LoginAuth />
        </Flex>
      </Container>
    </Header>
  );
};

export default Navbar;

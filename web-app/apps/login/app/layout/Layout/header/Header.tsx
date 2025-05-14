import React from "react";
import { Button, Flex, Image, Layout, Space, theme } from "antd";

import Link from "next/link";

import Profile from "../Profile";
import MenuItem from "./Menu";
import Container from "../Container";
import { useGetUser } from "@/graphql/actions";
import LoginButton from "@/components/common/button/LoginButton";

const { Header } = Layout;
interface logo {
  logo: string;
}
const Navbar = ({ logo }: logo) => {
  const { data: { getUser } = {}, loading, error } = useGetUser();

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
                height: "4rem",
                width: "4rem",
              }}
            />
          </Link>
          <MenuItem />
          {!loading && (
            <>
              {getUser ? (
                <Profile getUser={getUser} />
              ) : (
                <Space>
                  <LoginButton>
                    <Button> Login </Button>
                  </LoginButton>
                </Space>
              )}
            </>
          )}
        </Flex>
      </Container>
    </Header>
  );
};

export default Navbar;

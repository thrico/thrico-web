"use client";

import React from "react";
import { Divider, Flex, Typography } from "antd";

import Social from "./social/Social";
const { Title, Text } = Typography;

import { useSearchParams } from "next/navigation";
import LoginByEmail from "./LoginByEmail";

const Login = ({ logo }: { logo: string }) => {
  const searchParams = useSearchParams();

  const token = searchParams?.get("token");

  React.useEffect(() => {
    // if (!token) {
    //   redirect("https://thrico.com");
    // }
  }, [token]);

  return (
    <Flex style={{ width: "100%" }} justify="center" align="center">
      <Flex vertical style={{ width: "80%" }} align="center">
        <Title level={2}>Log In</Title>
        {/* <Flex vertical>
          <LoginByEmail />
        </Flex>

        <Divider style={{ width: 250 }}>Or</Divider> */}

        <Social />
      </Flex>
    </Flex>
  );
};

export default Login;

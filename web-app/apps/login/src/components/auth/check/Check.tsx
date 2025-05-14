"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

import { Flex, Spin } from "antd";
import { useTokenOrganization } from "../../../store/store";

const Check = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams?.get("token");

  const storeToken = useTokenOrganization((state) => state.storeToken);

  useEffect(() => {
    if (token) {
      storeToken(token.replaceAll(" ", "+"));
      router.push("/login");
    }
  }, [token]);

  return (
    <Flex
      style={{ width: "100vw", height: "100vh" }}
      justify="center"
      align="center"
    >
      <Spin size="large" />
    </Flex>
  );
};

export default Check;

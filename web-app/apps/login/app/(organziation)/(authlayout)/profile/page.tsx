"use client";
import React from "react";

import { Flex, Spin } from "antd";
import Profile from "@/components/profile/Profile";
import { useGetUser } from "@/graphql/actions";

const Page = () => {
  const { data, loading } = useGetUser();
  return (
    <>
      {loading && (
        <Flex
          justify="center"
          align="center"
          style={{ width: "100%", height: 300 }}
        >
          <Spin size="large" />
        </Flex>
      )}
      {!loading && <Profile getUser={data?.getUser} />}
    </>
  );
};

export default Page;

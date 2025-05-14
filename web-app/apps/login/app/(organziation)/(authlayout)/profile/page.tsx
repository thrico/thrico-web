"use client";
import React from "react";

import { Spin } from "antd";
import Profile from "@/components/profile/Profile";
import { useGetUser } from "@/graphql/actions";

const Page = () => {
  const { data, loading } = useGetUser();
  return (
    <>
      {loading && <Spin />}
      {!loading && <Profile getUser={data?.getUser} />}
    </>
  );
};

export default Page;

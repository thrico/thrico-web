`'use client'`;
import React from "react";

import { gql } from "@apollo/client";
import Login from "@/components/auth/Login/Login";

interface props {
  searchParams: {
    token: String | undefined;
  };
}

const Page = async (props: props) => {
  return <Login />;
};

export default Page;

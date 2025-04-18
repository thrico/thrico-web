"use client";

import React from "react";
import Search from "./search/Search";
import View from "./view/View";
import { getEvents } from "../../../graphql/actions/events";
import { useGetAllDirectory } from "../../../graphql/actions/directory";
import { Button } from "antd";
import { HiRefresh } from "react-icons/hi";

const Discover = () => {
  const { data, error, loading, refetch } = useGetAllDirectory({});
  console.log(error, data);
  return (
    <>
      <Search />
      {/* <Button onClick={() => refetch()} icon={<HiRefresh />}></Button> */}
      <View loading={loading} data={data?.getAllDirectory} />
    </>
  );
};

export default Discover;

"use client";

import React from "react";
import Search from "./search/Search";
import View from "./view/View";

import { getAllMarketPlaceListing } from "../../../graphql/actions/marketPlace";

const Discover = () => {
  const { data, error, loading } = getAllMarketPlaceListing({});

  return (
    <>
      <Search />
      <View data={data?.getAllMarketPlaceListing} loading={loading} />
    </>
  );
};

export default Discover;

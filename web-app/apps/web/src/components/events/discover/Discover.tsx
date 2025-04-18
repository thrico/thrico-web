"use client";

import React, { useEffect } from "react";
import Search from "./search/Search";
import View from "./view/View";

const Discover = ({ data, loading }) => {
  return (
    <>
      <Search />
      <View
        data={data?.data}
        totalRecords={data?.totalRecords}
        loading={loading}
      />
    </>
  );
};

export default Discover;

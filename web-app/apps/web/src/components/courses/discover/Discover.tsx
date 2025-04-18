"use client";

import React from "react";
import Search from "./search/Search";
import View from "./view/View";
import { getEvents } from "../../../graphql/actions/events";
import { getAllJobs } from "../../../graphql/actions/jobs";

const Discover = () => {
  const { data, error, loading } = getAllJobs({});

  return (
    <>
      <Search />
      <View data={data?.getAllJobs} loading={loading} />
    </>
  );
};

export default Discover;

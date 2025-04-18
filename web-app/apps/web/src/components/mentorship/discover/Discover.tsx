"use client";

import React from "react";
import Search from "./search/Search";
import View from "./view/View";
import { getEvents } from "../../../graphql/actions/events";
import { getAllApprovedMentor } from "../../../graphql/actions/mentorship";

const Discover = () => {
  return (
    <>
      <Search />
      <View />
    </>
  );
};

export default Discover;

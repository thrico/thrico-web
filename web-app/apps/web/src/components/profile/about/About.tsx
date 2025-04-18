"use client";

import React from "react";
import Details from "./Details/Details";
import SideBar from "./sidebar/SideBar";
import { Flex } from "antd";

const About = () => {
  return (
    <Flex gap={20}>
      <SideBar />
      <Details />
    </Flex>
  );
};

export default About;

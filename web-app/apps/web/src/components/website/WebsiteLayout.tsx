"use client";

import React from "react";
import { Navbar } from "./Header";
import WebisteFooter from "./Footer";

const WebsiteLayout = ({ children, data }) => {
  return (
    <div>
      <Navbar logo={data?.logo} />

      {children}

      <WebisteFooter data={data} />
    </div>
  );
};

export default WebsiteLayout;

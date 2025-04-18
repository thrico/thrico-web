import React from "react";

import { Metadata } from "next";
import Discover from "@/components/communities/discover/Discover";

export const metadata: Metadata = {
  title: "Communities",
  description: "Communities",
};

const page = () => {
  return <Discover />;
};

export default page;

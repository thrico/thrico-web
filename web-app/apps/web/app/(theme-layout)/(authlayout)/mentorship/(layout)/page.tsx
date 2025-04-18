import Discover from "@/components/mentorship/discover/Discover";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Mentorship",
  description: "...",
};
const page = () => {
  return <Discover />;
};

export default page;

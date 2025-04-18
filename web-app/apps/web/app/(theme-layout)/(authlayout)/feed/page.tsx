import HomeFeed from "@/components/feed/homeFeed/Feed";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Feed",
  description: "...",
};
function page() {
  return <HomeFeed />;
}

export default page;

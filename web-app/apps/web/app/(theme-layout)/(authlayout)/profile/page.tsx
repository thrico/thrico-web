import ProfilePage from "@/components/profile/Profile";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Profile",
  description: "...",
};
const page = () => {
  return (
    <>
      <ProfilePage />
    </>
  );
};

export default page;

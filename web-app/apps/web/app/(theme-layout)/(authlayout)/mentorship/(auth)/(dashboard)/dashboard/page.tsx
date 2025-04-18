import Dashboard from "@/components/mentorship/dashboard/home/Dashboard";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Mentorship Dashboard",
  description: "...",
};
const page = () => {
  return <Dashboard />;
};

export default page;

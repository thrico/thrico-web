"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import HelpForm from "./HelpForm";

const Create = () => {
  const searchParams = useSearchParams();
  const value = searchParams.get("value");
  return <HelpForm type={value} />;
};

export default Create;

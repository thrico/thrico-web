"use client";

import { useTokenStore } from "@/store/store";
import { redirect, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  const searchParams = useSearchParams();
  const path = searchParams?.get("path");
  const token = searchParams?.get("token");

  const storeToken = useTokenStore((state) => state.storeToken);

  useEffect(() => {
    if (token && path) {
      storeToken(token.replaceAll(" ", "+"));
      redirect(`${path}/profile`);
    }
    if (!token) {
      redirect("/");
    }
  }, [token]);

  return null;
};

export default Page;

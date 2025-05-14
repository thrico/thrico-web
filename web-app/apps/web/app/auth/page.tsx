"use client";

import { useTokenStore } from "@/store/store";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  const searchParams = useSearchParams();
  const path = searchParams?.get("path");
  const token = searchParams?.get("token");

  const storeToken = useTokenStore((state) => state.storeToken);
  const router = useRouter();

  useEffect(() => {
    if (token && path) {
      storeToken(token.replaceAll(" ", "+"));
      try {
        const url = new URL(path); // validate URL
        router.replace(`${url.origin}/profile`);
      } catch {
        router.replace("/profile"); // fallback
      }
    } else if (!token) {
      router.replace("/");
    }
  }, [token, path]);

  return null;
};

export default Page;

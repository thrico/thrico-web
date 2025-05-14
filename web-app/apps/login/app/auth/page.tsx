"use client";

import Check from "@/components/auth/check/Check";
import { Suspense } from "react";


const page = () => {
  return (
    <Suspense fallback={null}>
      <Check />
    </Suspense>
  );
};

export default page;

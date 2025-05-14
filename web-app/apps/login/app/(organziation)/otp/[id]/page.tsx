"use client";

import Otp from "@/components/otp/Otp";
import { checkOtpDetails } from "@/graphql/actions";
import { Skeleton } from "antd";
import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  const { data, loading } = checkOtpDetails({
    variables: {
      input: {
        id: params.id,
      },
    },
  });
  return (
    <>
      {loading && <Skeleton active />}
      {!loading && <Otp data={data?.checkOtpDetails} />}
    </>
  );
};

export default page;

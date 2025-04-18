import { Space } from "antd";
import React from "react";

import dynamic from "next/dynamic";

import JobInfo from "./JobInfo";

const Details = () => {
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <JobInfo />
    </Space>
  );
};

export default Details;

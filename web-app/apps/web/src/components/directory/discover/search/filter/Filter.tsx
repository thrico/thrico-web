import { Divider, Space } from "antd";
import React from "react";
import SortBy from "./SortBy";
import Status from "./Status";
import Theme from "./Theme";
import Interests from "./Interests";
import Total from "./Total";

const Filter = () => {
  return (
    <Space wrap split={<Divider type="vertical" />}>
      {/* <SortBy />
      <Status />
      <Theme />
      <Interests />
      <Total /> */}
    </Space>
  );
};

export default Filter;

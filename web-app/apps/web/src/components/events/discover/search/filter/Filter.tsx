import { Divider, Space } from "antd";
import React from "react";

import Mode from "./Mode";
import Cost from "./Cost";
import SortBy from "@/components/common/filter/SortBy";

const Filter = () => {
  return (
    <Space wrap split={<Divider type="vertical" />}>
      <SortBy />
      <Mode />
      <Cost />
    </Space>
  );
};

export default Filter;

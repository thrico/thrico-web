import { Divider, Space } from "antd";
import React from "react";
import SortBy from "../../../../common/filter/SortBy";

import Theme from "./Theme";
import Interests from "./Interests";

import Mode from "./Mode";
import Privacy from "./Privacy";

const Filter = () => {
  return (
    <Space wrap split={<Divider type="vertical" />}>
      <SortBy />
      <Privacy />
      <Mode />
      <Theme />
      <Interests />
    </Space>
  );
};

export default Filter;

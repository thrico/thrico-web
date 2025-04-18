import { Divider, Space } from "antd";
import React from "react";
import Type from "./Type";
import Status from "./Status";
import SortBy from "../../common/filter/SortBy";

const Filter = () => {
  return (
    <Space style={{ marginTop: 20 }} wrap split={<Divider type="vertical" />}>
      <SortBy />
      <Type />
      <Status />
    </Space>
  );
};

export default Filter;

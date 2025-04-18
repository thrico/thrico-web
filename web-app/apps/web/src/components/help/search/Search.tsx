import React from "react";

import { Card, Flex, Space } from "antd";

import Filter from "./Filter";
import SearchBar from "@/components/common/filter/Search";
import ClearFilter from "@/components/common/filter/ClearFilter";

const Search = () => {
  return (
    <Card title="">
      <Flex align="center" justify="space-between">
        <SearchBar />

        <Space> </Space>
      </Flex>
      <Space direction="vertical">
        <Filter />
        <ClearFilter list={["label", "status"]} />
      </Space>
    </Card>
  );
};

export default Search;

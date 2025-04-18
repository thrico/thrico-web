import React from "react";
import Layout from "./Layout";
import { Card, Flex, Input, Space } from "antd";
import Filter from "./filter/Filter";
const { Search: SearchInput } = Input;
const Search = () => {
  return (
    <Card title="">
      <Flex align="center" justify="space-between">
        <SearchInput
          style={{ width: "100%" }}
          placeholder="Search"
          enterButton="Search"
          allowClear
        />
        <Layout />
      </Flex>
      <Filter />
    </Card>
  );
};

export default Search;

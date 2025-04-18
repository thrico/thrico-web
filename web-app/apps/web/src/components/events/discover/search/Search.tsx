import React from "react";
import Layout from "./Layout";
import { Card, Flex, Input, Space } from "antd";
import Filter from "./filter/Filter";
import SearchBar from "@/components/common/filter/Search";
import ViewSelector from "@/components/common/filter/ViewSelector";
import List from "./List";

const Search = () => {
  return (
    <Card title="">
      <Flex align="center" justify="space-between">
        <SearchBar />
        <ViewSelector />
      </Flex>
      <Space direction="vertical">
        <Filter />
        <List />
      </Space>
    </Card>
  );
};

export default Search;

import { Card, Flex, Spin } from "antd";
import React from "react";

const Loading = () => {
  return (
    <Flex
      style={{ minHeight: "70vh", height: 400 }}
      align="center"
      justify="center"
    >
      <Spin size="large" />
    </Flex>
  );
};

export default Loading;

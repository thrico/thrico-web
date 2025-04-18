import React from "react";
import { Card, Flex, Space } from "antd";
import BatchMates from "./Bachmates";
import Tag from "./Tag";

const SideBar = () => {
  return (
    <Flex style={{ width: "30%", position: "sticky", top: "2%" }}>
      <Space
        style={{ width: "100%", position: "sticky", top: "2%" }}
        direction="vertical"
      >
        <Tag />
        <BatchMates />
      </Space>
    </Flex>
  );
};

export default SideBar;

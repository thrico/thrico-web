import { Flex, Tag } from "antd";
import React from "react";
import { StarOutlined } from "@ant-design/icons";
import { IoMdTrendingUp } from "react-icons/io";

const IsTrending = () => {
  return (
    <Tag
      icon={<IoMdTrendingUp style={{ fontSize: 12, marginRight: 5 }} />}
      color="blue"
    >
      Trending
    </Tag>
  );
};

export default IsTrending;

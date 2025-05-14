import { Tag } from "antd";
import React from "react";
import { StarOutlined } from "@ant-design/icons";

const IsFeatured = () => {
  return (
    <Tag icon={<StarOutlined />} color="blue">
      Featured
    </Tag>
  );
};

export default IsFeatured;

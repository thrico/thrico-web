import React from "react";

import { LoremIpsum } from "react-lorem-ipsum";
import { Card, Flex, Space, Tag, Typography } from "antd";

const Info = () => {
  return (
    <Card title="About the job">
      <Flex style={{ width: "100%" }} wrap="wrap" gap={10}></Flex>
    </Card>
  );
};

export default Info;

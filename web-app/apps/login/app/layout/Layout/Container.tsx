import { Col, Flex } from "antd";

import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex style={{ width: "100%" }} align="center" justify="center">
      <Col style={{ width: "100%" }}>{children}</Col>
    </Flex>
  );
};

export default Container;

import { Col, Flex, Row } from "antd";

import React from "react";

const WebSiteContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex style={{ width: "100%" }} align="center" justify="center">
      <Col style={{ width: "1234px" }}>{children}</Col>
    </Flex>
  );
};

export default WebSiteContainer;

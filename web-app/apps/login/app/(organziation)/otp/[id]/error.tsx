"use client";
import React from "react";
import { Button, Flex, Result } from "antd";

const NotFound = () => {
  return (
    <Flex align="center" justify="center" style={{ height: "100vh" }}>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        // extra={<Button type="primary">Back Home</Button>}
      />
    </Flex>
  );
};

export default NotFound;

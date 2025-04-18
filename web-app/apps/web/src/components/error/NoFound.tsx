"use client";
import React from "react";
import { Button, Flex, Result } from "antd";

const NotFound = ({error}) => {
  return (
    <Flex align="center" justify="center" style={{ height: "100vh" }}>
      <Result
        status="404"
        title="404"
        subTitle={"Not Found"}
         extra={<Button href="https://thrico.com" type="primary">Back Home</Button>}
      />
    </Flex>
  );
};

export default NotFound;

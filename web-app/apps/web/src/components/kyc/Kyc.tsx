import { Card, Flex } from "antd";
import React from "react";
import Form from "./Form";

const Kyc = () => {
  return (
    <Flex align="center" justify="center" style={{ width: "100%" }}>
      <Card
        style={{ width: "50%" }}
        title={"Please complete your profile information"}
      >
        <Form />
      </Card>
    </Flex>
  );
};

export default Kyc;

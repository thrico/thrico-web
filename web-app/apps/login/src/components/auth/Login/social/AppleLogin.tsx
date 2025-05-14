import { AppleFilled } from "@ant-design/icons";
import { Button, Flex, Typography } from "antd";
import React from "react";

const AppleLogin = () => {
  return (
    <Button>
      <Flex>
        <AppleFilled />
        <Typography.Text style={{ marginLeft: 7 }}>Apple</Typography.Text>
      </Flex>
    </Button>
  );
};

export default AppleLogin;

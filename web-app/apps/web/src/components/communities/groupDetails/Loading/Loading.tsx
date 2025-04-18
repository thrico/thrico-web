import { Card, Flex, Skeleton, Space, Spin, Typography } from "antd";
import React from "react";

const Loading = () => {
  return (
    <Card>
      <Skeleton.Input
        style={{ height: 200, width: 1300 }}
        active={true}
      ></Skeleton.Input>

      <Space style={{ marginTop: 20, width: "100%" }} direction="vertical">
        <Space style={{ gap: 50 }}></Space>

        <Skeleton style={{ width: "100%" }} />
      </Space>
    </Card>
  );
};

export default Loading;

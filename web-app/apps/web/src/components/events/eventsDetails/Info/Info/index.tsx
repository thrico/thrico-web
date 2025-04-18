import React from "react";

import { LoremIpsum } from "react-lorem-ipsum";
import { Card, Flex, Space, Tag, Typography } from "antd";
import Edit from "./Edit";
const Info = () => {
  return (
    <Card
      extra={
        <>
          <Edit />
        </>
      }
      title="Event Info"
    >
      <LoremIpsum p="1" />
      <Flex style={{ width: "100%" }} wrap="wrap" gap={10}>
        <Space style={{ width: "40%", padding: 10 }} direction="vertical">
          <Typography.Title level={4}>Available Ticket</Typography.Title>
          <Typography>dssdd</Typography>
        </Space>
        <Space style={{ width: "40%", padding: 10 }} direction="vertical">
          <Typography.Title level={4}>Contact Email</Typography.Title>
          <Typography>test@gmail.com</Typography>
        </Space>
        <Space style={{ width: "40%", padding: 10 }} direction="vertical">
          <Typography.Title level={4}>Target Audience</Typography.Title>
          <Typography>
            <Tag>Student</Tag>
          </Typography>
        </Space>
        <Space style={{ width: "40%", padding: 10 }} direction="vertical">
          <Typography.Title level={4}>Contact Phone</Typography.Title>
          <Typography>+91 3893489384934834</Typography>
        </Space>
      </Flex>
    </Card>
  );
};

export default Info;

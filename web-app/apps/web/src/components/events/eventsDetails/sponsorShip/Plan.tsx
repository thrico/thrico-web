import { Card, Flex, Space, Typography } from "antd";
import React from "react";
import { Avatar, fullname } from "react-lorem-ipsum";
const Plan = () => {
  return (
    <Card
      title={
        <Space direction="vertical">
          <Typography>
            Join Us as a Catalysassat for Change: Become a Sponsor Today!
          </Typography>
          <Typography>Select Sponsorship type</Typography>
        </Space>
      }
    >
      {/* <Flex wrap="wrap" gap={20}>
        {[1, 2, 3].map((set) => (
          <Card style={{ width: "30%" }}>
            <Space
              direction="vertical"
              style={{ marginTop: 10, width: "100%" }}
            >
              <Typography>
                <strong>{fullname()}</strong>{" "}
              </Typography>
              <Typography.Title level={3}>₹5000</Typography.Title>
              <Typography.Title level={3}>Gold Sponsorship</Typography.Title>
            </Space>
          </Card>
        ))}
      </Flex> */}
    </Card>
  );
};

export default Plan;

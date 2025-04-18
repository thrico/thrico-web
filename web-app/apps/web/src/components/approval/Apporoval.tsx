import { Button, Card, Flex, Space, Typography } from "antd";
import Link from "next/link";
import React from "react";

const Approval = () => {
  return (
    <Flex
      style={{ width: "100%", height: "70vh" }}
      align="center"
      justify="center"
    >
      <Card
        title="Approval Pending"
        extra={
          <Link href="contact-us">
            <Button> Contact Us </Button>
          </Link>
        }
        style={{ width: 700 }}
      >
        <Typography>
          Your membership is pending approval, you will be notified by email
          after approval, In case of any further assistance please drop a mail
          at contact@alumnithrive.com
        </Typography>
        <Typography.Paragraph style={{ marginTop: 10 }}>
          To increase the profile completion score:
        </Typography.Paragraph>
        <Typography>1. Upload your profile picture</Typography>
        <Typography>2. Enter your contact details</Typography>
        <Typography>2. Enter your contact details</Typography>
        <Space style={{ marginTop: "1rem" }}>
          <Link href="/profile">
            <Button type="primary">View Profile</Button>
          </Link>
        </Space>
      </Card>
    </Flex>
  );
};

export default Approval;

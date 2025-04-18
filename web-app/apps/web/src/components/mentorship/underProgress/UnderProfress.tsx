import React from "react";
import { Button, Card, Flex, Result } from "antd";

const UnderProgress = () => (
  <Flex style={{ minHeight: "70vh" }} align="center" justify="center">
    <Card style={{ width: "50%" }}>
      <Result
        status="info"
        title="Thank you for applying to be a mentor!  "
        subTitle="Your's application is currently under review, and we will get back to you soon with an update via email. Once approved by our administration, you'll be notified."
        extra={[
          <Button href="/mentorship" type="primary" key="console">
            View All Mentors
          </Button>,
        ]}
      />
    </Card>
  </Flex>
);

export default UnderProgress;

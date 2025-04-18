import EditButton from "@repo/ui/EditButton";
import { Card, Space, Typography } from "antd";
import React from "react";

const Resume = () => {
  return (
    <Card title="Resume" extra={<EditButton />} style={{ width: "100%" }}>
      <Typography>
        Journey 2.0 We, at www.pulseplaydigital.com, help brands and start-ups
        of all sizes, verticals, geographies to take advantage of the digital
        ecosystem to reach audience and generate more revenue. Journey 1.0 I am
        a Customer/Digital professional with 20 years of leadership experience
        in the areas of Digital Tech Strategy,…
      </Typography>
    </Card>
  );
};

export default Resume;

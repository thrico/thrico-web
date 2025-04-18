"use client";
import { Card, Col, Row, Space } from "antd";

import React from "react";

import Meta from "antd/es/card/Meta";

import Booking from "./Booking";

const Dashboard = () => {
  return (
    <Space direction="vertical">
      <Card>
        <Space>
          <Booking />
        </Space>
      </Card>

      <Card dir="vertical" title="Need some help?">
        <Row gutter={16}>
          <Col span={8}>
            <Card title="FEEDBACK" bordered={false}>
              <Meta
                title="Request feature"
                description="Share your feature request or feedback, we’re all ears"
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card title="SUPPORT" bordered={false}>
              <Meta
                title="Help centre"
                description="Reach out to community, support or your personal assistant"
              />
            </Card>
          </Col>
        </Row>
      </Card>
    </Space>
  );
};

export default Dashboard;

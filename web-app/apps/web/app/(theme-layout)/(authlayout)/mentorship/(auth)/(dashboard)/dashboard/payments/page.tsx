"use client";

import { useState } from "react";
import { Card, Tabs, Table, Button, Typography, Row, Col, Space } from "antd";
import {
  BankOutlined,
  WalletOutlined,
  PhoneOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

export default function PaymentsPage() {
  const [activeTab, setActiveTab] = useState("summary");

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Count",
      dataIndex: "count",
      key: "count",
    },
    {
      title: "Earnings",
      dataIndex: "earnings",
      key: "earnings",
      render: (value: number) => `₹${value}`,
    },
  ];

  const data = [
    {
      key: "1",
      name: "1sddsds",
      type: "2",
      count: "2",
      earnings: 2,
    },
  ];

  return (
    <div style={{ padding: 24, maxWidth: 1200, margin: "0 auto" }}>
      <Row justify="space-between" align="middle" style={{ marginBottom: 24 }}>
        <Title level={2} style={{ margin: 0 }}>
          Payments
        </Title>
      </Row>

      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        <Col xs={24} sm={12} md={6}>
          <Card style={{ backgroundColor: "#f5f5f5" }}>
            <Space direction="vertical" size={4}>
              <Text type="secondary">
                <Space>
                  <span>Balance</span>
                  <WalletOutlined />
                </Space>
              </Text>
              <Title level={2} style={{ margin: 0 }}>
                0
              </Title>
            </Space>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={6}>
          <Card>
            <Space direction="vertical" size={4}>
              <Text type="secondary">
                <Space>
                  <span>Lifetime earnings</span>
                  <WalletOutlined />
                </Space>
              </Text>
              <Title level={2} style={{ margin: 0 }}>
                0
              </Title>
            </Space>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={6}>
          <Card>
            <Space direction="vertical" size={4}>
              <Text type="secondary">
                <Space>
                  <span>Pending Call Completion</span>
                  <PhoneOutlined />
                </Space>
              </Text>
              <Title level={2} style={{ margin: 0 }}>
                0
              </Title>
            </Space>
          </Card>
        </Col>
      </Row>

      <Card>
        <Tabs
          activeKey={activeTab}
          onChange={setActiveTab}
          items={[
            {
              key: "summary",
              label: "Summary",
              children: (
                <Table columns={columns} dataSource={data} pagination={false} />
              ),
            },
            {
              key: "transactions",
              label: "Transactions",
              children: <div>Transactions content</div>,
            },
            {
              key: "withdrawals",
              label: "Withdrawals",
              children: <div>Withdrawals content</div>,
            },
            {
              key: "incentives",
              label: "Incentives",
              children: <div>Incentives content</div>,
            },
          ]}
        />
      </Card>
    </div>
  );
}

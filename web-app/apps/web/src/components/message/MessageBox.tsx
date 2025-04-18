"use client";

import { useState } from "react";
import {
  Layout,
  Input,
  Tabs,
  List,
  Avatar,
  Typography,
  Button,
  Space,
  Badge,
  Collapse,
} from "antd";
import {
  SearchOutlined,
  MoreOutlined,
  EditOutlined,
  MenuOutlined,
  CaretRightOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { useGetUser } from "@/graphql/actions";
import MessageUser from "./MessageUser";

const { Text } = Typography;
const { Header } = Layout;
const { Panel } = Collapse;

export default function MessageBox() {
  const {
    data: { getUser },
  } = useGetUser();

  const [activeTab, setActiveTab] = useState("focused");
  const [isOpen, setIsOpen] = useState(false);

  const messages = [
    {
      id: 1,
      name: "Akshay Pathania",
      avatar: "/placeholder.svg",
      message: "Akshay sent a post",
      date: "Nov 11",
      online: true,
      type: "message",
    },
    {
      id: 2,
      name: "Amazon Web Services (AWS)",
      avatar: "/placeholder.svg",
      message: "Register for in person",
      date: "Nov 10",
      sponsored: true,
      type: "sponsored",
    },
    {
      id: 3,
      name: "Ashwini Rangasamy",
      avatar: "/placeholder.svg",
      message: "Job Opportunity @Unbxd | Bangalore",
      date: "Nov 10",
      type: "job",
    },
    {
      id: 4,
      name: "LinkedIn for Sales",
      avatar: "/placeholder.svg",
      message: "Hi, Pankaj, As a valued LinkedIn member, we'd...",
      date: "Nov 6",
      type: "offer",
    },
    {
      id: 5,
      name: "Kiran Suresh",
      avatar: "/placeholder.svg",
      message: "Project-led developer program with...",
      date: "Nov 3",
      sponsored: true,
      type: "sponsored",
    },
  ];

  const handleCollapseChange = (key: string | string[]) => {
    setIsOpen(key.length > 0);
  };

  return (
    <Collapse
      style={{
        zIndex: 1,
        width: "100%",
        maxWidth: 400,
        margin: "0 auto",
        bottom: 0,
        background: "#fff",
        position: "fixed",
        right: 10,
      }}
      activeKey={isOpen ? ["1"] : []}
      onChange={handleCollapseChange}
      expandIcon={({ isActive }) => (
        <DownOutlined style={{ fontSize: 17 }} rotate={isActive ? 90 : 0} />
      )}
      expandIconPosition="end"
    >
      <Panel
        key="1"
        header={
          <Space>
            <Avatar src={`https://cdn.thrico.network/${getUser?.avatar}`} />
            <Text strong>Messaging</Text>
          </Space>
        }
      >
        <div style={{ padding: "8px 16px" }}>
          <Input
            prefix={<SearchOutlined style={{ color: "#8c8c8c" }} />}
            placeholder="Search messages"
            suffix={<MenuOutlined style={{ color: "#8c8c8c" }} />}
            style={{ backgroundColor: "#f5f5f5", borderRadius: 8 }}
          />
        </div>

        <Tabs
          activeKey={activeTab}
          onChange={setActiveTab}
          items={[
            {
              key: "focused",
              label: "Focused",
            },
            {
              key: "other",
              label: "Other",
            },
          ]}
          style={{ padding: "0 16px" }}
        />

        <MessageUser />
      </Panel>
    </Collapse>
  );
}

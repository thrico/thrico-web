"use client"

import type React from "react"
import { useState } from "react"
import { Layout, Menu, Input, List, Avatar, Button, Tag, Space, Typography, Radio, Card, Tabs } from "antd"
import {
  CommentOutlined,
  InfoCircleOutlined,
  UserOutlined,
  PictureOutlined,
  CalendarOutlined,
  StarOutlined,
  SearchOutlined,
} from "@ant-design/icons"
import { faker } from "@faker-js/faker"
import { TabsProps } from "antd/lib"

const { Sider, Content } = Layout
const { Search } = Input
const { Text } = Typography

interface UserData {
  id: string
  name: string
  role: string
  description: string
  joinedDate: string
  avatar: string
  actionType: "connect" | "message" | "pending"
}

const People: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState("all")

  // Sample user data
  const users: UserData[] = [
    {
      id: "1",
      name: "Haritha Mathesh",
      role: "admin",
      description: "Description",
      joinedDate: "Joined on 04 Jan, 2025",
      avatar: faker.image.avatar(),
      actionType: "connect",
    },
    {
      id: "2",
      name: "Haritha Mathesh",
      role: "co-admin",
      description: "Description",
      joinedDate: "Joined on 04 Jan, 2025",
      avatar: faker.image.avatar(),
      actionType: "connect",
    },
    {
      id: "3",
      name: "Haritha Mathesh",
      role: "co-admin",
      description: "Description",
      joinedDate: "Joined on 04 Jan, 2025",
      avatar: faker.image.avatar(),
      actionType: "connect",
    },
    {
      id: "4",
      name: "Haritha Mathesh",
      role: "moderator",
      description: "Description",
      joinedDate: "Joined on 04 Jan, 2025",
      avatar: faker.image.avatar(),
      actionType: "message",
    },
    {
      id: "5",
      name: "Haritha Mathesh",
      role: "moderator",
      description: "Description",
      joinedDate: "Joined on 04 Jan, 2025",
      avatar: faker.image.avatar(),
      actionType: "connect",
    },
    {
      id: "6",
      name: "Haritha Mathesh",
      role: "moderator",
      description: "Description",
      joinedDate: "Joined on 04 Jan, 2025",
      avatar: faker.image.avatar(),
      actionType: "pending",
    },
    {
      id: "7",
      name: "Haritha Mathesh",
      role: "member",
      description: "Description",
      joinedDate: "Joined on 04 Jan, 2025",
      avatar: faker.image.avatar(),
      actionType: "connect",
    },
    {
      id: "8",
      name: "Haritha Mathesh",
      role: "member",
      description: "Description",
      joinedDate: "Joined on 04 Jan, 2025",
      avatar: faker.image.avatar(),
      actionType: "connect",
    },
  ]

  // Filter users based on selected role
  const filteredUsers = selectedRole === "all" ? users : users.filter((user) => user.role === selectedRole)

  // Get role display name with first letter capitalized
  const getRoleDisplay = (role: string) => {
    if (role === "co-admin") return "Co-Admin"
    return role.charAt(0).toUpperCase() + role.slice(1)
  }

  // Get tag color based on role
  const getRoleTagColor = (role: string) => {
    switch (role) {
      case "admin":
        return "#1890ff"
      case "co-admin":
        return "#52c41a"
      case "moderator":
        return "#faad14"
      case "member":
        return "#d9d9d9"
      default:
        return "#d9d9d9"
    }
  }

  // Get action button based on action type
  const getActionButton = (actionType: string) => {
    switch (actionType) {
      case "connect":
        return (
          <Button type="primary" size="small" style={{ backgroundColor: "#1890ff" }}>
            Connect
          </Button>
        )
      case "message":
        return <Button size="small">Message</Button>
      case "pending":
        return (
          <Button size="small" disabled icon={<SearchOutlined />}>
            Pending
          </Button>
        )
      default:
        return null
    }
  }

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'All',

    },
    {
      key: 'admin',
      label: 'Admin',

    },
    {
      key: 'co-admin',
      label: 'Co-Admin',

    },
    {
      key: 'moderator',
      label: 'Moderator',

    },
    {
      key: 'member',
      label: 'Member',

    },
  ];


  const onChange = (key: string) => {
    setSelectedRole(key);
  };
  return (

    <Card style={{ background: "#fff", padding: 24, margin: 0, minHeight: 280 }}>
      {/* Role filter */}
      <div style={{ marginBottom: 16, display: "flex", justifyContent: "space-between" }}>

        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />

        <Search placeholder="Find your people" style={{ width: 250 }} enterButton={<SearchOutlined />} />
      </div>

      {/* User list */}
      <List
        itemLayout="horizontal"
        dataSource={filteredUsers}
        renderItem={(user) => (
          <List.Item
            key={user.id}
            extra={getActionButton(user.actionType)}
            style={{ padding: "16px 0", borderBottom: "1px solid #f0f0f0" }}
          >
            <List.Item.Meta
              avatar={<Avatar src={user.avatar} size={40} />}
              title={
                <Space>
                  <Text strong>{user.name}</Text>
                  <Tag color={getRoleTagColor(user.role)} style={{ marginLeft: 8 }}>
                    {getRoleDisplay(user.role)}
                  </Tag>
                </Space>
              }
              description={
                <div>
                  <div>{user.description}</div>
                  <div style={{ fontSize: "12px", color: "#8c8c8c" }}>{user.joinedDate}</div>
                </div>
              }
            />
          </List.Item>
        )}
      />
    </Card>

  )
}

export default People


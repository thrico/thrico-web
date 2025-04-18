"use client"

import { Avatar, Button, Card, List, Typography } from "antd"
import { UserOutlined } from "@ant-design/icons"

const { Title } = Typography

// Sample data
const users = Array(8).fill({
  name: "Haritha Mathesh",
  description: "Description",
  avatar: "/placeholder.svg?height=40&width=40",
})

export default function UserManagement() {
  return (
    <Card
      title={

        "      User Management"


      }

    >

      <List
        itemLayout="horizontal"
        dataSource={users}
        renderItem={(user) => (
          <List.Item
            actions={[
              <Button key="approve" type="primary">
                Approve
              </Button>,
              <Button key="reject">Reject</Button>,
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={user.avatar} icon={<UserOutlined />} />}
              title={user.name}
              description={user.description}
            />
          </List.Item>
        )}
      />
    </Card>
  )
}


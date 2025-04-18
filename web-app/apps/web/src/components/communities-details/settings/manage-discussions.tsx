"use client"

import { Button, Card, Divider, Space, Switch, Typography } from "antd"

const { Title, Text } = Typography

// Discussion settings data
const discussionSections = [
  {
    title: "Participation Controls",
    items: [
      {
        name: "Private Replies",
        description: "Enable users to send private replies to other users or admins",
        defaultChecked: true,
      },
      {
        name: "Mentions & Tags",
        description: "Allow users to tag others in posts or comments to encourage interaction",
        defaultChecked: true,
      },
    ],
  },
  {
    title: "Content Approval & Moderation",
    items: [
      {
        name: "Post Approval",
        description: "Allow admins or moderators to review and approve posts before they are published",
        defaultChecked: true,
      },
      {
        name: "Approve Edits",
        description: "Require admins or moderators approval for edits on published posts",
        defaultChecked: true,
      },
      {
        name: "Flag & Reports System",
        description: "Users can flag inappropriate content",
        defaultChecked: true,
      },
    ],
  },
  {
    title: "Content Editing",
    items: [
      {
        name: "Draft Saving",
        description: "Let users save posts as drafts before publishing",
        defaultChecked: true,
      },
      {
        name: "Scheduled Posts",
        description: "Allow creators to schedule posts for future publication",
        defaultChecked: true,
      },
    ],
  },
]

export default function ManageDiscussions() {
  return (
    <Card
      extra={
        <Button type="primary">Update</Button>
      }
      title={

        "    Manage Discussions"


      }
    >
      <Title level={4} style={{ marginTop: 0 }}>

      </Title>

      {discussionSections.map((section, sectionIndex) => (
        <div key={section.title}>
          <Title level={5}>{section.title}</Title>
          <Space direction="vertical" style={{ width: "100%" }}>
            {section.items.map((item) => (
              <div
                key={`${section.title}-${item.name}`}
                style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
              >
                <div>
                  <Text strong>{item.name}</Text>
                  <div>
                    <Text type="secondary">{item.description}</Text>
                  </div>
                </div>
                <Switch defaultChecked={item.defaultChecked} />
              </div>
            ))}
          </Space>
          {sectionIndex < discussionSections.length - 1 && <Divider />}
        </div>
      ))}


    </Card>
  )
}


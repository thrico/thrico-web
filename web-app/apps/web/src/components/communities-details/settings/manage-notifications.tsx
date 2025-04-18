"use client"

import { Button, Card, Divider, Space, Switch, Typography } from "antd"

const { Title, Text } = Typography

// Notification settings data
const notificationSections = [
  {
    title: "In-App Notifications",
    items: [
      {
        name: "All Post",
        description: "Every post in the community",
        defaultChecked: true,
      },
      {
        name: "Highlights",
        description: "Friends' post and suggested post",
        defaultChecked: true,
      },
      {
        name: "Friend's Post",
        description: "Only friends' post",
        defaultChecked: true,
      },
      {
        name: "Off",
        description: "Only mentions and important updates to group settings or privacy",
        defaultChecked: false,
      },
      {
        name: "Gamification Alerts",
        description: "Alerts when users earn badges, points or leaderboard updates or challenge participation",
        defaultChecked: true,
      },
    ],
  },
  {
    title: "Email Notifications",
    items: [
      {
        name: "All Post",
        description: "Every post in the community",
        defaultChecked: true,
      },
      {
        name: "Highlights",
        description: "Friends' post and suggested post",
        defaultChecked: true,
      },
      {
        name: "Friend's Post",
        description: "Only friends' post",
        defaultChecked: true,
      },
      {
        name: "Off",
        description: "Only mentions and important updates to group settings or privacy",
        defaultChecked: false,
      },
      {
        name: "Gamification Alerts",
        description: "Alerts when users earn badges, points or leaderboard updates or challenge participation",
        defaultChecked: true,
      },
    ],
  },
  {
    title: "Push Notifications",
    items: [
      {
        name: "All Post",
        description: "Every post in the community",
        defaultChecked: true,
      },
      {
        name: "Highlights",
        description: "Friends' post and suggested post",
        defaultChecked: true,
      },
      {
        name: "Friend's Post",
        description: "Only friends' post",
        defaultChecked: true,
      },
      {
        name: "Off",
        description: "Only mentions and important updates to group settings or privacy",
        defaultChecked: false,
      },
      {
        name: "Gamification Alerts",
        description: "Alerts when users earn badges, points or leaderboard updates or challenge participation",
        defaultChecked: true,
      },
    ],
  },
]

export default function ManageNotifications() {
  return (
    <Card

      extra={
        <Button type="primary">Update</Button>
      }
      title={

        " Manage Discussions"


      }

    >


      {notificationSections.map((section, sectionIndex) => (
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
          {sectionIndex < notificationSections.length - 1 && <Divider />}
        </div>
      ))}

      <Divider />

      <div>
        <Title level={5}>Member Request Notifications</Title>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Text>Receive notifications when people ask to join</Text>
          <Switch defaultChecked />
        </div>
      </div>


    </Card>
  )
}


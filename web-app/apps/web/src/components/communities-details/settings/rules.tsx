"use client"

import { Button, Card, Divider, Space, Switch, Typography } from "antd"

const { Title, Text } = Typography

// Rules data
const rulesSections = [
  {
    title: "Respectful Behavior",
    items: [
      {
        name: "Treat all members with respect and professionalism",
        defaultChecked: true,
      },
      {
        name: "No harassment, discrimination, hate speech, or personal attacks will be tolerated",
        defaultChecked: true,
      },
      {
        name: "Respect differing opinions and engage in healthy, constructive debates",
        defaultChecked: true,
      },
    ],
  },
  {
    title: "Stay On-Topic",
    items: [
      {
        name: "Keep discussions relevant to the community's purpose",
        defaultChecked: true,
      },
      {
        name: "Avoid off-topic, spamming, or self-promotion unless explicitly allowed",
        defaultChecked: true,
      },
      {
        name: "Use appropriate categories and tags when starting a discussion",
        defaultChecked: true,
      },
    ],
  },
  {
    title: "Privacy & Confidentiality",
    items: [
      {
        name: "Do not share personal information (yours or others') without consent",
        defaultChecked: true,
      },
      {
        name: "Respect the privacy of private messages and confidential content shared in closed groups",
        defaultChecked: true,
      },
    ],
  },
  {
    title: "Content Guidelines",
    items: [
      {
        name: "Share accurate, valuable, and constructive information",
        defaultChecked: true,
      },
      {
        name: "No posting of offensive, inappropriate, or illegal content",
        defaultChecked: true,
      },
      {
        name: "Cite sources when sharing facts, research, or third-party content",
        defaultChecked: true,
      },
    ],
  },
  {
    title: "Fair Participation",
    items: [
      {
        name: "No spamming, trolling, or disruptive behavior in discussions",
        defaultChecked: true,
      },
      {
        name: "Avoid flooding threads with repetitive posts or comments",
        defaultChecked: true,
      },
      {
        name: "Report violations to moderators instead of engaging directly",
        defaultChecked: true,
      },
    ],
  },
  {
    title: "Accountability & Enforcement",
    items: [
      {
        name: "Violations may result in warnings, post deletions, temporary bans, or permanent removal",
        defaultChecked: true,
      },
      {
        name: "Repeated rule-breaking will lead to stricter penalties",
        defaultChecked: true,
      },
      {
        name: "Moderators' decisions are final but can be appealed through proper channels",
        defaultChecked: true,
      },
    ],
  },
  {
    title: "Use Of Platform Features",
    items: [
      {
        name: "Use features responsibly-anonymous posting, private replies, and reactions should be used respectfully",
        defaultChecked: true,
      },
      {
        name: "Follow platform-specific guidelines for gamification elements like badges, leaderboards, and quests",
        defaultChecked: true,
      },
    ],
  },
]

export default function Rules() {
  return (
    <Card
      title={

        "Rules"


      }
      extra={
        <Space>
          <Button>Create Rules</Button>
          <Button type="primary">Update</Button>
        </Space>
      }
    >


      {rulesSections.map((section, sectionIndex) => (
        <div key={section.title}>
          <Title level={5}>{section.title}</Title>
          <Space direction="vertical" style={{ width: "100%" }}>
            {section.items.map((item) => (
              <div
                key={`${section.title}-${item.name}`}
                style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
              >
                <Text>{item.name}</Text>
                <Switch defaultChecked={item.defaultChecked} />
              </div>
            ))}
          </Space>
          {sectionIndex < rulesSections.length - 1 && <Divider />}
        </div>
      ))}
    </Card>
  )
}


import React from "react";
import { Card, Avatar, Typography, Rate, Tag, Button, Space, Flex } from "antd";
import { FlagOutlined } from "@ant-design/icons";
import Link from "next/link";

const { Title, Text, Paragraph } = Typography;

const ProfileCard: React.FC = () => {
  return (
    <Card style={{ width: "100%", borderRadius: 8, marginTop: 20 }}>
      <Flex align="flex-start">
        <Avatar
          size={120}
          src="https://picsum.photos/200"
          style={{ marginRight: 16 }}
        />
        <Flex vertical flex={1}>
          <Flex justify="space-between" align="center">
            <Title level={3} style={{ marginBottom: 0 }}>
              Abhishek Jakhar
              <FlagOutlined style={{ fontSize: 16, color: "red" }} />
            </Title>
            <Tag color="green">Top Mentor</Tag>
          </Flex>
          <Text type="secondary">Senior Software Engineer at Coinbase</Text>
          <Paragraph type="secondary" style={{ marginTop: 8 }}>
            Top 1% Mentor | Interview Expert | JavaScript and React Expert |
            Roadmap | Pair Programming
          </Paragraph>
          <Rate disabled defaultValue={5} style={{ fontSize: 16 }} />
          <Text strong style={{ marginLeft: 8 }}>
            5.0 (76 reviews)
          </Text>
          <Paragraph style={{ marginTop: 16 }}>
            Hello! I'm a passionate Frontend Engineer at Coinbase with a deep
            love for mentoring engineers and guiding them through their
            professional journeys. W...
          </Paragraph>
          <Space wrap>
            <Tag>React</Tag>
            <Tag>CSS</Tag>
            <Tag>Web Development</Tag>
            <Tag>JavaScript</Tag>
            <Tag>Interview</Tag>
            <Tag>Frontend</Tag>
          </Space>
          <Flex
            justify="space-between"
            align="center"
            style={{ marginTop: 16 }}
          >
            <Flex vertical>
              <Text type="secondary">Starting from</Text>
              <Title level={2} style={{ margin: 0 }}>
                $100 <Text style={{ fontSize: 14 }}>/session</Text>
              </Title>
            </Flex>
            <Link href="/mentorship/sdsdsddsds">
              <Button type="primary" size="large">
                View Profile
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
};

export default ProfileCard;

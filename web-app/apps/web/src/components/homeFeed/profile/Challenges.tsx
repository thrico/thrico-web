import React from "react";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import { Avatar, Card, List, Space } from "antd";

const data = Array.from({ length: 3 }).map((_, i) => ({
  href: "https://ant.design",
  title: `ant design part ${i}`,
  avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`,
  description:
    "Ant Design, a design language for background applications, is refined by Ant UED Team.",
  content:
    "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
}));

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const Challenges = () => (
  <Card title="Challenges">
    <List
      itemLayout="vertical"
      size="large"
      dataSource={data}
      renderItem={(item) => (
        <List.Item
          key={item.title}
          extra={
            <img
              width={70}
              alt="logo"
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1696319802391/hvWFt1_AU.png?auto=compress"
            />
          }
        >
          <List.Item.Meta
            title={"Self Starter"}
            description={
              "Publish an article every day for 7 days and earn a cool crazy blogger badge!"
            }
          />
        </List.Item>
      )}
    />
  </Card>
);

export default Challenges;

import {
  HeartOutlined,
  LikeOutlined,
  MessageOutlined,
  StarOutlined,
  TagsOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import React from "react";
import { Avatar, Button, List, Space } from "antd";
import Link from "next/link";
import { AllEvents } from "../type";

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const ListView = ({ data }: AllEvents) => (
  <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: (page) => {
        console.log(page);
      },
      pageSize: 3,
    }}
    dataSource={data}
    renderItem={(item) => (
      <List.Item
        // key={item?.title}
        actions={[
          <IconText
            icon={TagsOutlined}
            text={item?.eventsPayments?.eventCost}
            key="list-vertical-star-o"
          />,
          <IconText
            icon={UsergroupAddOutlined}
            text="156+ Going"
            key="list-vertical-like-o"
          />,
        ]}
        extra={
          <img
            width={"100%"}
            alt="logo"
            style={{ objectFit: "cover" }}
            height={220}
            src={`https://cdn.thrico.network/${item?.cover}`}
          />
        }
      >
        <List.Item.Meta
          title={
            <Link
              href={`/communities/${item.slug}?${item?.name}?name=${item?.name}`}
            >
              {item?.title}
            </Link>
          }
        />
        {item.price}
        <Button type="primary">Message</Button>
      </List.Item>
    )}
  />
);

export default ListView;

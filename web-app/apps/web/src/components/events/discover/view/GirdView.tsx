import {
  HeartOutlined,
  LikeOutlined,
  MessageOutlined,
  StarOutlined,
  TagsOutlined,
  UserOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import React from "react";
import { Avatar, Flex, List, Space, Typography } from "antd";

import { Card } from "antd";
import Link from "next/link";
import { AllEvents } from "../type";
import GirdLoading from "@/components/communities/discover/view/list/GirdLoading";
import Paragraph from "antd/es/typography/Paragraph";

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const GirdView = ({ data, loading }: AllEvents) => (
  <List
    grid={{
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 2,
      lg: 3,
      xl: 3,
      xxl: 3,
    }}
    loading={loading}
    pagination={false}
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item>
        <Card
          actions={[
            <IconText
              icon={TagsOutlined}
              text={item?.eventsPayments?.eventCost.toUpperCase()}
              key="list-vertical-star-o"
            />,
            <IconText
              icon={UsergroupAddOutlined}
              text="156+ Going"
              key="list-vertical-like-o"
            />,
          ]}
        >
          <Flex justify="center">
            <img
              width={"100%"}
              alt="logo"
              style={{ objectFit: "cover" }}
              height={220}
              src={`https://cdn.thrico.network/${item?.cover}`}
            />
          </Flex>
          <Space style={{ marginTop: 25 }} direction="vertical">
            <Link href={`/events/${item?.slug}?value=${item.name}`}>
              <Typography.Title level={4}>{item.name}</Typography.Title>
            </Link>
            <Paragraph
              style={{ minHeight: 80 }}
              ellipsis={{
                rows: 4,
                expandable: true,
                symbol: "more",
                onEllipsis: (ellipsis) => {},
              }}
            >
              {item?.details}
            </Paragraph>
          </Space>
        </Card>
      </List.Item>
    )}
  />
);

export default GirdView;

import {
  HeartOutlined,
  LikeOutlined,
  MessageOutlined,
  StarOutlined,
  TagsOutlined,
  UserOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Flex, List, Space } from "antd";
import React from "react";
import AddEvent from "./add/AddEvent";
import Link from "next/link";
const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
const AllEvents = ({ data, id, isAdmin }) => {
  return (
    <Card
      title={`All Event (${data?.length})`}
      extra={<>{isAdmin && <AddEvent id={id} />}</>}
    >
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 3,
          xl: 3,
          xxl: 3,
        }}
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 9,
        }}
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            <Card
              actions={[
                <IconText
                  icon={TagsOutlined}
                  text={
                    <span style={{ textTransform: "capitalize" }}>
                      {item?.eventsPayments?.eventCost}
                    </span>
                  }
                  key="list-vertical-star-o"
                />,
                <IconText
                  icon={UsergroupAddOutlined}
                  text="156+ Going"
                  key="list-vertical-like-o"
                />,
              ]}
              title={
                <>
                  <List.Item.Meta
                    title={
                      <Link href={`/events/${item.slug}?value=${item.name}`}>
                        {item.name}
                      </Link>
                    }
                  />
                </>
              }
            >
              {item?.admin?.title}
              <Flex justify="center">
                <img
                  width={"100%"}
                  alt="logo"
                  style={{ objectFit: "cover" }}
                  height={220}
                  src={`https://cdn.thrico.network/${item?.cover}`}
                />
              </Flex>
              <List.Item.Meta
                style={{ marginTop: 10 }}
                description={item?.details}
              />
            </Card>
          </List.Item>
        )}
      />
    </Card>
  );
};

export default AllEvents;

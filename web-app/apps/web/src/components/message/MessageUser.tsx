import { getInbox } from "@/graphql/actions/chat";
import { Avatar, Badge, List, Space, Typography } from "antd";
import moment from "moment";
import React from "react";

const MessageUser = () => {
  const { Text } = Typography;

  const { data, refetch, loading } = getInbox({});

  return (
    <>
      <List
        dataSource={data?.getInbox}
        renderItem={(item) => (
          <List.Item
            style={{ padding: "12px 16px", cursor: "pointer" }}
            onClick={() =>
              console.log(`Clicked on message from ${item?.sender?.firstName}`)
            }
          >
            <List.Item.Meta
              avatar={
                <Badge dot={true} color="green" offset={[-6, 36]}>
                  <Avatar src={item?.sender?.avatar} size={48} />
                </Badge>
              }
              title={
                <Space
                  style={{ width: "100%", justifyContent: "space-between" }}
                >
                  <Text strong>{item?.sender?.firstName}</Text>
                  <Text type="secondary" style={{ fontSize: 12 }}>
                    {moment(item?.message?.createdAt).fromNow()}
                  </Text>
                </Space>
              }
              description={
                <Space>
                  <Text type="secondary" style={{ fontSize: 14 }}>
                    {item?.message?.content}
                  </Text>
                </Space>
              }
            />
          </List.Item>
        )}
      />
    </>
  );
};

export default MessageUser;

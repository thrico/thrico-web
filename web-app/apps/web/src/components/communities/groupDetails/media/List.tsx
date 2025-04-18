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

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
const AllMedia = ({ data }) => {
  return (
    <Card title={`All Media (${data?.length})`}>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 2,
          lg: 2,
          xl: 2,
          xxl: 2,
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
            <Card>
              {item?.admin?.title}
              <Flex justify="center">
                <img
                  width={"100%"}
                  alt="logo"
                  style={{ objectFit: "cover" }}
                  height={220}
                  src={`https://cdn.thrico.network/${item?.url}`}
                />
              </Flex>
            </Card>
          </List.Item>
        )}
      />
    </Card>
  );
};

export default AllMedia;

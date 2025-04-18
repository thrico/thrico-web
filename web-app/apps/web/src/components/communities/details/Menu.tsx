import React from "react";
import {
  UserOutlined,
  CalendarOutlined,
  MessageOutlined,
  PictureOutlined,
  TeamOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Card, Space, Tag, Button, Avatar, Typography, Menu } from "antd";
import { Layout, MenuProps } from "antd";
import { useRouter } from "next/navigation";
const CommunitiesMenu = ({ slug }) => {
  const { Sider } = Layout;
  const menuItems = [
    { key: "discussion", icon: <MessageOutlined />, label: "Discussion" },
    { key: "events", icon: <CalendarOutlined />, label: "Events" },
    { key: "people", icon: <TeamOutlined />, label: "People" },
    { key: "media", icon: <PictureOutlined />, label: "Media" },
    { key: "settings", icon: <SettingOutlined />, label: "Setting" },
  ];

  const router = useRouter();

  const onClick: MenuProps["onClick"] = (e) => {
    e.key === "discussion"
      ? router.push(`/communities/${slug}`)
      : router.push(`/communities/${slug}/${e.key}`);
  };
  const { Text } = Typography;
  return (
    <Sider
      width={240}
      style={{ background: "transparent", position: "static", top: 0 }}
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={["discussion"]}
        style={{ borderRight: 0 }}
        items={menuItems}
        onClick={onClick}
      />

      <Card title="Suggested Communities" style={{ marginTop: "24px" }}>
        <Card.Meta
          avatar={<Avatar icon={<UserOutlined />} />}
          title="Beautiful Nature of the World"
          description={
            <Space direction="vertical" size={4}>
              <Text type="secondary">Created by Gabbar</Text>
              <Space>
                <Tag>Nature</Tag>
                <Button type="primary" size="small">
                  Join
                </Button>
              </Space>
            </Space>
          }
        />
      </Card>
    </Sider>
  );
};

export default CommunitiesMenu;

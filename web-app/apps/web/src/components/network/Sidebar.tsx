import React from "react";
import { Card, List } from "antd";
import {
  TeamOutlined,
  ContactsOutlined,
  UserOutlined,
  UsergroupAddOutlined,
  CalendarOutlined,
  BookOutlined,
  MailOutlined,
} from "@ant-design/icons";

export default function NetworkManagement() {
  const items = [
    { icon: <TeamOutlined />, title: "Connections", count: 751 },
    { icon: <ContactsOutlined />, title: "Contacts", count: 44 },
    { icon: <UserOutlined />, title: "Following & followers", count: null },
    { icon: <UsergroupAddOutlined />, title: "Communities", count: 3 },
    { icon: <CalendarOutlined />, title: "Events", count: 4 },
    { icon: <BookOutlined />, title: "Pages", count: 144 },
    { icon: <MailOutlined />, title: "Newsletters", count: 27 },
  ];

  return (
    <Card title="Manage my network" style={{ width: "20%" }}>
      <List
        dataSource={items}
        renderItem={(item) => (
          <List.Item
            style={{
              padding: "12px 24px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 18, color: "#595959" }}>
                {item.icon}
              </span>
              <span style={{ color: "#262626", fontSize: 16 }}>
                {item.title}
              </span>
            </div>
            {item.count !== null && (
              <span style={{ color: "#595959", fontSize: 16 }}>
                {item.count}
              </span>
            )}
          </List.Item>
        )}
      />
    </Card>
  );
}

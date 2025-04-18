"use client";

import { Layout, Avatar, Button } from "antd";
import { CopyOutlined } from "@ant-design/icons";

export default function TopBar() {
  return (
    <Layout.Header
      style={{
        background: "#fff",
        padding: "0 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #eee",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Avatar src="/placeholder.svg" size="small" />
          <span>topmate.io/pankaj_verma13/</span>
          <Button type="text" icon={<CopyOutlined />} />
        </div>
        <Button type="text" icon={<CopyOutlined />} />
      </div>
    </Layout.Header>
  );
}

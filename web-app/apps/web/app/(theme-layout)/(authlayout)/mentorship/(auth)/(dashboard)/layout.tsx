"use client";
import SideNav from "@/components/mentorship/dashboard/SideNav";

import { Layout } from "antd";
import "react-quill/dist/quill.snow.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout.Sider
        width={280}
        style={{
          background: "#FAF9F6",
          borderRight: "1px solid #eee",

          height: "85vh",

          left: 0,

          bottom: 0,
        }}
      >
        <SideNav />
      </Layout.Sider>
      <Layout style={{}}>
        <Layout.Content style={{ padding: "24px", background: "#fff" }}>
          {children}
        </Layout.Content>
      </Layout>
    </Layout>
  );
}

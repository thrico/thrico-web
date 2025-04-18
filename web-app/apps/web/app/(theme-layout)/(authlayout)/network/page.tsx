import NetworkList from "@/components/network/NetworkList";
import { UsergroupAddOutlined } from "@ant-design/icons";
import { Segmented } from "antd";
import { Metadata } from "next";
import React from "react";
import { FaMagic } from "react-icons/fa";
export const metadata: Metadata = {
  title: "Network",
  description: "...",
};
const page = () => {
  return (
    <>
      <Segmented
        style={{ marginBottom: 50, borderRadius: 10 }}
        size="large"
        options={[
          {
            label: "Discover",
            value: "Discover",
            icon: <FaMagic />,
          },
          {
            label: "My Connections",
            value: "Communities",
            icon: <UsergroupAddOutlined />,
          },
        ]}
      />
      <NetworkList />
    </>
  );
};

export default page;

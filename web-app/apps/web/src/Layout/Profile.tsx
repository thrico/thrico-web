import React from "react";
import {
  LogoutOutlined,
  MenuOutlined,
  ProfileOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Avatar, Dropdown, Space } from "antd";

import Link from "next/link";

type MenuItem = Required<MenuProps>["items"][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}
const items: MenuItem[] = [
  // getItem(
  //   <Link href="/dashboard" rel="noopener noreferrer">
  //     Dashboard
  //   </Link>,
  //   "/dashboard",
  //   <FaHome />
  // ),
  // getItem(
  //   <Link href="/feed" rel="noopener noreferrer">
  //     Dashboard
  //   </Link>,
  //   "/feed",
  //   <MenuOutlined/>
  // ),
  getItem(
    <Link href="/profile" rel="noopener noreferrer">
      My Profile
    </Link>,
    "/profile",
    <ProfileOutlined />
  ),
  getItem(
    <Link href="/settings" rel="noopener noreferrer">
      Settings
    </Link>,
    "/settings",
    <SettingOutlined />
  ),
  getItem(
    <Link target="_blank" href="/logout" rel="noopener noreferrer">
      Logout
    </Link>,
    "/logout",
    <LogoutOutlined />
  ),
];

const menuProps = {
  items,
};
interface props {
  getUser: user;
}

const Profile = ({ getUser }: props) => (
  <Space wrap>
    <Dropdown.Button
      menu={menuProps}
      placement="bottom"
      icon={
        <Avatar
          src={`https://cdn.thrico.network/${getUser?.avatar}`}
          style={{ width: 25, height: 25 }}
        />
      }
    >
      {getUser?.firstName}
    </Dropdown.Button>
  </Space>
);

export default Profile;

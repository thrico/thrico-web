import React from "react";
import { LogoutOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Avatar, Button, Dropdown, message, Space, Tooltip } from "antd";
import { user } from "../../types/ts-types";
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
  //   <Link target="_blank" href="/profile" rel="noopener noreferrer">
  //     My Profile
  //   </Link>,
  //   "/profile",
  //   <ProfileOutlined />
  // ),
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
      icon={<Avatar src={getUser.avatar} style={{ width: 25, height: 25 }} />}
    >
      {getUser?.firstName}
    </Dropdown.Button>
  </Space>
);

export default Profile;

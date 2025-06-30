"use client";

import { MenuProps } from "antd";
import Link from "next/link";

import { TbUsersGroup } from "react-icons/tb";
import { SlCalender } from "react-icons/sl";
import SidebarLayout from "@/components/common/theme/SidebarLayout";
import CreateCommunities from "@/components/communities/add/Add";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const items: MenuItem[] = [];

  return (
    <>
      <SidebarLayout
        title={"marketplace"}
        height={530}
        items={items}
        actions={""}
      >
        {children}
      </SidebarLayout>
    </>
  );
}

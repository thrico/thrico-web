"use client";

import { MenuProps } from "antd";
import Link from "next/link";

import { CgFeed } from "react-icons/cg";

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
  const items: MenuItem[] = [
    getItem(
      <Link href="/communities/my-group" shallow>
        My Communities
      </Link>,
      "/communities/my-group",
      <TbUsersGroup style={{ fontSize: 18 }} />
    ),
    getItem(
      <Link href="/communities/events" shallow>
        Events
      </Link>,
      "/communities/events",
      <SlCalender style={{ fontSize: 15 }} />
    ),
  ];

  return (
    <>
      <SidebarLayout
        title={"Communities"}
        height={530}
        items={items}
        actions={<CreateCommunities />}
      >
        {children}
      </SidebarLayout>
    </>
  );
}

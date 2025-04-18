"use client";

import { MenuProps } from "antd";
import Link from "next/link";

import { TbUsersGroup } from "react-icons/tb";

import RegisterButton from "@/components/mentorship/registerButton/RegisterButton";
import SidebarLayoutMentorship from "@/components/common/theme/SidebarLayoutMentorShip";

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
        My Mentors
      </Link>,
      "/communities/my-group",
      <TbUsersGroup style={{ fontSize: 18 }} />
    ),
  ];

  return (
    <>
      <SidebarLayoutMentorship
        title={"Mentorship"}
        height={530}
        items={items}
        actions={<RegisterButton />}
      >
        {children}
      </SidebarLayoutMentorship>
    </>
  );
}

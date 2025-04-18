import { BellOutlined, HomeOutlined } from "@ant-design/icons";
import { Menu, theme } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { MdChatBubbleOutline, MdDashboard } from "react-icons/md";

import { FaGlobe, FaHome, FaRegCalendarAlt } from "react-icons/fa";
import { TiGroup } from "react-icons/ti";
import { useParams, usePathname } from "next/navigation";

import { useGetUser } from "@/graphql/actions";
import { getItem } from "@/components/common/getItem";
import Menus from "@/components/menu/ThricoMenu";
import { BiBellMinus } from "react-icons/bi";
import { GiTeacher } from "react-icons/gi";
import { CiShop } from "react-icons/ci";
const MenuItem = () => {
  const { data: { getUser } = {}, error } = useGetUser();
  console.log(error);

  const items = [
    // getItem(
    //   <Link shallow href="/dashboard">
    //     Home
    //   </Link>,
    //   "dashboard",
    //   <FaHome style={{ fontSize: 20 }} />
    // ),
    // getItem(
    //   <Link shallow href="/directory">
    //     Directory
    //   </Link>,
    //   "directory",
    //   <FaUserFriends style={{ fontSize: 20 }} />
    // ),

    getItem(
      <Link shallow href="/feed">
        Home
      </Link>,
      "home",

      <FaHome size={18} />
    ),

    getItem(
      <Link shallow href="/network">
        Network
      </Link>,
      "network",

      <FaGlobe size={18} />
    ),

    getItem(
      <Link shallow href="/communities">
        Communities
      </Link>,
      "communities",
      <TiGroup size={18} />
    ),

    getItem(
      <Link shallow href="/events">
        Events
      </Link>,
      "events",
      <FaRegCalendarAlt size={18} />
    ),

    getItem(
      <Link shallow href="/mentorship">
        Mentorship
      </Link>,
      "mentorship",
      <GiTeacher size={19} />
    ),

    getItem(
      <Link shallow href="/marketplace">
        Marketplace
      </Link>,
      "marketplace",
      <CiShop size={19} />
    ),

    // getItem(<Logout />, "logout", <IoMdLogIn style={{ fontSize: 16 }} />),
  ];

  const pathname = usePathname();
  const [active, setActive] = useState("home");

  useEffect(() => {
    const activeGroup = pathname?.includes("/communities");
    const activeEvents = pathname?.includes("/events");
    const activeMentorship = pathname?.includes("/mentorship");
    const activeDashboard = pathname?.includes("/dashboard");
    if (activeGroup) {
      setActive("communities");
    } else if (activeEvents) {
      setActive("events");
    } else if (activeMentorship) {
      setActive("mentorship");
    } else if (activeDashboard) {
      setActive("dashboard");
    } else if (activeDashboard) {
      setActive("notifications");
    } else {
      setActive("home");
    }
  }, [pathname]);

  return (
    <>
      {getUser?.isApproved && (
        <>
          <Menu
            mode="horizontal"
            items={items}
            defaultSelectedKeys={[active]}
            style={{
              width: "60%",
            }}
          />
        </>
      )}
    </>
  );
};

export default MenuItem;

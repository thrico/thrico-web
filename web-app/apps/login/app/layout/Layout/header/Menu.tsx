import {
  BookOutlined,
  HomeOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { Flex, Menu, MenuProps, Typography, theme } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { MdEvent, MdOutlineWorkHistory } from "react-icons/md";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { FaBookReader, FaHome, FaUserFriends } from "react-icons/fa";
import { TiGroup } from "react-icons/ti";
import { useParams, usePathname } from "next/navigation";
import { BiDonateBlood } from "react-icons/bi";
import { ImProfile } from "react-icons/im";
import { IoMdLogIn } from "react-icons/io";
import { IoHelpCircleOutline } from "react-icons/io5";
import Logout from "./LogoutUser";
import { useGetUser } from "@/graphql/actions";
import { getItem } from "@/components/common/getItem";
const MenuItem = () => {
  const {
    token: { colorBgContainer, borderRadiusLG, colorPrimary },
  } = theme.useToken();
  const { data: { getUser } = {}, loading, error } = useGetUser();

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
      <Link shallow href="/communities">
        Communities
      </Link>,
      "groups",
      <TiGroup style={{ fontSize: 20 }} />
    ),
    // getItem(
    //   <Link shallow href="/events">
    //     Events
    //   </Link>,
    //   "events",
    //   <MdEvent style={{ fontSize: 20 }} />
    // ),
    // getItem(
    //   <Link shallow href="/mentorship">
    //     Mentorship
    //   </Link>,
    //   "mentorship",

    //   <LiaHandsHelpingSolid style={{ fontSize: 20 }} />
    // ),
    // getItem(
    //   <Link shallow href="/jobs">
    //     Jobs
    //   </Link>,
    //   "jobs",
    //   <MdOutlineWorkHistory style={{ fontSize: 15 }} />
    // ),
    // getItem(
    //   <Link shallow href="/marketplace">
    //     Marketplace
    //   </Link>,
    //   "marketPlace",
    //   <ShoppingOutlined style={{ fontSize: 16 }} />
    // ),
    // getItem(
    //   <Link shallow href="/courses">
    //     Courses
    //   </Link>,
    //   "courses",
    //   <BookOutlined style={{ fontSize: 15 }} />
    // ),
    // getItem(
    //   <Link shallow href="/alumni-stories">
    //     Alumni Story
    //   </Link>,
    //   "alumni-stories",
    //   <FaBookReader style={{ fontSize: 15 }} />
    // ),
    // getItem(
    //   <Link shallow href="/giving">
    //     Giving
    //   </Link>,
    //   "giving",
    //   <BiDonateBlood style={{ fontSize: 18 }} />
    // ),
    // getItem(
    //   <Link shallow href="/profile">
    //     My Profile
    //   </Link>,
    //   "profile",
    //   <ImProfile style={{ fontSize: 16 }} />
    // ),

    getItem(
      <Link shallow href="/help">
        Help
      </Link>,
      "help",
      <IoHelpCircleOutline style={{ fontSize: 20 }} />
    ),

    getItem(<Logout />, "logout", <IoMdLogIn style={{ fontSize: 16 }} />),
  ];
  const notApproved = [
    getItem(
      <Link shallow href="/">
        Home
      </Link>,
      "Home",
      <HomeOutlined />
    ),
  ];

  const params = useParams();
  const pathname = usePathname();
  const [active, setActive] = useState("home");

  useEffect(() => {
    const activeGroup = pathname?.includes("/communities");
    const activeEvents = pathname?.includes("/events");
    const activeMentorship = pathname?.includes("/mentorship");
    const activeDashboard = pathname?.includes("/dashboard");
    if (activeGroup) {
      setActive("groups");
    } else if (activeEvents) {
      setActive("events");
    } else if (activeMentorship) {
      setActive("mentorship");
    } else if (activeDashboard) {
      setActive("dashboard");
    } else {
      setActive("home");
    }
  }, [pathname]);

  return (
    <>
      {getUser?.isApproved && (
        <Menu
          mode="horizontal"
          items={items}
          defaultSelectedKeys={[active]}
          style={{
            width: "50%",
          }}
        />
      )}
    </>
  );
};

export default MenuItem;

"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button, Drawer, Layout, Typography, Card, Space } from "antd";

import {
  MdAutoStories,
  MdCelebration,
  MdLocalOffer,
  MdOutlinePhotoLibrary,
  MdOutlineShoppingCart,
} from "react-icons/md";
import {
  FaBirthdayCake,
  FaChartLine,
  FaChartPie,
  FaCity,
  FaLocationArrow,
  FaNetworkWired,
  FaNewspaper,
  FaQuestion,
  FaRegCommentAlt,
  FaRegHandshake,
  FaShareAlt,
  FaThumbsUp,
  FaUserTie,
} from "react-icons/fa";
import { SlGraph } from "react-icons/sl";
import { CiShop } from "react-icons/ci";
import { GoFileMedia } from "react-icons/go";
import { IoNewspaper } from "react-icons/io5";
import { RiAccountPinBoxFill, RiShare2Line } from "react-icons/ri";
import { IoMdPhotos } from "react-icons/io";

const { Content } = Layout;
const { Title, Text } = Typography;

interface ModuleCardProps {
  title: string;
  href: string;
  image: string;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ title, href, image }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(href)}
      style={{
        cursor: "pointer",
        margin: "0 8px",
        border: "none",
        overflow: "hidden",
        padding: 0,
      }}
    >
      <div style={{ position: "relative", height: "100%" }}>
        <Image
          alt={title}
          src={`https://cdn.thrico.network/${image}`}
          width={200}
          height={100}
          style={{ objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "10px",
            background: "linear-gradient(transparent, rgba(0,0,0,1))",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: "18px", display: "block", color: "white" }}>
            {title}
          </Text>
        </div>
      </div>
    </div>
  );
};

interface ListCardProps {
  title: string;
  href: string;
  icon: React.ReactNode;
}

const ListCard: React.FC<ListCardProps> = ({ title, href, icon }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(href)}
      style={{
        margin: "0 8px",
        width: "12vw",
        border: "none",
        overflow: "hidden",
        backgroundColor: "transparent",
      }}
    >
      <div
        style={{
          position: "relative",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            position: "relative",
            backgroundColor: "#1890ff",
            width: 50,
            height: 50,
            marginTop: 10,
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {icon}
        </div>
        <Text style={{ fontSize: "18px", display: "block" }}>{title}</Text>
      </div>
    </div>
  );
};

const MAIN_MODULES = [
  {
    title: "Directory",
    href: "/network",
    image: "connection-placeholder.png",
  },
  {
    title: "Communities",
    href: "/communities",
    image: "communities-default-cover-photo.jpg",
  },
  {
    title: "Events",
    href: "/events)",
    image: "event-placeholder.png",
  },
  {
    title: "Jobs",
    href: "/jobs",
    image: "job-placeholder.png",
  },
  {
    title: "Marketplace",
    href: "/market-place",
    image: "marketplace-placeholder.png",
  },
  {
    title: "Mentorship",
    href: "/mentorship",
    image: "mentorship-placeholder.png",
  },
];

const MODULE_CATEGORIES = [
  {
    category: "Popular Modules",
    modules: [
      {
        title: "Stories",
        href: "/stories",
        icon: <MdAutoStories color="white" />,
      },
      {
        title: "Giving",
        href: "/giving",
        icon: <FaRegHandshake color="white" />,
      },
      {
        title: "Projects",
        href: "/projects",
        icon: <SlGraph color="white" />,
      },
      {
        title: "Wall of Fame",
        href: "/wall-of-fame",
        icon: <MdOutlinePhotoLibrary color="white" />,
      },
      {
        title: "Marketplace",
        href: "/marketplace",
        icon: <CiShop color="white" />,
      },
      {
        title: "Buy Merch",
        href: "/buy-alma-merch",
        icon: <MdOutlineShoppingCart color="white" />,
      },
      {
        title: "Unlock Rewards",
        href: "/unlock-rewards",
        icon: <MdCelebration color="white" />,
      },
      {
        title: "Offers",
        href: "/offers",
        icon: <MdLocalOffer color="white" />,
      },
    ],
  },
  {
    category: "Networking & Social Engagement",
    modules: [
      {
        title: "Nearby",
        href: "/alumni-nearby",
        icon: <FaLocationArrow color="white" />,
      },
      {
        title: "New To City",
        href: "/new-to-city",
        icon: <FaCity color="white" />,
      },
      {
        title: "Memories",
        href: "/memories",
        icon: <IoMdPhotos color="white" />,
      },
      {
        title: "Birthdays",
        href: "/birthdays",
        icon: <FaBirthdayCake color="white" />,
      },
      {
        title: "Anniversaries",
        href: "/anniversaries",
        icon: <MdCelebration color="white" />,
      },
      {
        title: "Recommendations",
        href: "/recommendations",
        icon: <FaThumbsUp color="white" />,
      },
      {
        title: "Invite",
        href: "/invite-alumni",
        icon: <FaShareAlt color="white" />,
      },
      {
        title: "Refer",
        href: "/refer-alma",
        icon: <RiShare2Line color="white" />,
      },
    ],
  },
  {
    category: "Personal Growth & Learning",
    modules: [
      {
        title: "Mentorship",
        href: "/mentorship",
        icon: <RiAccountPinBoxFill color="white" />,
      },
      {
        title: "Career Centre",
        href: "/career-centre",
        icon: <FaNetworkWired color="white" />,
      },
      {
        title: "Entrepreneurship",
        href: "/entrepreneurship",
        icon: <FaUserTie color="white" />,
      },
      {
        title: "Unlock Rewards",
        href: "/unlock-rewards",
        icon: <MdCelebration color="white" />,
      },
    ],
  },
  {
    category: "User Feedback & Interaction",
    modules: [
      { title: "Polls", href: "/polls", icon: <FaChartPie color="white" /> },
      {
        title: "Surveys",
        href: "/surveys",
        icon: <FaChartLine color="white" />,
      },
      {
        title: "Feedback",
        href: "/feedback",
        icon: <FaRegCommentAlt color="white" />,
      },
      { title: "FAQ", href: "/faq", icon: <FaQuestion color="white" /> },
    ],
  },
  {
    category: "News & Media",
    modules: [
      {
        title: "Newsletter",
        href: "/newsletter",
        icon: <FaNewspaper color="white" />,
      },
      { title: "News", href: "/news", icon: <IoNewspaper color="white" /> },
      { title: "Media", href: "/media", icon: <GoFileMedia color="white" /> },
    ],
  },
];

export function ThricoMenu({ showDrawer, onClose, open }) {
  return (
    <>
      <Drawer
        title="Alumni Menu"
        placement="right"
        onClose={onClose}
        open={open}
        width="100%"
      >
        <Content style={{ height: "100%", overflow: "auto", padding: "24px" }}>
          <Space
            direction="vertical"
            size="large"
            style={{ display: "flex", height: "100%" }}
          >
            <ScrollMenu>
              {MAIN_MODULES.map((module) => (
                <ModuleCard key={module.title} {...module} />
              ))}
            </ScrollMenu>

            {MODULE_CATEGORIES.map((category, index) => (
              <div key={index}>
                <Title level={4} style={{ marginBottom: "16px" }}>
                  {category.category}
                </Title>
                <ScrollMenu>
                  {category.modules.map((module) => (
                    <ListCard key={module.title} {...module} />
                  ))}
                </ScrollMenu>
              </div>
            ))}
          </Space>
        </Content>
      </Drawer>
    </>
  );
}

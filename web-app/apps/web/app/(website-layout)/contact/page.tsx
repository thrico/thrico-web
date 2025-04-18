"use client";
import React from "react";
import { Layout, Typography, Space, List, Divider } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const { Content } = Layout;
const { Title, Text, Link } = Typography;

const ContactPage: React.FC = () => {
  const headerStyle = {
    width: "100%",
    height: "300px",
    backgroundImage: 'url("/placeholder.svg?height=300&width=1200")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    marginBottom: "40px",
  };

  const addressData = [
    "Humphrey Booth House",
    "The University of Salford",
    "35-36 Crescent",
    "Salford",
    "M5 4PF",
  ];

  const emailData = [
    { label: "Alumni:", link: "alumni@salford.ac.uk" },
    { label: "Supporters:", link: "supporters@salford.ac.uk" },
  ];

  const socialData = [
    { icon: <FacebookOutlined />, name: "Facebook", link: "#" },
    { icon: <TwitterOutlined />, name: "Twitter", link: "#" },
    { icon: <LinkedinOutlined />, name: "LinkedIn", link: "#" },
  ];

  return <></>;
};

export default ContactPage;

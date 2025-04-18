import { Layout, Space, Typography, Divider, Flex, theme } from "antd";
import Image from "next/image";
import Link from "next/link";
import {
  FacebookOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import ThricoLogo from "@/components/svg/ThrcioLogo";

const { Footer } = Layout;
const { Text } = Typography;

export default function Fo() {
  const socialLinks = [
    { icon: <FacebookOutlined />, href: "#", label: "Facebook" },
    { icon: <LinkedinOutlined />, href: "#", label: "LinkedIn" },
    { icon: <YoutubeOutlined />, href: "#", label: "YouTube" },
    { icon: <InstagramOutlined />, href: "#", label: "Instagram" },
    { icon: <TwitterOutlined />, href: "#", label: "Twitter" },
  ];

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Flex
        style={{
          padding: "24px 48px",
          background: colorBgContainer,
          width: "100%",
        }}
        justify="space-between"
      >
        {/* Left Section */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Text type="secondary">Powered By</Text>
          <Link href="/">
            <ThricoLogo />
          </Link>
        </div>

        {/* Center Section */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Text>Copyright © 2024</Text>
          <Space split={<Divider type="vertical" />}>
            <Link href="/disclaimer" style={{ color: "rgba(0, 0, 0, 0.88)" }}>
              Disclaimer
            </Link>
            <Link href="/terms" style={{ color: "rgba(0, 0, 0, 0.88)" }}>
              Terms of Use
            </Link>
            <Link href="/privacy" style={{ color: "rgba(0, 0, 0, 0.88)" }}>
              Privacy Policy
            </Link>
          </Space>
        </div>

        {/* Right Section */}
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          {/* <Space size={16}>
            <Link
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/placeholder.svg"
                alt="Get it on Google Play"
                width={135}
                height={40}
                style={{ objectFit: "contain" }}
              />
            </Link>
            <Link
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/placeholder.svg"
                alt="Download on the App Store"
                width={120}
                height={40}
                style={{ objectFit: "contain" }}
              />
            </Link>
          </Space> */}
          <Space size={16}>
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#1677ff",
                  fontSize: "20px",
                  display: "flex",
                  alignItems: "center",
                }}
                aria-label={link.label}
              >
                {link.icon}
              </Link>
            ))}
          </Space>
        </div>
      </Flex>
    </>
  );
}

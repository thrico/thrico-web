"use client";
import React from "react";
import {
  Button,
  Card,
  Typography,
  Space,
  Avatar,
  Row,
  Col,
  Divider,
  Tag,
} from "antd";
import {
  EditOutlined,

  UserOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

import { useGetUser } from "@/graphql/actions";
import Cover from "./cover/Cover";
import Image from "next/image";
import NextImage from "../common/Image";
import EditProfile from "./edit/EditProfile";
import { getProfileInfo } from "@/graphql/actions/profile";
import ProfileImage from "./cover/ProfileImage";
import Paragraph from "antd/lib/typography/Paragraph";
import Education from "./education/Education";
import Experience from "./experience/Experience";

const { Title, Text, Link } = Typography;

export default function ProfilePage() {
  const {
    data: { getUser },
  } = useGetUser();
  const { data } = getProfileInfo();
  const { education, experience } = data?.getProfileInfo?.profile || {};
  return (
    <Row gutter={[24, 24]}>
      <Col span={16}>
        <Space
          direction="vertical"
          size="large"
          style={{ width: "100%", gap: 30 }}
        >
          <Card>
            <div
              style={{
                height: 250,
                background: "#f0f2f5",
                position: "relative",
                marginBottom: 60,
              }}
            >
              <NextImage
                src={
                  getUser?.cover
                    ? getUser?.cover
                    : "https://cdn.thrico.network/default_profile_cover.jpg"
                }
                layout="fill"
                objectFit="cover"
              />

              <Cover url={getUser?.cover} />

              <div style={{ position: "relative" }}>
                <Avatar
                  size={120}
                  src={`https://cdn.thrico.network/${getUser.avatar}`}
                  style={{
                    position: "absolute",
                    top: 180,
                    left: 24,
                    border: "4px solid #fff",
                  }}
                />
                <ProfileImage url={getUser.avatar} />
              </div>
            </div>

            <div style={{ padding: "0 24px 24px" }}>
              <Space
                align="center"
                style={{ width: "100%", justifyContent: "space-between" }}
              >
                <Space>
                  <Title level={2} style={{ marginBottom: 0 }}>
                    {getUser?.firstName} {getUser?.lastName}
                  </Title>
                </Space>
                <EditProfile />
              </Space>
              <Title level={5}>
                {data?.getProfileInfo?.user?.about?.headline}
              </Title>

              <div style={{ marginTop: 8 }}>
                <Text>
                  {data?.getProfileInfo?.user?.about?.currentPosition}{" "}
                </Text>
              </div>

              <Link style={{ marginTop: 8, display: "block" }}>
                500+ connections
              </Link>
              <Divider />
              <Space direction="vertical" style={{ marginTop: 20 }} align="end">
                <Space size="large">
                  <Link href="https://linkedin.com/in/yourprofile">
                    <LinkedinOutlined
                      style={{ fontSize: 24, color: "black" }}
                    />
                  </Link>
                  <Link href="https://instagram.com/yourusername">
                    <InstagramOutlined
                      style={{ fontSize: 24, color: "black" }}
                    />
                  </Link>
                  <Link href="https://yourportfolio.com">
                    <GlobalOutlined style={{ fontSize: 24, color: "black" }} />
                  </Link>
                </Space>
              </Space>
            </div>
          </Card>
        </Space>

        <Education education={education} />

        <Experience experience={experience} />

      </Col>

      <Col span={8}>
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <Card>
            <Space align="start" style={{ width: "100%" }}>
              <div>
                <Title level={4}>Profile language</Title>
                <Text>English</Text>
              </div>
              <Button type="text" icon={<EditOutlined />} />
            </Space>
          </Card>

          <Card>
            <Space align="start" style={{ width: "100%" }}>
              <div>
                <Title level={4}>Public profile & URL</Title>
                <Link>{window?.location?.hostname}/pankajverma04</Link>
              </div>
              <Button type="text" icon={<EditOutlined />} />
            </Space>
          </Card>

          <Card>
            <Tag
              color="blue"
              style={{ position: "absolute", right: 16, top: 16 }}
            >
              Promoted
            </Tag>
            <Space direction="vertical" size="middle">
              <Avatar size={64} icon={<UserOutlined />} />
              <Title level={4}>Tata Crucible</Title>
              <Text>Pankaj, you might like to follow Tata Crucible</Text>
              <Text type="secondary">
                Keep up with interesting, relevant updates
              </Text>
              <Space>
                <Avatar size="small" icon={<UserOutlined />} />
                <Text>Bhavesh also follows</Text>
              </Space>
              <Button type="primary" block>
                Follow
              </Button>
            </Space>
          </Card>
        </Space>
      </Col>



    </Row>
  );
}

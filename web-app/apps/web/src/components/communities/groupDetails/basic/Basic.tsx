import { Button, Card, Flex, Space, Typography, Avatar, Tooltip } from "antd";
import Image from "next/image";
import React from "react";
import { groupProps } from "../ts-type";
import {
  AntDesignOutlined,
  GlobalOutlined,
  LockOutlined,
  SendOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { joinGroup } from "@/graphql/actions/communities";
import Share from "../Share";
import Edit from "./Edit";
import EditCommunities from "../../add/Edit";

const Intro = ({ data, refresh }: groupProps) => {
  const isMember = data?.isGroupMember;
  const isAdmin = data?.isGroupAdmin;

  console.log(refresh);

  const [join, { loading }] = joinGroup({
    options: refresh,
  });

  return (
    <Card
      extra={
        isAdmin ? (
          <>
            <EditCommunities />
          </>
        ) : (
          ""
        )
      }
      style={{ width: "100%" }}
    >
      <div
        style={{
          width: "100%",
          height: "20rem",
          position: "relative",
        }}
      >
        <Image
          alt="cover"
          fill
          style={{
            objectFit: "cover",
          }}
          src={`https://cdn.thrico.network/${data?.cover}`}
        />
      </div>
      <Flex style={{ width: "100%" }} align="center">
        <Space style={{ width: "100%" }} direction="vertical">
          <Typography.Title style={{ marginTop: 20 }} level={3}>
            {data?.title}
          </Typography.Title>
          <Typography.Title level={5} style={{ textTransform: "capitalize" }}>
            {data?.privacy === "private" ? (
              <LockOutlined style={{ marginRight: 10 }} />
            ) : (
              <GlobalOutlined style={{ marginRight: 10 }} />
            )}
            {data?.privacy}
          </Typography.Title>
          <Typography.Paragraph style={{ width: "80%" }}>
            {data?.about}
          </Typography.Paragraph>
        </Space>
        <Space direction="vertical">
          {!isMember && (
            <>
              {data.isJoinRequest ? (
                <> </>
              ) : (
                <Button
                  type="primary"
                  icon={<SendOutlined />}
                  loading={loading}
                  onClick={() =>
                    join({
                      variables: {
                        input: {
                          group: data.id,
                        },
                      },
                    })
                  }
                >
                  Join
                </Button>
              )}
            </>
          )}
          {isMember && (
            <Button type="primary" icon={<SendOutlined />}>
              Invite
            </Button>
          )}
          <Share />
        </Space>
      </Flex>
      <Space>
        <Avatar.Group>
          <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
          <a href="https://ant.design">
            <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
          </a>
          <Tooltip title="Ant User" placement="top">
            <Avatar
              style={{ backgroundColor: "#87d068" }}
              icon={<UserOutlined />}
            />
          </Tooltip>
          <Avatar
            style={{ backgroundColor: "#1677ff" }}
            icon={<AntDesignOutlined />}
          />
        </Avatar.Group>
        {/* {data?.groupMember.map((set, key) => (
          <Avatar src={set?.user?.avatar}>{set?.user?.avatar}</Avatar>
        ))} */}
        {data?.groupMember.length} Member
      </Space>
    </Card>
  );
};

export default Intro;

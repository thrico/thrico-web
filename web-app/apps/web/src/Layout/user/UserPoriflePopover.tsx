import { startChat } from "@/graphql/actions/chat";
import { getUserDetails } from "@/graphql/actions/directory";
import {
  AntDesignOutlined,
  MessageOutlined,
  PlusCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Card,
  Divider,
  Skeleton,
  Space,
  Typography,
} from "antd";
import { redirect, useRouter } from "next/navigation";
import React from "react";

const UserProfilePopover = ({ id }) => {
  const router = useRouter();
  const { data, loading } = getUserDetails({
    variables: {
      input: { id },
    },
  });
  const onCompleted = (data) => {
    router.push(`message/${data.startChat.id}`);
  };
  const [start, { loading: chatLoading }] = startChat({
    onCompleted,
  });
  return (
    <>
      {loading && (
        <Card
          style={{ width: 300 }}
          actions={[
            <Space style={{ padding: 10 }} split={<Divider type="vertical" />}>
              <Skeleton.Button active={true} block={true} />
              <Skeleton.Button active={true} block={true} />
            </Space>,
          ]}
        >
          <Space style={{ gap: 20 }}>
            <Skeleton.Avatar size="large" active={true} />
            <Space direction="vertical">
              <Typography.Title level={4}>
                <Skeleton.Input active={true} />
              </Typography.Title>
              <Typography></Typography>
            </Space>
          </Space>
        </Card>
      )}

      {!loading && (
        <Card
          style={{ width: 300 }}
          actions={[
            <Space style={{ padding: 10 }} split={<Divider type="vertical" />}>
              {data?.getUserDetails?.myProfile ? (
                <Button icon={<UserOutlined />}>View Profile</Button>
              ) : (
                <Button
                  loading={chatLoading}
                  onClick={() =>
                    start({
                      variables: {
                        input: {
                          userID: data?.getUserDetails?.id,
                        },
                      },
                    })
                  }
                  icon={<MessageOutlined />}
                >
                  Message
                </Button>
              )}

              {!data?.getUserDetails?.myProfile && (
                <Button icon={<PlusCircleOutlined />} type="primary">
                  Follow
                </Button>
              )}
            </Space>,
          ]}
        >
          <Space style={{ gap: 20 }}>
            <Avatar
              size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
              src={data?.getUserDetails.avatar}
            />
            <Space direction="vertical">
              <Typography.Title level={4}>
                {data?.getUserDetails.firstName} {data?.getUserDetails.lastName}{" "}
              </Typography.Title>
              <Typography></Typography>
            </Space>
          </Space>
        </Card>
      )}
    </>
  );
};

export default UserProfilePopover;

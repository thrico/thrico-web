import {
  CheckCircleFilled,
  EllipsisOutlined,
  GlobalOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Space, theme, Typography } from "antd";
import React from "react";
import Description from "./Description";
import moment from "moment";
import UserAvatar from "@/components/avatar/Avatar";

const FeedInfo = ({ item, type }) => {
  const fullName = `${item?.user?.firstName}  ${item?.user?.lastName}`;
  const { Text } = Typography;
  const {
    token: { colorPrimary },
  } = theme.useToken();
  return (
    <>
      <Space
        align="start"
        style={{ width: "100%", justifyContent: "space-between" }}
      >
        <Space align="start" style={{ gap: 20 }}>
          <UserAvatar src={item?.user?.avatar} size={50} />
          <Space direction="vertical" size={0}>
            <Space size={4}>
              <Text strong>{fullName}</Text>
              <CheckCircleFilled style={{ color: "#1890ff" }} />
            </Space>
            <Space direction="vertical" size={4}>
              <Text type="secondary">{item?.user?.about?.currentPosition}</Text>
              <Text type="secondary">
                {moment(item?.createdAt).fromNow()}
                <span style={{ paddingLeft: 10 }}>
                  {item?.privacy === "CONNECTIONS" ? (
                    <LockOutlined style={{ color: colorPrimary }} />
                  ) : (
                    <GlobalOutlined style={{ color: colorPrimary }} />
                  )}
                </span>
              </Text>
            </Space>
          </Space>
        </Space>
        <Button type="text" icon={<EllipsisOutlined />} />
      </Space>

      <div style={{ marginTop: 10 }}>
        <Description text={item?.description} />
      </div>
    </>
  );
};

export default FeedInfo;

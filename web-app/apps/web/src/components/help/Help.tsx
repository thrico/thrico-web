"use client";
import React from "react";
import { Button, Card, List, Popover, Space, Tag, theme } from "antd";
import { FaRegCheckCircle, FaRegDotCircle } from "react-icons/fa";
import { CheckCircleOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { CiChat1 } from "react-icons/ci";
import Link from "next/link";

import UserPoriflePopover from "../Layout/user/UserPoriflePopover";
import Pagination from "../common/Pagination";
import moment from "moment";

const Help = ({ totalRecords, loading, data }) => {
  const {
    token: { colorPrimary },
  } = theme.useToken();
  return (
    <>
      <Card
        title="👋 Want to contribute"
        extra={
          <>
            <Button href="/help/issue" type="primary">
              Create
            </Button>
          </>
        }
        style={{ width: "100%", marginTop: 20 }}
      >
        <List
          loading={loading}
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item
              extra={
                <>
                  <Space>
                    <CiChat1 style={{ fontSize: 20 }} /> 2
                  </Space>
                </>
              }
            >
              <List.Item.Meta
                avatar={
                  <>
                    {!item?.status ? (
                      <Tag
                        style={{ backgroundColor: "green", color: "white" }}
                        color="green"
                        icon={<CheckCircleOutlined />}
                      >
                        Close
                      </Tag>
                    ) : (
                      <Tag color={colorPrimary} icon={<ClockCircleOutlined />}>
                        Open
                      </Tag>
                    )}
                  </>
                }
                title={
                  <Space>
                    <Link href={`help/${item?.ticket}`}>{item?.title}</Link>

                    {item?.type.toLowerCase() === "bug" && (
                      <Tag color="red">Bug</Tag>
                    )}
                    {item?.type === "Typo or mistake" && (
                      <Tag color="red">Bug</Tag>
                    )}
                    {item?.type === "Suggestions" && (
                      <Tag color="purple">Suggestion</Tag>
                    )}
                  </Space>
                }
                description={
                  <>
                    <Space>
                      #{item.ticket} opened {moment(item.createdAt).fromNow()}
                      by
                      <Popover
                        content={<UserPoriflePopover id={item?.user?.id} />}
                      >
                        {item.user.firstName} {item.user.lastName}
                      </Popover>
                    </Space>
                  </>
                }
              />
            </List.Item>
          )}
        />
        <Pagination totalRecords={totalRecords} />
      </Card>
    </>
  );
};

export default Help;

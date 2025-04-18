import {
  HeartOutlined,
  LikeOutlined,
  MessageOutlined,
  StarOutlined,
  TagsOutlined,
  UserOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import React from "react";
import { Avatar, Flex, List, Space, Tag, Typography } from "antd";

import { Card } from "antd";
import Link from "next/link";
import { AllEvents } from "../type";
import { BiLocationPlus } from "react-icons/bi";
import WishListSvg from "../../../svg/WishListSvg";

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const GirdView = ({ data, loading }: AllEvents) => (
  <List
    grid={{
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 2,
      lg: 3,
      xl: 3,
      xxl: 3,
    }}
    loading={loading}
    pagination={{
      pageSize: 9,
    }}
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item>
        <Card
          extra={<WishListSvg />}
          actions={[
            <IconText
              icon={BiLocationPlus}
              text={item?.location}
              key="list-vertical-star-o"
            />,
            <IconText
              icon={UsergroupAddOutlined}
              text="Applicant 20"
              key="list-vertical-like-o"
            />,
          ]}
          title={
            <>
              <List.Item.Meta title={item?.company} />
            </>
          }
        >
          <Space direction="vertical">
            <Link href={`/jobs/${item?.slug}?value=${item?.jobTitle}`}>
              <Typography.Title level={5}>
                {" "}
                {item?.jobTitle} (
                <span style={{ textTransform: "capitalize" }}>
                  {item?.workplaceType}
                </span>
                )
              </Typography.Title>
            </Link>

            <Space>
              <Tag color="green">
                <span style={{ textTransform: "uppercase" }}>
                  {item?.jobType}
                </span>
              </Tag>
              <Typography>Salary: {item?.salary}</Typography>
            </Space>
          </Space>
        </Card>
      </List.Item>
    )}
  />
);

export default GirdView;

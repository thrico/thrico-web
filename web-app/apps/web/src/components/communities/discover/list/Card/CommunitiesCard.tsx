import React from "react";

import { EyeOutlined, UserOutlined } from "@ant-design/icons";
import GroupType from "./GroupType";
// import IsFeatured from "../../../../Layout/IsFeatured";
// import IsTrending from "../../../../Layout/IsTrending";
import { Avatar, Card, Col, Flex, List, Row, Space, Typography } from "antd";

import NextImage from "@/components/common/Image";

import CTA from "./CTA";
import { GroupDetails } from "../ts-types";

import People from "./People";

// import { wishListCommunity } from "@/graphql/actions/communities";

import {
  StarOutlined,

  MoreOutlined,

  MessageOutlined,
} from "@ant-design/icons";
import { IoMdTrendingUp } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { MdMoreVert } from "react-icons/md";
const CommunitiesCard = ({
  item,
  index,
}: {
  item: GroupDetails;
  index: number;
  view: string | null;
}) => {
  // const { Text } = Typography;
  // const [wishlist] = wishListCommunity({});
  const groupType = <GroupType groupType={item?.groupSettings?.privacy} />;

  // const demoGraphics = (
  //   <>
  //     {item?.isFeatured && <IsFeatured />}
  //     {item?.isTrending && <IsTrending />}
  //   </>
  // );
  const { Title, Paragraph } = Typography;
  const btn = <CTA id={item?.id} status={item?.status} />;

  // const para = (
  //   <Paragraph
  //     style={{ height: 80 }}
  //     ellipsis={{
  //       rows: 4,
  //       expandable: true,
  //       symbol: "more",
  //       onEllipsis: (ellipsis) => {},
  //     }}
  //   >
  //     {item?.about}
  //   </Paragraph>
  // );
  const cover = <NextImage src={item?.group.cover} />;

  return (
    <>
      <List.Item key={index}>
        <Card actions={[
          <Space key="user">
            <UserOutlined />
            <Typography.Text>{item?.group.numberOfViews}</Typography.Text>
          </Space>,
          <Space key={"post"}>
            <MessageOutlined />
            <Typography.Text>{item?.group.numberOfPost}</Typography.Text>
          </Space>,
          <Space key="views">
            <EyeOutlined />
            <Typography.Text>{item?.group?.numberOfViews}</Typography.Text>
          </Space>

        ]} cover={
          <div style={{ position: "relative", height: 200 }}>
            {cover}
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                display: "flex",
                gap: 8,
                width: "100%",
                justifyContent: "center",


              }}
            >
              <Flex style={{
                marginLeft: 10,
                marginRight: 10,
                width: "90%",
                marginTop: 10,
                justifyContent: "space-between"
              }}>
                <Space>
                  <Avatar
                    icon={groupType}
                    style={{ backgroundColor: "white", color: "#1890ff" }}
                  />
                  <Avatar
                    icon={<StarOutlined />}
                    style={{ backgroundColor: "white", color: "#1890ff" }}
                  />
                  <Avatar
                    icon={<IoMdTrendingUp style={{ fontSize: 18 }} />}
                    style={{ backgroundColor: "white", color: "#1890ff" }}
                  />
                </Space>
                <Space>
                  <Avatar
                    icon={<MdMoreVert size={22} />}
                    style={{ backgroundColor: "white", color: "#757575" }}
                  />
                </Space>
              </Flex>

            </div>
          </div>

        } style={{ width: "100%", borderRadius: 8, overflow: "hidden" }}>


          <div style={{ padding: "20x" }}>

            <List.Item.Meta

              title={<Title level={4} style={{ marginBottom: 8 }}>
                Tech Source Club Tech Sousdddddsdsds
              </Title>}
              description={<Paragraph type="secondary" style={{ marginBottom: 16 }}>
                A community for tech lovers to explore, learn, and connect.
              </Paragraph>}
            />



            <Row align="middle" style={{ marginBottom: 16 }}>
              <Col style={{ width: 20 }}>
                <Avatar size={22} src="/placeholder.svg?height=32&width=32" />
              </Col>
              <Col flex="auto" style={{ marginLeft: 8 }}>
                <Typography.Text>Created by </Typography.Text>
                <Typography.Text type="secondary">Harshita</Typography.Text>
              </Col>
            </Row>

            <Row align="middle" style={{ marginBottom: 16 }}>
              <Col style={{ width: 20 }}>
                <SlCalender size={18} />
              </Col>
              <Col flex="auto" style={{ marginLeft: 8 }}>
                <Typography.Text type="secondary">
                  Created on 04 Jan, 2024
                </Typography.Text>
              </Col>
            </Row>

            <Row align="middle" >
              <Space size={4}>
                <People id={item.id} />
              </Space>
              <Col flex="auto" />
              <Col>{btn}</Col>
            </Row>


          </div>
        </Card>
      </List.Item>
    </>
  );
};

export default CommunitiesCard;

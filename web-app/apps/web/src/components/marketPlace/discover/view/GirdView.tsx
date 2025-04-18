import {
  ClockCircleOutlined,
  HeartOutlined,
  LikeOutlined,
  MessageOutlined,
  StarOutlined,
  TagsOutlined,
  UserOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import React from "react";
import {
  Avatar,
  Button,
  Carousel,
  Flex,
  Image,
  List,
  Skeleton,
  Space,
  Tag,
  Typography,
} from "antd";

import { Card } from "antd";
import Link from "next/link";
import { AllEvents } from "../type";
import { BiLocationPlus } from "react-icons/bi";
import WishListSvg from "../../../svg/WishListSvg";
import moment from "moment";
import { contactMarketPlace } from "@/graphql/actions/marketPlace";
import { useRouter } from "next/navigation";

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const GirdView = ({ data, loading }: AllEvents) => {
  const router = useRouter();
  const onCompleted = (data) => {
    router.push(`message/${data.contactMarketPlace.id}`);
  };
  const [contact, { loading: btnLoading }] = contactMarketPlace({
    onCompleted,
  });
  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 2,
        lg: 2,
        xl: 2,
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
                icon={ClockCircleOutlined}
                text={moment(item?.createdAt).format("MMMM Do YYYY, h:mm")}
                key="list-vertical-star-o"
              />,
              <IconText
                icon={ClockCircleOutlined}
                text={
                  <span style={{ textTransform: "capitalize" }}>
                    {item?.condition}
                  </span>
                }
                key="list-vertical-star-o"
              />,
            ]}
            title={
              <>
                <List.Item.Meta title={item?.location} />
              </>
            }
          >
            {item.images.length === 0 && (
              <Space style={{ width: "100%", height: 150 }}>
                <Skeleton.Image style={{ width: "18vw", height: 150 }} />
              </Space>
            )}
            <Carousel>
              {item.images.map((set) => (
                <div>
                  <div
                    style={{
                      margin: 0,
                      height: 150,
                      color: "#fff",
                      lineHeight: "160px",
                      textAlign: "center",
                    }}
                  >
                    <Image
                      alt="logo"
                      src={`https://cdn.thrico.network/${set?.url}`}
                      preview={false}
                      style={{
                        objectFit: "cover",
                        height: "100%",
                        width: "100%",
                      }}
                    />
                  </div>
                </div>
              ))}
            </Carousel>
            <List.Item.Meta
              style={{ marginTop: 20 }}
              title={<a href="https://ant.design">{item.title}</a>}
              description={` ${item.currency}  ${item.price}`}
            />

            <Button
              onClick={() =>
                contact({
                  variables: {
                    input: {
                      listingId: item?.id,
                      userId: item?.postedBy?.alumni?.id,
                    },
                  },
                })
              }
              loading={btnLoading}
              type="primary"
            >
              Message
            </Button>
          </Card>
        </List.Item>
      )}
    />
  );
};

export default GirdView;

import { likeFeed } from "@/graphql/actions/communities";
import { wishListFeed } from "@/graphql/actions/feed";
import {
  BookFilled,
  BookOutlined,
  HeartOutlined,
  MessageOutlined,
  RetweetOutlined,
} from "@ant-design/icons";
import { Button, Space } from "antd";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const FeedAction = ({ item, wishlistUpdate, likeUpdate, type }) => {
  const [value, setValue] = useState();
  useEffect(() => {
    setValue(item);
  }, [item]);
  console.log(item);

  const [like] = likeFeed({});
  const [wishlist] = wishListFeed({});
  return (
    <Space style={{ width: "100%", justifyContent: "space-between" }}>
      <Space>
        <Button
          onClick={() => {
            likeUpdate();

            like({
              variables: {
                input: { id: item.id },
              },
            });
          }}
          type="text"
          icon={<HeartOutlined style={{ fontSize: 20 }} />}
        >
          {value?.totalReactions}
        </Button>
        <Button type="text" icon={<MessageOutlined style={{ fontSize: 18 }} />}>
          {value?.totalComment}
        </Button>
        <Button type="text" icon={<RetweetOutlined style={{ fontSize: 20 }} />}>
          0
        </Button>
      </Space>
      <Button
        type="text"
        onClick={() => {
          wishlistUpdate();
          wishlist({
            variables: {
              input: { id: item.id },
            },
          });
        }}
        icon={
          value?.isWishList ? (
            <BookFilled style={{ fontSize: 20, color: "red" }} />
          ) : (
            <BookOutlined style={{ fontSize: 20 }} />
          )
        }
      />
    </Space>
  );
};

export default FeedAction;

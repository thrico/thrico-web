"use client";

import { useRef } from "react";
import { Card, Input, Button, Space, Avatar, Divider, Typography } from "antd";
import {
  FileImageOutlined,
  BarChartOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { useGetUser } from "@/graphql/actions";
import { useState } from "react";
import PostModal from "./PostModal";
import { addFeed } from "@/graphql/actions/feed";
import { UploadFile } from "antd/lib";

enum feedType {
  feed = "feed",
  communities = "communities",
}
interface props {
  add: any;
  loading: false;
  type: feedType;
}

export default function FeedCreator({ add, loading, type, onCompleted }) {
  const ref = useRef(null);

  const { data } = useGetUser();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClose = () => {
    setIsModalOpen(false);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleAddFeed = async (feedData: any) => {
    try {
      await add(feedData); // Execute the add feed function passed as a prop
      // Once the feed is successfully added, call the onCompleted function
      onCompleted(handleClose); // close the modal after success
    } catch (error) {
      console.error("Error adding feed:", error);
    }
  };

  return (
    <>
      <Card
        onClick={showModal}
        style={{ margin: 10, cursor: "pointer" }}
        ref={ref}
      >
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <Space style={{ width: "100%" }}>
            <Avatar
              src={`https://cdn.thrico.network/${data?.getUser?.avatar}`}
              size={40}
            />
            <Typography.Text type="secondary">
              Where you at? What are you doing? What`s your number? Share it!
            </Typography.Text>
          </Space>

          <>
            <Divider style={{ margin: "12px 0" }} />
            <Space style={{ width: "100%", justifyContent: "space-between" }}>
              <Space size="large">
                <Button type="dashed" icon={<EditOutlined />}>
                  Post
                </Button>
                <Button type="dashed" icon={<FileImageOutlined />}>
                  Photo/Video Album
                </Button>
                <Button type="dashed" icon={<BarChartOutlined />}>
                  Poll
                </Button>
              </Space>
            </Space>
          </>
        </Space>
      </Card>
      {
        <PostModal
          add={handleAddFeed}
          loading={loading}
          isModalOpen={isModalOpen}
          handleClose={handleClose}
        />
      }
    </>
  );
}

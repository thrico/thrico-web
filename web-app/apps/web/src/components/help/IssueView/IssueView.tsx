"use client";

import {
  Button,
  Card,
  Divider,
  Form,
  List,
  Popover,
  Space,
  Tooltip,
  Typography,
} from "antd";
import React from "react";
import { Comment } from "@ant-design/compatible";
import { FaRegDotCircle } from "react-icons/fa";

import TextArea from "antd/es/input/TextArea";
import Search from "../search/Search";
import moment from "moment";
import AddComment from "./AddComment";
import { getIssueComment } from "@/graphql/actions/issues";
import CommentList from "./CommentList";
import UserProfilePopover from "../../Layout/user/UserPoriflePopover";

const IssueView: React.FC = ({ data }) => {
  const { data: comment, loading: loadComment } = getIssueComment({
    variables: {
      input: {
        id: data.id,
      },
    },
  });

  const newData = comment?.getIssueComment.map((set) => ({
    author: (
      <a>
        <Popover content={<UserProfilePopover id={set?.user?.alumni?.id} />}>
          {set?.user?.alumni?.firstName} {set?.user.alumni?.lastName}
        </Popover>
      </a>
    ),
    avatar: set?.user?.alumni?.avatar,
    content: <p dangerouslySetInnerHTML={{ __html: set?.content }}></p>,
    datetime: moment(set?.createdAt).fromNow(),
  }));
  return (
    <>
      <Space style={{ width: "100%", marginTop: 30 }} direction="vertical">
        <Typography.Title level={3}>{data?.title}</Typography.Title>

        <Space>
          <Button type="primary" icon={<FaRegDotCircle />}>
            Open
          </Button>
          <Space split={<Divider type="vertical" />}>
            <span>
              opened this issue on {moment(data.createdAt).fromNow()}{" "}
            </span>
            <span> {data.length} Comments</span>
          </Space>
        </Space>
        <Divider />
        <Card>
          <Typography
            className="issue-discussion"
            style={{ width: "100%" }}
            dangerouslySetInnerHTML={{ __html: data.details }}
          ></Typography>
          <CommentList comments={newData} loading={loadComment} />
          <AddComment id={data.id} />
        </Card>
      </Space>
    </>
  );
};

export default IssueView;

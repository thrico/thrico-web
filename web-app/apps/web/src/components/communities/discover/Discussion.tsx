"use client";

import React from "react";

import { List } from "antd";

import { getGroupFeedByUser } from "@/graphql/actions/feed";
import FeedCard from "@/components/common/feed/FeedCard";
import DiscussionLoading from "../../common/loading/DiscussionLoading";
const Discussion = ({}) => {
  const { data, loading, error } = getGroupFeedByUser();

  return (
    <>
      {loading && <DiscussionLoading />}
      {!loading && (
        <List
          locale={{
            emptyText: "No Feed Found",
          }}
          style={{ width: "100%" }}
          className="demo-loadmore-list"
          loading={loading}
          itemLayout="horizontal"
          dataSource={data?.getGroupFeedByUser}
          renderItem={(item) => <FeedCard groupId={id} set={item} />}
        />
      )}
    </>
  );
};

export default Discussion;

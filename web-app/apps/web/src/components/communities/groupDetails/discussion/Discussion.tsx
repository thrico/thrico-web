import React from "react";
import Feed from "../CreateFeed/Feed";
import { getGroupFeed } from "../../../../graphql/actions/communities";

import FeedCard from "../../../common/feed/FeedCard";
import { List, Space } from "antd";
const Discussion = ({ id, isGroupMember }) => {
  const { data, loading, error } = getGroupFeed({
    variables: {
      input: {
        id: id,
      },
    },
  });

  return (
    <Space style={{ width: "100%" }} direction="vertical">
      {isGroupMember && <Feed id={id} />}
      <List
        style={{ width: "100%" }}
        className="demo-loadmore-list"
        loading={loading}
        itemLayout="horizontal"
        dataSource={data?.getGroupFeed}
        renderItem={(item) => <FeedCard groupId={id} set={item} />}
      />
    </Space>
  );
};

export default Discussion;

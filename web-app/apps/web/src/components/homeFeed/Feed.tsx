import React from "react";

import { List, Segmented } from "antd";

import { getFeed } from "../../graphql/actions/feed";

import { UsergroupAddOutlined } from "@ant-design/icons";
import { FaAward, FaMagic } from "react-icons/fa";

import Feed from "../feed/FeedCard/Feed";
const Discussion = ({}) => {
  const { data, loading } = getFeed();

  return (
    <>
      <Segmented
        style={{ margin: 30, borderRadius: 10 }}
        size="large"
        options={[
          {
            label: "Discover",
            value: "Discover",
            icon: <FaMagic />,
          },
          {
            label: "Communities",
            value: "Communities",
            icon: <UsergroupAddOutlined />,
          },
          {
            label: "Jobs",
            value: "Jobs",
            icon: <FaAward />,
          },
        ]}
      />

      <List
        loading={loading}
        dataSource={data?.getFeed}
        renderItem={(item) => <Feed item={item} />}
      />
    </>
  );
};

export default Discussion;

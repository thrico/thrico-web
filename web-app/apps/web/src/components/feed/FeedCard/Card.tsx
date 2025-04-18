import React from "react";

import { Card, Space, Divider } from "antd";

import FeedInfo from "./FeedInfo";
import FeedAction from "./FeedAction";

const FeedCard = (props) => {
  return (
    <Card style={{ margin: 10 }}>
      <Space direction="vertical" size="middle" style={{ width: "100%" }}>
        <FeedInfo {...props} />

        <Divider style={{ margin: "5px 0" }} />

        <FeedAction {...props} />
      </Space>
    </Card>
  );
};

export default FeedCard;

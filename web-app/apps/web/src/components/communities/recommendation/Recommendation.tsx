import { getGroupsRecommendation } from "@/graphql/actions/communities";
import { Card, Space } from "antd";
import React from "react";
import GirdView from "../discover/list/gird/GirdView";
import View from "../discover/list/CommunitiesCard";

const Recommendation = () => {
  const { data, loading } = getGroupsRecommendation({});
  return (
    <Card loading={loading} title="Recommendation">
      <Space direction="vertical">
        {data?.getGroupsRecommendation.map((set, index) => (
          <Space style={{ width: 250 }}>
            <View item={set} index={index} />
          </Space>
        ))}
      </Space>
    </Card>
  );
};

export default Recommendation;

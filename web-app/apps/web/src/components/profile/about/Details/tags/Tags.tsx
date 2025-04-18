import { StarOutlined } from "@ant-design/icons";
import EditButton from "@repo/ui/EditButton";
import { Card, Space, Tag, Typography, theme } from "antd";
import React from "react";
import EditTags from "./EditTags";
import { getProfileTag } from "@/graphql/actions/profile";

const Tags = () => {
  const {
    token: { colorPrimary },
  } = theme.useToken();
  const { data, loading } = getProfileTag();
  return (
    <Card
      title="Interests and tags"
      extra={!loading && <EditTags data={data?.getProfileTag} />}
      style={{ width: "100%" }}
      loading={loading}
    >
      <Space wrap>
        {data?.getProfileTag?.map((set) => (
          <Tag color={colorPrimary}>{set}</Tag>
        ))}
      </Space>
    </Card>
  );
};

export default Tags;

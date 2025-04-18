import { StarOutlined } from "@ant-design/icons";
import EditButton from "@repo/ui/EditButton";
import { Card, Space, Tag, Typography, theme } from "antd";
import React from "react";

const Skills = () => {
  const {
    token: { colorBgContainer, borderRadiusLG, colorPrimary },
  } = theme.useToken();
  return (
    <Card title="Skills" extra={<EditButton />} style={{ width: "100%" }}>
      <Space wrap>
        {[1, , 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, , 2].map((set) => (
          <Tag
            color={colorPrimary}
            icon={<StarOutlined twoToneColor={colorPrimary} />}
          >
            Skill Name
          </Tag>
        ))}
      </Space>
    </Card>
  );
};

export default Skills;

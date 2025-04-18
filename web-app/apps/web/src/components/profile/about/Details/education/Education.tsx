import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Card,
  Flex,
  List,
  Popconfirm,
  Space,
  Typography,
  message,
} from "antd";
import { education } from "../types";
import EditButton from "@repo/ui/EditButton";

interface props {
  education: education[];
}

const Education = ({ education }: props) => {
  const [open, setOpen] = useState<String>("");

  const cancel = () => {
    setOpen("");
  };

  return (
    <Card title="Education" extra={<EditButton />} style={{ width: "100%" }}>
      <List
        className="demo-loadmore-list"
        style={{ width: "100%" }}
        itemLayout="horizontal"
        dataSource={education}
        locale={{
          emptyText: "No Education Details Found",
        }}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={
                <>
                  <Typography.Text>{item.degree}</Typography.Text>
                  <br />
                  <Typography.Paragraph>{item.school}</Typography.Paragraph>
                </>
              }
              description={
                <>
                  Apr 2022 - Present · 1 yr 11 <br />
                  mos
                </>
              }
            />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default Education;

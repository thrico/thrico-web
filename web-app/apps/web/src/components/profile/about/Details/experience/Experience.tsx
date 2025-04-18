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

import EditButton from "@repo/ui/EditButton";

import DeleteButton from "@repo/ui/DeleteButton";
import { experience } from "../types";
interface props {
  experience: experience[];
}

const Experience = ({ experience }: props) => {
  const [open, setOpen] = useState<String>("");

  const cancel = () => {
    setOpen("");
  };

  return (
    <Card extra={<EditButton />} title="Experience" style={{ width: "100%" }}>
      <List
        className="demo-loadmore-list"
        style={{ width: "100%" }}
        itemLayout="horizontal"
        dataSource={experience}
        locale={{
          emptyText: "No Experience Details Found",
        }}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={
                <>
                  <Typography.Text>{item.title}</Typography.Text>
                  <br />
                  <Typography.Paragraph>
                    {item.companyName} · {item.employmentType}
                  </Typography.Paragraph>
                </>
              }
              description={
                <>
                  Apr 2022 - Present · 1 yr 11 <br />
                  mos {item.location} · {item.locationType}
                </>
              }
            />
            {}
          </List.Item>
        )}
      />
    </Card>
  );
};

export default Experience;

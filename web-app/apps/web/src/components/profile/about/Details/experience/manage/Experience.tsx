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
import AddExperience from "./add/AddExperience";
import { experience, experienceProps } from "../../types";
import EditButton from "@repo/ui/EditButton";

import DeleteButton from "@repo/ui/DeleteButton";
import EditExperience from "./edit/EditExperience";

const Experience = ({}) => {
  const [experience, setExperience] = useState<experience[]>([]);
  const addExperience = (data: experience) => {
    setExperience([data, ...experience]);
  };

  const [open, setOpen] = useState<String>("");

  const cancel = () => {
    setOpen("");
  };

  return (
    <Card
      title="Experience"
      extra={<AddExperience addExperience={addExperience} />}
      style={{ width: "100%" }}
    >
      <List
        className="demo-loadmore-list"
        style={{ width: "100%" }}
        itemLayout="horizontal"
        dataSource={experience}
        locale={{
          emptyText: "No  Details Found",
        }}
        renderItem={(item) => (
          <List.Item
            actions={[
              <EditExperience
                setExperience={setExperience}
                item={item}
                experience={experience}
              />,

              <Popconfirm
                open={open === item.id}
                title="Delete the Experience"
                description="Are you sure to delete this Experience?"
                onConfirm={() => {
                  const filter = experience.filter((t) => t.id !== open);
                  setExperience(filter);
                }}
                onCancel={cancel}
                okText="Yes"
                cancelText="No"
              >
                <Space onClick={() => setOpen(item.id)}>
                  <DeleteButton />
                </Space>
              </Popconfirm>,
            ]}
          >
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

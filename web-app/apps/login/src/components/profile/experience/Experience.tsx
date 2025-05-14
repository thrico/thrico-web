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
import AddExperience from "./AddExperience";

import EditExperience from "./EditExperience";
import moment from "moment";
import { experience, experienceProps, location } from "@/lib/types";

const Experience = ({
  setExperience,
  experience,
  setCurrent,
}: experienceProps) => {
  const addExperience = (data: experience) => {
    setExperience([data, ...experience]);
  };

  const [open, setOpen] = useState<String>("");

  const cancel = () => {
    setOpen("");
  };

  return (
    <Space style={{ width: "100%" }} direction="vertical">
      <Card
        title="Experience"
        extra={<AddExperience addExperience={addExperience} />}
        style={{ width: "100%", margin: 10 }}
      >
        <List
          className="demo-loadmore-list"
          style={{ width: "100%" }}
          itemLayout="horizontal"
          dataSource={experience as experience[]}
          renderItem={(item: experience, key) => (
            <List.Item
              actions={[
                <EditExperience
                  key={key}
                  setExperience={setExperience}
                  item={item}
                  experience={experience}
                />,

                <Popconfirm
                  key={key}
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
                  <Space onClick={() => setOpen(item.id)}>Delete</Space>
                </Popconfirm>,
              ]}
            >
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={`https://cdn.thrico.network/${item?.company?.logo}`}
                  />
                }
                title={
                  <>
                    <Typography.Text>{item.title}</Typography.Text>
                    <br />
                    <Typography.Paragraph>
                      {item?.company?.name} · {item.employmentType}
                    </Typography.Paragraph>
                  </>
                }
                description={
                  <>
                    <>
                      {item?.currentlyWorking ? (
                        <>
                          {moment(item?.startDate)?.format("ll")} -{" "}
                          {moment().format("ll")}
                        </>
                      ) : (
                        <>
                          {moment(item?.duration[0])?.format("ll")} -{" "}
                          {moment(item?.duration[1]).format("ll")}
                        </>
                      )}

                      <br />
                      {item?.currentlyWorking ? (
                        <Typography.Text type="secondary">
                          {moment().diff(
                            moment(item?.startDate),
                            "years"
                          ) > 0 &&
                            `${moment().diff(moment(item?.startDate), "years")} years`}
                          {moment().diff(
                            moment(item?.startDate),
                            "months"
                          ) %
                            12 >
                            0 &&
                            ` ${moment().diff(moment(item?.startDate), "months") % 12} months`}
                        </Typography.Text>
                      ) : (
                        <Typography.Text type="secondary">
                          {moment(item?.duration[1]).diff(
                            moment(item?.duration[0]),
                            "years"
                          ) > 0 &&
                            `${moment(item?.duration[1]).diff(moment(item?.duration[0]), "years")} years`}
                          {moment(item?.duration[1]).diff(
                            moment(item?.duration[0]),
                            "months"
                          ) %
                            12 >
                            0 &&
                            ` ${moment(item?.duration[1]).diff(moment(item?.duration[0]), "months") % 12} months`}
                        </Typography.Text>
                      )}
                    </>
                  </>
                }
              />
              { }
            </List.Item>
          )}
        />
      </Card>
      <Flex style={{ width: "100%" }} align="center" justify="center">
        <Space>
          <Button onClick={() => setCurrent(1)}>Previous</Button>
          <Button onClick={() => setCurrent(3)} type="primary">
            Next
          </Button>
        </Space>
      </Flex>
    </Space>
  );
};

export default Experience;

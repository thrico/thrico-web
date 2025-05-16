import React, { useState } from "react";
import { Avatar, Card, List, Space, Typography } from "antd";
import moment from "moment";
import { educationProps } from "@/lib/types";

const Education = ({ education }: educationProps) => {
  // const addEducation = (data: education) => {
  //   setEducation([data, ...education]);
  // };

  const [open, setOpen] = useState<string>("");

  const cancel = () => {
    setOpen("");
  };

  return (
    <Space style={{ width: "100%" }} direction="vertical">
      <Card
        title="Education"
        // extra={<AddEducation addEducation={addEducation} />}
        style={{ width: "100%", margin: 10 }}
      >
        <List
          className="demo-loadmore-list"
          style={{ width: "100%" }}
          itemLayout="horizontal"
          dataSource={education}
          renderItem={(item, key) => (
            <List.Item
              key={item.id}
              // actions={[
              //   <EditEducation
              //     key={key}
              //     setEducation={setEducation}
              //     item={item}
              //     education={education}
              //   />,

              //   <Popconfirm
              //     key={key}
              //     open={open === item.id}
              //     title="Delete the Education"
              //     description="Are you sure to delete this Education?"
              //     onConfirm={() => {
              //       const filter = education.filter((t) => t.id !== open);
              //       setEducation(filter);
              //     }}
              //     onCancel={cancel}
              //     okText="Yes"
              //     cancelText="No"
              //   >
              //     <Space onClick={() => setOpen(item.id)}>Delete</Space>
              //   </Popconfirm>,
              // ]}
            >
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={`https://cdn.thrico.network/${item?.school?.logo}`}
                  />
                }
                title={
                  <>
                    <Typography.Text>{item.degree}</Typography.Text>
                    <br />
                    <Typography.Paragraph>
                      {item.school.name}
                    </Typography.Paragraph>
                  </>
                }
                description={
                  <>
                    {moment(item?.duration[0])?.format("ll")} -{" "}
                    {moment(item?.duration[1]).format("ll")}
                    <br />
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
                  </>
                }
              />
              {}
            </List.Item>
          )}
        />
      </Card>
    </Space>
  );
};

export default Education;

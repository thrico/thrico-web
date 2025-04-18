import React, { useState } from "react";
import { Avatar, Button, Card, List, Space, Tag } from "antd";
import Currency from "../../../common/currency/Currency";
import Actions from "./Action";
import Testimonials from "../callDetails/Testimonials";
import { PauseCircleOutlined } from "@ant-design/icons";

const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
];

const Requested = () => {
  const [openTestimonialDrawer, setTestimonialDrawer] = useState(false);
  const showTestimonialDrawer = () => {
    setTestimonialDrawer(true);
  };

  const onCloseTestimonialDrawer = () => {
    setTestimonialDrawer(false);
  };

  return (
    <>
      <List
        grid={{
          gutter: 3,
          xs: 1,
          sm: 2,
          md: 2,
          lg: 2,
          xl: 2,
          xxl: 3,
        }}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <Card
            actions={[
              <Actions />,
              <Button type="dashed" icon={<PauseCircleOutlined />}>
                Pending
              </Button>,
            ]}
            title="Sat, 11 May 09:00 - 09:15 AM (GMT+5:30)"
            style={{ margin: 10 }}
            extra={
              <Space>
                <Tag color="yellow">Pending</Tag>
              </Space>
            }
          >
            <List.Item>
              <List.Item.Meta
                title={"Pankaj Verma"}
                description="Discovery Call(15 mins)"
              />
              <Currency /> 20
            </List.Item>
          </Card>
        )}
      />
      <Testimonials
        onClose={onCloseTestimonialDrawer}
        open={openTestimonialDrawer}
      />
    </>
  );
};

export default Requested;

"use client";
import React from "react";
import { Card, List } from "antd";
import { data } from "./list";

const Issue = () => (
  <Card style={{ width: "70%" }}>
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item, index) => (
        <List.Item actions={[<>{item.button}</>]}>
          <List.Item.Meta
            avatar={item?.svg}
            title={<a href="https://ant.design">{item.title}</a>}
            description={item?.description}
          />
        </List.Item>
      )}
    />
  </Card>
);

export default Issue;

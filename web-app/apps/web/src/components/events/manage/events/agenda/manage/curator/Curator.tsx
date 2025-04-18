"use client";
import React, { useState } from "react";
import { Alert, Card, Form, Space, Switch, Table, Tag } from "antd";
import type { TableProps } from "antd";

import Delete from "./Delete";
import moment from "moment";
import AddButton from "@repo/ui/AddButton";
import Add from "./Add";
import Edit from "./Edit";

interface DataType {
  key: string;
  name: string;

  age: number;
  address: string;
  tags: string[];
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Type",
    dataIndex: "sponsorType",
    key: "name",
    render: (text) => <>{text}</>,
  },

  {
    title: "Created At",
    dataIndex: "createdAt",
    key: "name",
    render: (props) => <>{moment(props).format("MMMM Do YYYY, h:mm:ss a")}</>,
  },
  {
    title: "Updated At",
    dataIndex: "updatedAt",
    key: "name",
    render: (props) => <>{moment(props).format("MMMM Do YYYY, h:mm:ss a")}</>,
  },
  {
    title: "Action",
    key: "action",
    dataIndex: "id",
    render: (props, record) => (
      <Space size="middle">
        <Edit data={record} />

        <Delete id={props} />
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

const Curator = ({ loading, data }) => {
  return (
    <>
      <Card extra={<Add />} title={`Session (${data?.length})`}>
        <Space direction="vertical"></Space>

        <Table loading={loading} columns={columns} dataSource={data} />
      </Card>
    </>
  );
};
export default Curator;

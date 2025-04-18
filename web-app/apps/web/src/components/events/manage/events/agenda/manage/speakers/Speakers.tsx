"use client";
import React, { useState } from "react";
import { Alert, Avatar, Card, Form, Space, Switch, Table, Tag } from "antd";
import type { TableProps } from "antd";

import Delete from "./Delete";
import moment from "moment";
import AddButton from "@repo/ui/AddButton";
import Add from "./Add";
import Edit from "./Edit";
import { useParams } from "next/navigation";
import { getAllSpeakers } from "../../../../../../../graphql/actions/events";
import { eventSpeakers } from "../../../../../../ts-types/types";

interface DataType {
  key: string;
  name: string;

  age: number;
  address: string;
  tags: string[];
}

const columns: TableProps<eventSpeakers>["columns"] = [
  {
    title: "Avatar",
    dataIndex: "avatar",
    key: "avatar",
    render: (text) => <Avatar src={text}>{text}</Avatar>,
  },

  {
    title: "Full Name",
    dataIndex: "fullName",
    key: "fullName",
    render: (text) => <>{text}</>,
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

const Speakers = ({}) => {
  const { slug } = useParams();
  const { data, loading } = getAllSpeakers({
    variables: {
      input: {
        slug,
      },
    },
  });
  return (
    <>
      <Card extra={<Add />} title={`Speakers`}>
        <Space direction="vertical"></Space>

        <Table
          loading={loading}
          columns={columns}
          dataSource={data?.getAllSpeakers}
        />
      </Card>
    </>
  );
};
export default Speakers;

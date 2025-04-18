"use client";
import React, { useState } from "react";
import { Alert, Card, Form, Space, Switch, Table, Tag } from "antd";
import type { TableProps } from "antd";

import Delete from "./Delete";
import moment from "moment";
import AddButton from "@repo/ui/AddButton";
import Add from "./Add";
import Edit from "./Edit";
import { useParams } from "next/navigation";
import { getAllVenue } from "../../../../../../../graphql/actions/events";

interface DataType {
  key: string;
  name: string;

  age: number;
  address: string;
  tags: string[];
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Venue",
    dataIndex: "venue",
    key: "venue",
    render: (text) => <>{text}</>,
  },

  {
    title: "Address",
    dataIndex: "address",
    key: "address",
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

const Venue = ({}) => {
  const { slug } = useParams();
  const { data, loading } = getAllVenue({
    variables: {
      input: {
        slug,
      },
    },
  });
  return (
    <>
      <Card extra={<Add />} title={`Venue (${data?.getAllVenue?.length})`}>
        <Space direction="vertical"></Space>

        <Table
          loading={loading}
          columns={columns}
          dataSource={data?.getAllVenue}
        />
      </Card>
    </>
  );
};
export default Venue;

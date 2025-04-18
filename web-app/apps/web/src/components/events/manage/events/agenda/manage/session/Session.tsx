"use client";
import React, { useState } from "react";
import { Alert, Card, Form, Space, Switch, Table, Tag } from "antd";
import type { TableProps } from "antd";

import Delete from "./Delete";
import moment from "moment";
import AddButton from "@repo/ui/AddButton";
import Add from "./Add";
import Edit from "./Edit";
import { getAllAgenda } from "../../../../../../../graphql/actions/alumni";
import { useParams } from "next/navigation";

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
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

const Session = ({}) => {
  const { slug } = useParams();

  const { data, loading } = getAllAgenda({
    variables: {
      input: {
        slug,
      },
    },
  });
  return (
    <>
      <Card
        extra={<Add />}
        title={`Session (${data?.getAllAgenda && data?.getAllAgenda?.length})`}
      >
        <Space direction="vertical"></Space>

        <Table
          loading={loading}
          columns={columns}
          dataSource={data?.getAllAgenda}
        />
      </Card>
    </>
  );
};
export default Session;

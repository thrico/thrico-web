"use client";

import React from "react";
import {
  Button,
  Card,
  Image,
  Space,
  Table,
  Tag,
  Tooltip,
  Typography,
} from "antd";
import type { TableColumnsType } from "antd";
import EditButton from "@repo/ui/EditButton";
import DeleteButton from "@repo/ui/DeleteButton";
import Link from "next/link";
import Container from "../../Layout/Container";
import MainBreadcrumb from "../../Layout/BreadCrumb";

import Actions from "./actions/Actions";
import CreateJobs from "../add/CreateJobs";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Job Title",
    dataIndex: "jobTitle",
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: "Company",
    dataIndex: "company",
  },

  {
    title: "Location",
    dataIndex: "location",
  },
  {
    title: "Job Type",
    dataIndex: "jobType",
    render: (text: string) => (
      <Tag color="blue" style={{ textTransform: "uppercase" }}>
        {text}
      </Tag>
    ),
  },

  {
    title: "Action",
    key: "operation",
    fixed: "right",

    render: (props, record) => <Actions record={record} />,
  },
];

const MyJobs = ({ data, loading, refresh }) => (
  <Container>
    <MainBreadcrumb />
    <Card title={<>Manage Jobs</>} extra={<CreateJobs />}>
      <Table loading={loading} columns={columns} dataSource={data} />
    </Card>
  </Container>
);

export default MyJobs;

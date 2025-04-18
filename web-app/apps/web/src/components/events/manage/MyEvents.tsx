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
import CreateEvent from "../add/CreateEvent";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Event Cover",
    dataIndex: "cover",
    render: (text: string) => (
      <>
        <Image
          src={`https://cdn.thrico.network/${text}`}
          alt="alt"
          width={"100%"}
          style={{ objectFit: "contain" }}
          height={100}
        />
      </>
    ),
  },
  {
    title: "Event Name",
    dataIndex: "name",
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: "Role",
    dataIndex: "eventHost",
    render: (text: string) => (
      <Tag color="blue" style={{ textTransform: "uppercase" }}>
        {text?.role}
      </Tag>
    ),
  },

  {
    title: "Action",
    dataIndex: "id",
    render: (text: string) => (
      <Space size="middle">
        <Tooltip title="Edit">
          <Link href="/events/manage/122112/edit">
            <EditButton />
          </Link>
        </Tooltip>
        <DeleteButton />
      </Space>
    ),
  },

  {
    title: "Manage",
    dataIndex: "slug",
    render: (text: string) => (
      <Link href={`/events/manage/${text}/dashboard`}>
        <Button type="primary">Manage</Button>
      </Link>
    ),
  },
];

const MyEvents = ({ data, loading, refresh }) => (
  <Container>
    <MainBreadcrumb />
    <Card title={<>Manage Events</>} extra={<CreateEvent />}>
      <Table loading={loading} columns={columns} dataSource={data} />
    </Card>
  </Container>
);

export default MyEvents;

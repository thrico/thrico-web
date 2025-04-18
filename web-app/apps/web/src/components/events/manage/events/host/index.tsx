import React from "react";
import { Avatar, Card, Space, Table, Tag } from "antd";
import type { TableProps } from "antd";

import EditButton from "@repo/ui/EditButton";
import Delete from "./manage/Delete";
import moment from "moment";
import AddButton from "@repo/ui/AddButton";
import Add from "./manage/Add";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const Host = ({ loading, data, refresh }) => {
  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Avatar",
      dataIndex: "alumni",
      key: "avatar",
      render: (item) => (
        <>
          <Avatar shape="square" size={"large"} src={`${item?.avatar}`} />
        </>
      ),
    },
    {
      title: "Name",
      dataIndex: "alumni",
      key: "name",
      render: (item) => (
        <>
          {item.firstName} {item.lastName}
        </>
      ),
    },

    {
      title: "Role",
      dataIndex: "hostType",
      key: "hostType",
      render: (item) => (
        <Tag color="purple">
          {" "}
          <span style={{ textTransform: "uppercase" }}>{item}</span>{" "}
        </Tag>
      ),
    },

    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (item) => <>{moment(item).format("MMMM Do YYYY, h:mm:ss a")}</>,
    },
    {
      title: "Updated At",
      dataIndex: "updatedAt",
      key: "updatedAt",
      render: (item) => <>{moment(item).format("MMMM Do YYYY, h:mm:ss a")}</>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Delete
            id={record.id}
            refresh={refresh}
            role={record.hostType === "host"}
          />
        </Space>
      ),
    },
  ];
  return (
    <Card extra={<Add refresh={refresh} />} title="Manage Event Co-Host">
      <Table loading={loading} columns={columns} dataSource={data} />
    </Card>
  );
};
export default Host;

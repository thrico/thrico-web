"use client";
import React, { useState } from "react";
import { Alert, Card, Form, Space, Switch, Table, Tag } from "antd";
import type { TableProps } from "antd";

import Delete from "./manage/Delete";
import moment from "moment";
import AddButton from "@repo/ui/AddButton";
import Add from "./manage/Add";
import Edit from "./manage/Edit";

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

const Sponsorship = ({ loading, data }) => {
  const [disabled, setDisabled] = useState(true);

  const toggle = () => {
    setDisabled(!disabled);
  };

  return (
    <>
      <Form>
        <Alert
          type="info"
          message="If this sponsorship is checked, the sponsorship tab will be shown on the events page; otherwise, it will not be shown"
          showIcon={true}
        />
        <Form.Item
          style={{ marginTop: "1rem" }}
          label="Do Yo Accepting Sponsorships"
          valuePropName="checked"
        >
          <Switch
            onClick={toggle}
            checkedChildren="Yes"
            unCheckedChildren="No"
            defaultChecked
          />
        </Form.Item>
      </Form>
      {disabled && (
        <Card extra={<Add />} title="Sponsorship Type">
          <Space direction="vertical"></Space>

          <Table loading={loading} columns={columns} dataSource={data} />
        </Card>
      )}
    </>
  );
};
export default Sponsorship;

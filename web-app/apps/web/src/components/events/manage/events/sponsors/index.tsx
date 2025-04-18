"use client";
import React, { useState } from "react";
import { Alert, Card, Form, Image, Space, Switch, Table, Tag } from "antd";
import type { TableProps } from "antd";

import Delete from "./manage/Delete";
import moment from "moment";
import AddButton from "@repo/ui/AddButton";
import Add from "./manage/Add";
import Edit from "./manage/Edit";
import {
  getEventSponsors,
  getEventSponsorship,
} from "../../../../../graphql/actions/events";
import { useParams } from "next/navigation";
import Message from "./manage/Message";

interface DataType {
  key: string;
  name: string;

  age: number;
  address: string;
  tags: string[];
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "sponsor Logo",
    dataIndex: "sponsorLogo",
    key: "sponsorLogo",
    render: (text) => (
      <Image
        src={`https://cdn.thrico.network/${text}`}
        alt="alt"
        width={"100%"}
        style={{ objectFit: "contain" }}
        height={60}
      />
    ),
  },
  {
    title: "Sponsor Name",
    dataIndex: "sponsorName",
    key: "sponsorName",
    render: (text) => <>{text}</>,
  },

  {
    title: "Created At",
    dataIndex: "createdAt",
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

const Sponsors = ({}) => {
  const { slug } = useParams();
  const { data, loading } = getEventSponsors({
    variables: {
      input: {
        slug: slug,
      },
    },
  });
  const { data: check } = getEventSponsorship({
    variables: {
      input: {
        slug: slug,
      },
    },
  });
  const [disabled, setDisabled] = useState(true);

  const toggle = () => {
    setDisabled(!disabled);
  };

  return (
    <>
      {check?.getEventSponsorship &&
      check?.getEventSponsorship?.length === 0 ? (
        <Message />
      ) : (
        <>
          <Form>
            <Form.Item
              style={{ marginTop: "1rem" }}
              label="Do you accept sponsor?"
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

              <Table
                loading={loading}
                columns={columns}
                dataSource={data?.getEventSponsors}
              />
            </Card>
          )}
        </>
      )}
    </>
  );
};
export default Sponsors;

import React from "react";
import { Flex, Space, Table } from "antd";
import type { TableColumnsType } from "antd";
import Actions from "./Actions";
import { getFeedbackFormByType } from "../../graphql/actions/feedback";

const AllFeedBack = ({ type }) => {
  const { data, loading } = getFeedbackFormByType({
    variables: {
      input: {
        type: type,
      },
    },
  });
  const columns: TableColumnsType<DataType> = [
    {
      title: "Title",
      dataIndex: "title",
      key: "name",
      fixed: "left",
    },
    {
      title: "Question",

      dataIndex: "age",
      key: "age",
      fixed: "left",
    },

    {
      title: "Responses",
      dataIndex: "age",
      key: "7",
    },
    { title: "Updated", dataIndex: "address", key: "8" },
    {
      title: "Action",
      key: "operation",
      fixed: "right",

      render: (props, record) => <Actions type={type} record={record} />,
    },
  ];
  return (
    <Flex justify="center" style={{ width: "80%" }}>
      <Table
        style={{ width: "100%" }}
        columns={columns}
        loading={loading}
        dataSource={data?.getFeedbackFormByType}
      />
    </Flex>
  );
};
export default AllFeedBack;

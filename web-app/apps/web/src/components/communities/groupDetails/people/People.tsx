import React from "react";
import { useParams } from "next/navigation";
import { getAllGroupPeople } from "../../../../graphql/actions/communities";
import List from "./list/List";
import { Card } from "antd";
import GroupRequest from "./GroupRequest";
import { groupProps } from "../ts-type";
const People = ({ data, refresh }: groupProps) => {
  const { isGroupAdmin } = data;
  const { data: people, loading } = getAllGroupPeople({
    variables: {
      input: {
        id: data.id,
        offset: 0,
      },
    },
  });

  console.log(data);
  return (
    <Card
      style={{ width: 1200 }}
      extra={
        isGroupAdmin ? <GroupRequest refresh={refresh} id={data?.id} /> : ""
      }
    >
      <List data={people?.getAllGroupPeople} loading={loading} />
    </Card>
  );
};

export default People;

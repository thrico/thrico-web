import React from "react";

import { Card } from "antd";

import { getMediaByGroup } from "../../../../graphql/actions/media";
import List from "./List";
import Add from "./add/Add";
const Media = ({ id }) => {
  const { data, loading } = getMediaByGroup({
    variables: {
      input: {
        group: id,
        offset: 0,
      },
    },
  });

  return (
    <div>
      <Card extra={<Add />}>
        <List data={data?.getMediaByGroup} loading={loading} />
      </Card>
    </div>
  );
};

export default Media;

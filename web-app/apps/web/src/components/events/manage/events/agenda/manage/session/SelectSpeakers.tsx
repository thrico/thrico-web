import { useParams } from "next/navigation";
import React from "react";
import { getAllSpeakers } from "../../../../../../../graphql/actions/events";
import { Divider, Select, Space } from "antd";

import { eventSpeakers } from "../../../../../../ts-types/types";
import AddSpeakers from "../speakers/Add";

const SelectSpeakers = () => {
  const { slug } = useParams();
  const { data, loading } = getAllSpeakers({
    variables: {
      input: {
        slug,
      },
    },
  });
  return (
    <Select
      loading={loading}
      style={{ width: 300 }}
      placeholder="Add Speakers"
      mode="multiple"
      allowClear
      dropdownRender={(menu) => (
        <>
          {menu}
          <Divider style={{ margin: "8px 0" }} />
          <Space style={{ padding: "0 8px 4px" }}>
            <AddSpeakers />
          </Space>
        </>
      )}
      options={data?.getAllSpeakers.map((item: eventSpeakers) => ({
        label: item?.fullName,
        value: item?.id,
      }))}
    />
  );
};

export default SelectSpeakers;

import { useParams } from "next/navigation";
import React from "react";
import { getAllVenue } from "../../../../../../../graphql/actions/events";
import { Divider, Select, Space } from "antd";
import AddVenue from "../venue/Add";
import { eventVenue } from "../../../../../../ts-types/types";

const SelectVenue = () => {
  const { slug } = useParams();
  const { data, loading } = getAllVenue({
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
      placeholder="Add Venue"
      dropdownRender={(menu) => (
        <>
          {menu}
          <Divider style={{ margin: "8px 0" }} />
          <Space style={{ padding: "0 8px 4px" }}>
            <AddVenue />
          </Space>
        </>
      )}
      options={data?.getAllVenue.map((item: eventVenue) => ({
        label: item?.venue,
        value: item?.id,
      }))}
    />
  );
};

export default SelectVenue;

import React from "react";
import type { SelectProps } from "antd";
import { Form, Select, Space } from "antd";
import { getEntityTag } from "@/graphql/actions/organization";
import { title } from "process";

const handleChange = (value: string[]) => {
  console.log(`selected ${value}`);
};

const SelectTag = () => {
  const { data, loading } = getEntityTag();

  const options = data?.getEntityTag.map((set) => ({
    label: set.title,
    value: set.title,
  }));

  return (
    <Form.Item
      name="tag"
      label="Select Tags"
      rules={[
        {
          type: "array",
        },
      ]}
    >
      <Select
        loading={loading}
        mode="multiple"
        style={{ width: "100%" }}
        options={options}
        optionRender={(option) => (
          <Space>
            <span role="img" aria-label={option.data.label}>
              {option.label}
            </span>
          </Space>
        )}
      />
    </Form.Item>
  );
};

export default SelectTag;

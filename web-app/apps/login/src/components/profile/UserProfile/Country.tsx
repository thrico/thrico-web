import { Form, Select } from "antd";
import React from "react";
import data from "./json/countries.json";

const { Option } = Select;

interface country {
  country: string;
}

const Country = ({ country }: country) => {
  return (
    <Form.Item
      hasFeedback
      name="country"
      label="Country/Region"
      style={{ width: "47%" }}
      initialValue={country}
      rules={[{ required: true, message: "Please input your Country" }]}
    >
      <Select showSearch>
        {data.map((set, key) => (
          <Option key={key} value={set.name}>
            {set.name}({set.code})
          </Option>
        ))}
      </Select>
    </Form.Item>
  );
};

export default React.memo(Country);

import { Form, Select } from "antd";
import React from "react";
import data from "./json/timeZone.json";
const { Option } = Select;

interface timeZone {
  timeZone: string;
}
const TimeZone = ({ timeZone }: timeZone) => {
  return (
    <Form.Item
      hasFeedback
      initialValue={timeZone}
      name="timeZone"
      label="Time Zone"
      style={{ width: "47%" }}
      rules={[{ required: true, message: "Please input your TimeZone" }]}
    >
      <Select showSearch>
        {data.map((set, key) => (
          <Option key={key} value={set.abbr}>
            {set.text}
          </Option>
        ))}
      </Select>
    </Form.Item>
  );
};

export default React.memo(TimeZone);

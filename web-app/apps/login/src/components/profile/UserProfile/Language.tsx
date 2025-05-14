import { Form, Select } from "antd";
import React from "react";
import data from "./json/language.json";
const { Option } = Select;
interface language {
  language: string;
}
const Language = ({ language }: language) => {
  return (
    <Form.Item
      hasFeedback
      name="language"
      label="Language"

      style={{ width: "47%" }}
      initialValue={language}
      rules={[{ required: true, message: "Please input your phone number!" }]}
    >
      <Select showSearch>
        {data.map((set, key) => (
          <Option key={key} value={set.code}>
            {set.name}({set.nativeName})
          </Option>
        ))}
      </Select>
    </Form.Item>
  );
};

export default React.memo(Language);

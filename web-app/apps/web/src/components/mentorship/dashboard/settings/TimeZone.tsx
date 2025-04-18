import { Form, Select } from "antd";
import React, { memo } from "react";
import { timeZoneList } from "./timezonelist";

const TimeZone = () => {
  return (
    <Form.Item name="timZone" style={{ width: 300 }}>
      <Select>
        {timeZoneList.map((set) => (
          <Select.Option value={set.utc}>{set.utc}</Select.Option>
        ))}
      </Select>
    </Form.Item>
  );
};

export default memo(TimeZone);

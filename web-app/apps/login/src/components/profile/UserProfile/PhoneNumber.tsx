"use client";

import { Form } from "antd";
import React from "react";

import PhoneInput from "antd-phone-input";

interface phone {
  phone: string;
}

const PhoneNumber = ({ phone }: phone) => {
  return (
    <Form.Item
      hasFeedback
      initialValue={phone}
      name="phone"
      label="Phone"
      style={{ width: "48%" }}
      rules={[{ required: true, message: "Please input your phone number!" }]}
    >
      <PhoneInput country={"in"} enableSearch />
    </Form.Item>
  );
};

export default React.memo(PhoneNumber);

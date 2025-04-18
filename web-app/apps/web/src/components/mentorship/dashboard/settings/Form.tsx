import React from "react";
import {
  CalendarOutlined,
  CloseOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { Form, Input, List, Select } from "antd";
import { Option } from "antd/es/mentions";
import TimeZone from "./TimeZone";
const SettingsForm = () => {
  const [form] = Form.useForm();
  const prefixSelector = (
    <Form.Item initialValue={"minutes"} name="prefix" noStyle>
      <Select style={{ width: 150 }}>
        <Option value="minutes">Minutes</Option>
        <Option value="hours">Hours</Option>
        <Option value="days">days</Option>
        <Option value="weeks">Weeks</Option>
      </Select>
    </Form.Item>
  );

  return (
    <Form
      form={form}
      name="dynamic_form_complex"
      style={{ maxWidth: 800 }}
      autoComplete="off"
    >
      <List bordered>
        <List.Item
          actions={[
            <>
              <TimeZone />
            </>,
          ]}
        >
          <List.Item.Meta
            avatar={<EnvironmentOutlined />}
            title={"Timezone"}
            description="Required for timely communications"
          />
        </List.Item>
        <List.Item
          actions={[
            <>
              <Form.Item
                name="booking-period"
                initialValue={"1-months"}
                style={{ width: 300 }}
              >
                <Select>
                  <Select.Option value="1-week">1 Week</Select.Option>
                  <Select.Option value="2-weeks">2 Weeks</Select.Option>
                  <Select.Option value="3-weeks">3 Weeks</Select.Option>
                  <Select.Option value="1-months">1 Month</Select.Option>
                  <Select.Option value="2-months">2 Months</Select.Option>
                  <Select.Option value="3-months">3 Months</Select.Option>
                </Select>
              </Form.Item>
            </>,
          ]}
        >
          <List.Item.Meta
            avatar={<CalendarOutlined />}
            title={"Booking Period"}
            description="How far in the future can attendees book"
          />
        </List.Item>
        <List.Item
          actions={[
            <>
              <Form.Item
                name="notice-period"
                initialValue={120}
                style={{ width: 300 }}
              >
                <Input
                  type="number"
                  addonAfter={prefixSelector}
                  style={{ width: "100%" }}
                />
              </Form.Item>
            </>,
          ]}
        >
          <List.Item.Meta
            avatar={<CalendarOutlined />}
            title={"Notice Period"}
            description="Set the minimum amount of notice that is required"
          />
        </List.Item>
      </List>
    </Form>
  );
};

export default SettingsForm;

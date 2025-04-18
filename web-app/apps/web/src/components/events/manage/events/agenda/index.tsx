"use client";
import React, { useState } from "react";
import { Alert, Form, Switch, Tabs } from "antd";
import type { TabsProps } from "antd";

import Session from "./manage/session/Session";

import Speakers from "./manage/speakers/Speakers";
import Venue from "./manage/venue/Venue";

const Agenda = ({}) => {
  const [disabled, setDisabled] = useState(true);

  const toggle = () => {
    setDisabled(!disabled);
  };

  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Session`,
      children: <Session />,
    },
    {
      key: "2",
      label: "Venue",
      children: <Venue />,
    },
    {
      key: "3",
      label: "Speakers",
      children: <Speakers />,
    },
  ];
  return (
    <>
      <Form>
        <Alert
          type="info"
          message="If the agenda and timeline are checked, the agenda and timeline tab will be shown on the events page; otherwise, it will not be shown."
          showIcon={true}
        />
        <Form.Item
          style={{ marginTop: "1rem" }}
          label="Do you have an agenda and timeline for the event?"
          valuePropName="checked"
        >
          <Switch
            onClick={toggle}
            checkedChildren="Yes"
            unCheckedChildren="No"
            defaultChecked
          />
        </Form.Item>
      </Form>
      {disabled && (
        <Tabs
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
          indicator={{ size: (origin) => origin - 20, align: "center" }}
        />
      )}
    </>
  );
};
export default Agenda;

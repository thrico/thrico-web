import React from "react";
import Appearance from "./Appearance";
import { Button, Card, Form } from "antd";
import TabSequence from "./TabSequence";

const Settings = () => {
  return (
    <Card extra={<Button type="primary"> Update</Button>}>
      <Form layout="vertical">
        <Form.Item label="Appearance" name="appearance">
          <Appearance />
        </Form.Item>
        <Form.Item label="Appearance" name="appearance">
          <TabSequence />
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Settings;

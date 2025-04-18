import { Button, Card, Space } from "antd";
import React from "react";
import SettingsForm from "./Form";

const Settings = () => {
  return (
    <Card
      title="Settings"
      extra={
        <Space>
          <Button type="primary">Save Changes</Button>
        </Space>
      }
    >
      <SettingsForm />
    </Card>
  );
};

export default Settings;

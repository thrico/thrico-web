import { Card, Form, Input, Switch, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import React from "react";
import { formPropsQuestionType } from "../../../types/ts-types";

const Settings = ({ active, setActive, data }: formPropsQuestionType) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Sider
      style={{
        background: colorBgContainer,
      }}
      title="Settings"
    >
      <Card title="Settings">
        <Form.Item label="Required" name="isRequired">
          <Switch />
        </Form.Item>
      </Card>
    </Sider>
  );
};

export default Settings;

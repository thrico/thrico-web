"use client";

import React, { useState } from "react";
import {
  Button,
  Card,
  Drawer,
  Flex,
  Layout,
  Menu,
  Space,
  Tabs,
  theme,
} from "antd";
import type { DrawerProps, MenuProps } from "antd";
import {
  CommentOutlined,
  EyeOutlined,
  GroupOutlined,
  PlusCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import MainBreadcrumb from "../../Layout/BreadCrumb";
import Link from "next/link";
import AddButton from "@repo/ui/AddButton";
import Add from "./AddContent";
import Question from "./Question";
import Form from "./Form";
import Settings from "./Settings";

type MenuItem = Required<MenuProps>["items"][number];
const { Header, Content, Footer, Sider } = Layout;
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const Manage = ({ data }) => {
  const [open, setOpen] = useState(true);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [active, setActive] = useState(data.feedBackQuestion[0]);
  return (
    <>
      <Drawer
        title={``}
        placement="right"
        open={open}
        closeIcon={<MainBreadcrumb />}
        width={"100vw"}
        extra={
          <Space>
            <Button icon={<EyeOutlined />}>Preview</Button>
            <Button type="primary">Publish</Button>
          </Space>
        }
      >
        <Layout style={{ padding: 10 }}>
          <Card extra={<Add />} title="Content">
            <Sider
              style={{
                background: colorBgContainer,
                width: 10,
              }}
            >
              <Question active={active} setActive={setActive} data={data} />
            </Sider>
          </Card>

          <Layout>
            <Content style={{ margin: "0 16px" }}>
              <div
                style={{
                  padding: 24,
                  minHeight: 360,
                }}
              >
                <Form
                  data={data.feedBackQuestion}
                  active={active}
                  setActive={setActive}
                />
              </div>
            </Content>
          </Layout>

          <Settings active={active} setActive={setActive} data={data} />
        </Layout>
      </Drawer>
    </>
  );
};
export default Manage;

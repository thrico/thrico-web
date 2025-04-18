import React, { useState } from "react";
import type { DrawerProps, RadioChangeEvent, TabsProps } from "antd";
import { Button, Drawer, Radio, Space, Tabs } from "antd";
import {
  AlertOutlined,
  BookOutlined,
  CarOutlined,
  EditOutlined,
  GoldOutlined,
  MessageOutlined,
  StarOutlined,
  StepBackwardOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
import TermAndConditions from "./TermAndCondition";
const MentorShipGuides = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };
  const items: TabsProps["items"] = [
    {
      key: "your-first-steps",
      label: "Your first steps as a mentor",
      children: <TermAndConditions />,
      icon: <StepBackwardOutlined />,
    },
    {
      key: "responsibilities-of-a-mentor",
      label: "Responsibilities of a mentor",
      children: <TermAndConditions />,
      icon: <CarOutlined />,
    },
    {
      key: "getting-your-first-mentees",
      label: "Getting your first mentees",
      children: <TermAndConditions />,
      icon: <StarOutlined />,
    },

    {
      key: "evaluating-mentee-requests",
      label: "Getting to know potential mentees",
      children: <TermAndConditions />,
      icon: <MessageOutlined />,
    },
    {
      key: "navigating-the-trial",
      label: "Making the most of the trial",
      children: <TermAndConditions />,
      icon: <TrophyOutlined />,
    },
    {
      key: "running-productive-mentorship",
      label: "Running productive mentorship",
      children: <TermAndConditions />,
      icon: <GoldOutlined />,
    },
    {
      key: "troubleshooting-mentorship",
      label: "Troubleshooting mentorship",
      children: <TermAndConditions />,
      icon: <AlertOutlined />,
    },
    {
      key: "Improve Guidess",
      label: "Improve Guides",
      children: <TermAndConditions />,
      icon: <EditOutlined />,
    },

    {
      key: "resources,",
      label: "Resources",
      children: <TermAndConditions />,
      icon: <BookOutlined />,
    },
  ];

  return (
    <>
      <Button type="dashed" onClick={showDrawer}>
        Mentorship Guides
      </Button>
      <Drawer
        title="Mentorship Guides"
        placement="bottom"
        closable={true}
        onClose={onClose}
        open={open}
        height={"100vh"}
      >
        <Tabs
          style={{ height: "100%" }}
          size="large"
          tabPosition="left"
          items={items}
        />
      </Drawer>
    </>
  );
};

export default MentorShipGuides;

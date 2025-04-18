"use client";

import React, { useState } from "react";
import { Button, Drawer, Flex, Space } from "antd";
import type { DrawerProps } from "antd";

import MainBreadcrumb from "../Layout/BreadCrumb";
import AllFeedBack from "./AllFeedback";
import Add from "./Add";

const Feedback = (props) => {
  const [open, setOpen] = useState(true);

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
            <Add {...props} />
          </Space>
        }
      >
        <Flex justify="center" style={{ width: "100%" }}>
          <AllFeedBack {...props} />
        </Flex>
      </Drawer>
    </>
  );
};

export default Feedback;

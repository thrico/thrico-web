import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown, message, Space } from "antd";
import { BsThreeDots } from "react-icons/bs";

import Link from "next/link";
import CallDetails from "../callDetails/CallDetails";
import Testimonials from "../callDetails/Testimonials";

const Actions = ({}) => {
  const [openCallDetails, setOpenCallDetails] = useState(false);
  const [openTestimonialDrawer, setTestimonialDrawer] = useState(false);

  const showCallDetailsDrawer = () => {
    setOpenCallDetails(true);
  };

  const onCloseCallDetailsDrawer = () => {
    setOpenCallDetails(false);
  };

  const items: MenuProps["items"] = [
    {
      label: <Link href="">Call Details</Link>,
      key: "0",
      onClick: () => showCallDetailsDrawer(),
    },
  ];
  const key = "updatable";

  return (
    <>
      <Dropdown menu={{ items }} trigger={["click"]}>
        <a onClick={(e) => e.preventDefault()}>
          <Button icon={<DownOutlined />}>More actions</Button>
        </a>
      </Dropdown>
    </>
  );
};

export default Actions;

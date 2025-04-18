import { DownCircleTwoTone } from "@ant-design/icons";
import { theme } from "antd";
import React from "react";

const DropDownIcon = () => {
  const {
    token: { colorPrimary },
  } = theme.useToken();

  return <DownCircleTwoTone twoToneColor={colorPrimary} />;
};

export default DropDownIcon;

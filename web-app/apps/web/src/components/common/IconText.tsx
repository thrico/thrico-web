import { Space } from "antd";
import React from "react";

const IconText = ({
  icon,
  text,
  tooltip,
}: {
  icon: React.FC;
  text: string | number;
  tooltip?: string;
}) => (
  <Space>
    {React.createElement(icon, { style: { color: "black", fontSize: "18px" } })}
    <span
      style={{
        paddingBottom: 10,
        color: "black",
        position: "absolute",
        top: "-5%",
      }}
    >
      {text}
    </span>
  </Space>
);

export default IconText;

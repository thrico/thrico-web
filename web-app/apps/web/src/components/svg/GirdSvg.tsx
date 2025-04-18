import { Flex, theme } from "antd";
import React from "react";

interface props {
  active: boolean;
}
const GirdSvg = ({ active }: props) => {
  const {
    token: { colorPrimary },
  } = theme.useToken();

  const bg = `${colorPrimary}20`;
  return (
    <Flex
      align="center"
      justify="center"
      style={{
        backgroundColor: active ? bg : "transparent",
        width: 30,
        height: 30,
        cursor: "pointer",
      }}
    >
      <svg
        width="20px"
        height="2opx"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="3"
          y="3"
          width="7"
          height="7"
          rx="1"
          stroke={colorPrimary}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <rect
          x="3"
          y="14"
          width="7"
          height="7"
          rx="1"
          stroke={colorPrimary}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <rect
          x="14"
          y="3"
          width="7"
          height="7"
          rx="1"
          stroke={colorPrimary}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <rect
          x="14"
          y="14"
          width="7"
          height="7"
          rx="1"
          stroke={colorPrimary}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </Flex>
  );
};

export default GirdSvg;

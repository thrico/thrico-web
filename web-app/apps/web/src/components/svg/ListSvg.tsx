import { Flex, theme } from "antd";
import React from "react";
interface props {
  active: boolean;
}
const ListSvg = ({ active }: props) => {
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
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 32 32"
        enable-background="new 0 0 32 32"
        xmlSpace="preserve"
        width="20px"
        height="2opx"
      >
        <line
          fill="none"
          stroke={colorPrimary}
          stroke-width="2"
          stroke-miterlimit="10"
          x1="12"
          y1="16"
          x2="27"
          y2="16"
        />
        <rect
          x="5"
          y="14"
          fill="none"
          stroke={colorPrimary}
          stroke-width="2"
          stroke-miterlimit="10"
          width="4"
          height="4"
        />
        <line
          fill="none"
          stroke={colorPrimary}
          stroke-width="2"
          stroke-miterlimit="10"
          x1="12"
          y1="8"
          x2="27"
          y2="8"
        />
        <rect
          x="5"
          y="6"
          fill="none"
          stroke={colorPrimary}
          stroke-width="2"
          stroke-miterlimit="10"
          width="4"
          height="4"
        />
        <line
          fill="none"
          stroke={colorPrimary}
          stroke-width="2"
          stroke-miterlimit="10"
          x1="12"
          y1="24"
          x2="27"
          y2="24"
        />
        <rect
          x="5"
          y="22"
          fill="none"
          stroke={colorPrimary}
          stroke-width="2"
          stroke-miterlimit="10"
          width="4"
          height="4"
        />
      </svg>
    </Flex>
  );
};

export default ListSvg;

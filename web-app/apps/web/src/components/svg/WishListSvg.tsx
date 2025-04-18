import { Flex, theme } from "antd";
import React from "react";
import { CiBookmark } from "react-icons/ci";

const WishListSvg = () => {
  const {
    token: { colorPrimary },
  } = theme.useToken();
  const bg = `${colorPrimary}20`;
  return (
    <Flex
      align="center"
      justify="center"
      style={{ height: 40, width: 40, backgroundColor: bg, cursor: "pointer" }}
    >
      <CiBookmark color={colorPrimary} style={{ width: 30, height: 30 }} />
    </Flex>
  );
};

export default WishListSvg;

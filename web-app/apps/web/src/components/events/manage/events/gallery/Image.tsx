import React from "react";
import { media, videoProps } from "../../../../../types/ts-types";
import ReactPlayer from "react-player";
import { Image } from "antd";
const Images = ({ item }: videoProps) => {
  return (
    <>
      <Image
        src={`https://cdn.thrico.network/${item?.url}`}
        alt="alt"
        width={"100%"}
        style={{ objectFit: "contain" }}
        height={200}
      />
    </>
  );
};

export default Images;

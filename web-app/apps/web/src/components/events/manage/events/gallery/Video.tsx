import React from "react";
import { media, videoProps } from "../../../../../types/ts-types";
import ReactPlayer from "react-player";
const Video = ({ item }: videoProps) => {
  return (
    <>
      <ReactPlayer
        controls={true}
        url={`https://cdn.thrico.network/${item?.url}`}
        alt="alt"
        width={200}
        height={200}
      />
    </>
  );
};

export default Video;

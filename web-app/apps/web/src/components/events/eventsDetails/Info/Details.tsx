import { Space } from "antd";
import React from "react";

import dynamic from "next/dynamic";
import EventOrganizer from "./EventOrganizer";
import EventInfo from "./Info";

const EventLocation = dynamic(() => import("./EventLocation"), {
  ssr: false,
});
const Details = () => {
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <EventInfo />
      <EventLocation />
      <EventOrganizer />
    </Space>
  );
};

export default Details;

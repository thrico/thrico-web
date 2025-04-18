import { Drawer } from "antd";
import React from "react";

const CallDetails = ({ onClose, open }) => {
  return (
    <Drawer
      width={600}
      title="Call with Pankaj Verma"
      onClose={onClose}
      open={open}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
};

export default CallDetails;

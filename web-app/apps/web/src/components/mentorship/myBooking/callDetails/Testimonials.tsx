import { Drawer } from "antd";
import React from "react";

const Testimonials = ({ onClose, open }) => {
  return (
    <Drawer
      width={600}
      title="Call with Pankaj Verma"
      onClose={onClose}
      open={open}
    >
      Testimonials
    </Drawer>
  );
};

export default Testimonials;

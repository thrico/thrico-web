import React, { useState } from "react";
import { Avatar, Button, List, Modal } from "antd";
import DiscountIcon from "../../../../svg/DiscountIcon";
import FreeIcon from "../../../../svg/FreeIcon";
import FreeCoupon from "./FreeCoupon";
import PercentageDiscount from "./PercentageDiscount";

const CreateCoupon = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  const data = [
    {
      title: "Percentage Discount",
      description: "Offer a percentage discount to your users",
      icon: <DiscountIcon />,
    },
    {
      title: "Free Coupon",
      description: "Offer Free Courses to users",
      icon: <FreeIcon />,
    },
  ];

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Create Coupon
      </Button>

      <Modal
        footer={[]}
        title="Select coupon type"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <List
          style={{ cursor: "pointer" }}
          itemLayout="horizontal"
          dataSource={data}
        >
          <PercentageDiscount />
          <FreeCoupon />
        </List>
      </Modal>
    </>
  );
};

export default CreateCoupon;

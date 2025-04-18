import React, { useState } from "react";
import { Button, Modal, Typography } from "antd";

const Logout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <span onClick={showModal}>Logout</span>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Typography.Title level={4}>Are you sure to logout?</Typography.Title>
      </Modal>
    </>
  );
};

export default Logout;

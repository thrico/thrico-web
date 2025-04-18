import React, { useState } from "react";
import { Button, Modal } from "antd";

const Delete = ({ isModalOpen, handleOk, handleCancel }) => {
  return (
    <>
      <Modal
        okText="Delete"
        title="Delete this form?"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        It'll be gone forever and we won't be able to recover it.
      </Modal>
    </>
  );
};

export default Delete;

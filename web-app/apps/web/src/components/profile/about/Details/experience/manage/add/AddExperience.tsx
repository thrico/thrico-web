import React, { useState } from "react";
import { Button, Flex, Modal, Space } from "antd";
import AddForm from "./AddForm";
import AddButton from "@repo/ui/AddButton";
import { experience } from "../../../types";

interface props {
  addExperience(ex: experience): void;
}

const AddExperience = ({ addExperience }: props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Space onClick={showModal}>
        <AddButton />
      </Space>
      <Modal
        title="Add experience"
        width={700}
        open={isModalOpen}
        footer={false}
        onCancel={handleCancel}
      >
        <Space>
          <AddForm handleCancel={handleCancel} addExperience={addExperience} />
        </Space>
      </Modal>
    </>
  );
};

export default AddExperience;

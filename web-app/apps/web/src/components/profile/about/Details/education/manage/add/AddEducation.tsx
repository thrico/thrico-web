import React, { useState } from "react";
import { Button, Flex, Modal, Space } from "antd";
import AddForm from "./AddForm";
import AddButton from "@repo/ui/AddButton";
import { education, experience } from "../../../profile/types";

interface props {
  addEducation(ex: education): void;
}

const AddEducation = ({ addEducation }: props) => {
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
        title="Add Education"
        width={700}
        open={isModalOpen}
        footer={false}
        onCancel={handleCancel}
      >
        <Space>
          <AddForm handleCancel={handleCancel} addEducation={addEducation} />
        </Space>
      </Modal>
    </>
  );
};

export default AddEducation;

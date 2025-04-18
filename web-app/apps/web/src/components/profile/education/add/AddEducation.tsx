import React, { useState } from "react";
import { Button, Modal, Space } from "antd";
import AddForm from "./AddForm";



interface props {
  addEducation(ex: any): void;
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
        <Button>Add</Button>
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

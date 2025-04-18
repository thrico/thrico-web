import React, { useState } from "react";
import { Button, Flex, Form, Modal, Space } from "antd";
import EditForm from "./EditForm";
import { education } from "@/lib/types";



interface props {
  education: education[];
  item: education;
  setEducation(education: education[]): void;
}

const EditEducation = ({ item, education, setEducation }: props) => {
  const [isModalOpen, setIsModalOpen] = useState<String>("");

  const handleCancel = () => {
    setIsModalOpen("");
  };
  const editEducation = async (ex: education) => {
    const findIndex = education.findIndex((obj: education) => obj.id == ex.id);

    const newState = education.map((obj) =>
      obj.id === ex.id ? { ...ex } : obj
    );

    setEducation(newState);
  };

  return (
    <>
      <Space onClick={() => setIsModalOpen(item.id)}>Edit</Space>
      {isModalOpen === item?.id && (
        <Modal
          title="Edit experience"
          width={700}
          open={isModalOpen === item.id}
          footer={false}
          onCancel={handleCancel}
        >
          <Space>
            <EditForm
              education={item}
              editEducation={editEducation}
              handleCancel={handleCancel}
            />
          </Space>
        </Modal>
      )}
    </>
  );
};

export default EditEducation;

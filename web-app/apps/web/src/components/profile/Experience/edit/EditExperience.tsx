import React, { useState } from "react";
import { Button, Flex, Form, Modal, Space } from "antd";
import EditForm from "./EditForm";
import { experience } from "@/lib/types";



interface props {
  experience: experience[];
  item: experience;
  setExperience(experience: experience[]): void;
}

const EditExperience = ({ item, experience, setExperience }: props) => {
  console.log(item, experience);
  const [isModalOpen, setIsModalOpen] = useState<String>("");

  const handleCancel = () => {
    setIsModalOpen("");
  };
  const editExperience = async (ex: experience) => {
    const findIndex = experience.findIndex(
      (obj: experience) => obj.id == ex.id
    );
    console.log(findIndex);

    const newState = experience.map((obj) =>
      obj.id === ex.id ? { ...ex } : obj
    );

    setExperience(newState);
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
              experience={item}
              editExperience={editExperience}
              handleCancel={handleCancel}
            />
          </Space>
        </Modal>
      )}
    </>
  );
};

export default EditExperience;

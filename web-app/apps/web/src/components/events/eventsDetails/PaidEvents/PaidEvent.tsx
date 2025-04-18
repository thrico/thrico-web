import { CheckCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import Payment from "./Payment";

const PaidEvents = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  return (
    <>
      <Button
        type="primary"
        onClick={() => setIsModalOpen(true)}
        icon={<CheckCircleOutlined />}
      >
        Going
      </Button>
      <Payment isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};

export default PaidEvents;

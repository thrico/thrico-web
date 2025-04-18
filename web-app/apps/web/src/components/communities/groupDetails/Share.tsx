import React, { useState } from "react";
import { Button, Modal } from "antd";
import { ShareAltOutlined } from "@ant-design/icons";

const Share = () => {
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
      <Button onClick={showModal} icon={<ShareAltOutlined />}>
        Share
      </Button>

      <Modal
        title="Share"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
        {/* <ShareSocial
          url={window?.location?.origin}
          socialTypes={[
            "facebook",
            "twitter",
            "reddit",
            "linkedin",
            "facebook",
            "telegram",
            "email",
            "whatsapp",
          ]}
          style={style}
        /> */}
      </Modal>
    </>
  );
};

export default Share;

import { Button, Flex, Modal, Typography } from "antd";
import React, { useState } from "react";
import { BsTicketDetailedFill } from "react-icons/bs";
import { QRCode } from "antd";
import { useGetUser } from "../../../../graphql/actions";
const DownloadPass = ({ data }) => {
  const { data: { getUser } = {}, loading, error } = useGetUser();
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
  const downloadQRCode = () => {
    const canvas = document
      .getElementById("myqrcode")
      ?.querySelector<HTMLCanvasElement>("canvas");
    if (canvas) {
      const url = canvas.toDataURL();
      const a = document.createElement("a");
      a.download = "QRCode.png";
      a.href = url;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <>
      <Modal
        title="Download Pass"
        open={isModalOpen}
        onOk={downloadQRCode}
        onCancel={handleCancel}
        okText="Download"
      >
        <Flex
          style={{ width: "100%" }}
          justify="center"
          align="center"
          vertical
          id="myqrcode"
        >
          <Typography.Title level={3}>
            {getUser?.firstName} {getUser?.lastName}
          </Typography.Title>
          <QRCode
            errorLevel="H"
            value="http://apollo.localhost:4000/events"
            icon={`https://cdn.thrico.network/${data?.cover}`}
          />
        </Flex>
      </Modal>
      <Button
        type="primary"
        onClick={showModal}
        icon={<BsTicketDetailedFill />}
      >
        Download Pass
      </Button>
    </>
  );
};

export default DownloadPass;

import React, { useRef, useState } from "react";
import {
  Avatar,
  Button,
  Card,
  Flex,
  Input,
  Modal,
  Space,
  Typography,
  UploadFile,
} from "antd";
import { useGetUser } from "../../../../graphql/actions";
import TextArea from "antd/es/input/TextArea";

import InputEmoji from "react-input-emoji";
import Emoji from "./Emoji";
import ImageUpload from "./ImageUpload";

import { addFeedGroup } from "../../../../graphql/actions/communities";
import { useParams } from "next/navigation";

const Feed = ({ id }) => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const { slug } = useParams();
  const [open, setOpen] = useState(false);

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const [message, setMessageForm] = useState("");
  const ref = useRef(null);

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

  const [isModalPolls, setIsModalPolls] = useState(false);

  const showModalPolls = () => {
    setIsModalPolls(true);
  };

  const handlePolls = () => {
    setIsModalPolls(false);
  };

  const handleCancelPolls = () => {
    setIsModalPolls(false);
  };

  const onCompleted = () => {
    handleCancel();
    setMessageForm("");
    setFileList([]);
  };
  const [add, { error, reset, loading }] = addFeedGroup({
    groupId: id,
    onCompleted,
  });
  const { data } = useGetUser();

  return (
    <Flex style={{ width: "100%", marginTop: 20 }} justify="flex-start">
      <Card
        actions={[
          <Space onClick={showModal}>Post</Space>,
          <Space onClick={showModal}>Photo/Video</Space>,
          <Space onClick={showModal}>Poll</Space>,
        ]}
        style={{ width: "70%", marginTop: 20 }}
      >
        <Space direction="vertical" style={{ width: "100%", margin: 10 }}>
          <Flex
            style={{ width: "100%" }}
            gap={10}
            justify="center"
            align="center"
          >
            <Avatar src={data.getUser.avatar}></Avatar>
            <Button style={{ width: "80%", height: 100 }} onClick={showModal}>
              Write Something
            </Button>
          </Flex>
          <Space></Space>
        </Space>
        <Modal
          styles={{
            body: {},
          }}
          title={
            <Space>
              <Avatar src={data?.getUser?.avatar}></Avatar>
              <Typography>
                {data?.getUser?.firstName} {data?.getUser?.lastName}
              </Typography>
            </Space>
          }
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={
            <Button
              loading={loading}
              onClick={() =>
                add({
                  variables: {
                    input: {
                      description: message,
                      groupId: id,
                      image: fileList.map((set) => set.originFileObj),
                    },
                  },
                })
              }
              type="primary"
            >
              Post
            </Button>
          }
        >
          <Space style={{ width: "100%", marginTop: 20 }} direction="vertical">
            <InputEmoji
              onChange={setMessageForm}
              value={message}
              cleanOnEnter
              placeholder="Type a message"
            />

            <ImageUpload fileList={fileList} setFileList={setFileList} />

            {/* <QuestionCircleOutlined onClick={showModalPolls} /> */}
          </Space>
        </Modal>
      </Card>
    </Flex>
  );
};

export default Feed;

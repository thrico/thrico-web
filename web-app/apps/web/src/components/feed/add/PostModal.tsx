"use client";

import { useState } from "react";
import {
  Modal,
  Avatar,
  Input,
  Space,
  Button,
  Dropdown,
  Tooltip,
  UploadFile,
} from "antd";
import {
  CloseOutlined,
  CaretDownOutlined,
  PictureOutlined,
  SettingOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { useGetUser } from "@/graphql/actions";
import { MenuProps } from "antd/lib";
import ImageUpload from "./ImageUpload";
import UserAvatar from "@/components/avatar/Avatar";
const { TextArea } = Input;

export default function PostModal({ isModalOpen, handleClose, add, loading }) {
  const { data } = useGetUser();
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const privacyItems = [
    {
      key: "CONNECTIONS",
      label: "Connections only",
    },
    {
      key: "PUBLIC",
      label: "Anyone",
    },
  ];
  const [privacy, setPrivacy] = useState(privacyItems[0]);
  const [description, setDescription] = useState("");
  const onClick: MenuProps["onClick"] = ({ key }) => {
    setPrivacy(privacyItems.find((t) => t?.key === key));
  };

  return (
    <Modal
      open={isModalOpen}
      footer={null}
      closable={false}
      width={700}
      style={{ top: 56 }}
    >
      <div style={{ padding: "16px 24px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 16,
          }}
        >
          <Space>
            <UserAvatar src={data?.getUser.avatar} size={48} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 16, fontWeight: 600 }}>
                {data?.getUser.firstName} {data?.getUser.lastName}
              </span>
              <Dropdown menu={{ items: privacyItems, onClick }}>
                <Button
                  variant="text"
                  size="small"
                  style={{ padding: "0 8px" }}
                  icon={<CaretDownOutlined />}
                >
                  {privacy.label}
                </Button>
              </Dropdown>
            </div>
          </Space>
          <Button type="text" icon={<CloseOutlined />} onClick={handleClose} />
        </div>

        <TextArea
          placeholder="What do you want to talk about?"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          variant="borderless"
          style={{ borderRadius: 0, height: 200, marginBottom: 20 }}
          maxLength={1000}
          showCount
        />
      </div>

      <div
        style={{
          borderTop: "1px solid #f0f0f0",
          padding: "12px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Space size="middle">
          <Tooltip title="Add media">
            <ImageUpload fileList={fileList} setFileList={setFileList} />
          </Tooltip>
          <Tooltip title="Add settings">
            <Button type="text" icon={<SettingOutlined />} />
          </Tooltip>

          <Tooltip title="More options">
            <Button type="text" icon={<PlusOutlined />} />
          </Tooltip>
        </Space>

        <Space>
          {/* <Button type="text" icon={<ClockCircleOutlined />} /> */}
          <Button
            loading={loading}
            onClick={() =>
              add({
                description,
                media: [],
              })
            }
            type="primary"
            disabled={!description}
          >
            Post
          </Button>
        </Space>
      </div>
    </Modal>
  );
}

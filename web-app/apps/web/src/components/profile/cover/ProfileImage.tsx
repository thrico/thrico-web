import React, { useEffect, useState } from "react";
import {
  Modal,
  Tabs,
  Button,
  Space,
  GetProp,
  message,
  Upload,
  Popconfirm,
} from "antd";
import {
  CloseOutlined,
  CameraOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import { UploadProps } from "antd/lib";
import ImgCrop from "antd-img-crop";
import NextImage from "@/components/common/Image";
import { updateProfileAvatar } from "@/graphql/actions/profile";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];
const getBase64 = (img: FileType, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};
const ProfileImage = ({ url }) => {
  const [updateAvatar, { loading }] = updateProfileAvatar({});

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleClose = () => {
    setIsModalVisible(false);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };
  const [imageUrl, setImageUrl] = useState("");
  const [cover, setCover] = useState("");
  useEffect(() => {
    if (url) {
      setImageUrl(`https://cdn.thrico.network/${url}`);
    }
  }, [url]);

  const handleChange: UploadProps["onChange"] = (info) => {
    console.log(info);
    if (info.file.status === "uploading") {
      return;
    }
    if (info.file.status === "done") {
      setCover(info.file.originFileObj as FileType);
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as FileType, (url) => {
        setImageUrl(url);
      });
    }
  };

  const beforeUpload = (file: FileType) => {
    const isJpgOrPng =
      file.type === "image/jpeg" ||
      file.type === "image/png" ||
      file.type === "image/webp";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG/WEBP file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };
  const dummyRequest = ({ file, onSuccess }: any) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };
  return (
    <>
      <Button
        onClick={showModal}
        icon={<CameraOutlined />}
        style={{ position: "absolute", left: "10%", top: 250, zIndex: 10 }}
      />
      <Modal
        title="Profile photo"
        open={isModalVisible}
        onCancel={handleClose}
        footer={null}
        width={800}
        closeIcon={<CloseOutlined />}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              position: "relative",
              marginBottom: "20px",
              overflow: "hidden",
              width: 200,
              height: 200,
              borderRadius: "50%",
            }}
          >
            <Image
              src={
                imageUrl
                  ? imageUrl
                  : "https://cdn.thrico.network/default_profile_cover.jpg"
              }
              layout="fill"
              objectFit="cover"
              alt="alt"
            />
          </div>
        </div>

        <Tabs defaultActiveKey="crop" />

        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={() => setCover("")}
            okText="Yes"
            cancelText="No"
          >
            <Button icon={<DeleteOutlined />} danger>
              Delete photo
            </Button>
          </Popconfirm>
          <Space>
            <ImgCrop rotationSlider aspectSlider>
              <Upload
                style={{ width: "100%" }}
                showUploadList={false}
                customRequest={dummyRequest}
                beforeUpload={beforeUpload}
                onChange={handleChange}
              >
                <Button>Change photo</Button>
              </Upload>
            </ImgCrop>

            <Button
              disabled={cover === ""}
              onClick={() =>
                updateAvatar({
                  variables: {
                    input: { avatar: cover },
                  },
                })
              }
              type="primary"
              loading={loading}
            >
              Apply
            </Button>
          </Space>
        </div>
      </Modal>
    </>
  );
};

export default ProfileImage;

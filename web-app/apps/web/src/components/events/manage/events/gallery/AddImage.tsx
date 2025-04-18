import React, { useState } from "react";
import { Button, Card, Divider, Form, Input, Modal, Space, Upload } from "antd";
import AddButton from "@repo/ui/AddButton";
import type { GetProp, UploadFile, UploadProps } from "antd";
import { useParams } from "next/navigation";
import { addEventMedia, addVenue } from "../../../../../graphql/actions/events";
import ImgCrop from "antd-img-crop";
import { PlusOutlined } from "@ant-design/icons";
type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];
const AddImage = () => {
  const { slug } = useParams();

  const [form] = Form.useForm();

  const onCompleted = () => {
    handleCancel();
    form.resetFields();
  };
  const [add, { loading }] = addEventMedia({
    onCompleted,
    slug,
  });
  const onFinish = (values: any) => {
    const input = {
      mediaType: "image",
      file: fileList.map((set) => set.originFileObj),
      event: slug,
    };

    add({
      variables: {
        input,
      },
    });
  };

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
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const onChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as FileType);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
  const dummyRequest = ({ file, onSuccess }: any) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };

  return (
    <>
      <Space onClick={showModal}>
        <Button icon={<PlusOutlined />}>Add Image</Button>
      </Space>
      <Modal
        footer={[]}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          form={form}
          name="register"
          onFinish={onFinish}
          style={{ maxWidth: "100%" }}
          scrollToFirstError
          initialValues={{ items: [{}] }}
          layout="vertical"
        >
          <Card
            title="Add Media"
            extra={
              <Space>
                <Divider style={{ width: "100%" }} />
                <Divider type="vertical" />
                <Button
                  disabled={fileList.length === 0}
                  loading={loading}
                  type="primary"
                  htmlType="submit"
                >
                  Add
                </Button>
                <Button>Cancel</Button>
              </Space>
            }
          >
            <ImgCrop rotationSlider aspectSlider>
              <Upload
                listType="picture-card"
                fileList={fileList}
                onChange={onChange}
                onPreview={onPreview}
                customRequest={dummyRequest}
              >
                {fileList.length < 20 && "+ Upload"}
              </Upload>
            </ImgCrop>
          </Card>
        </Form>
      </Modal>
    </>
  );
};

export default AddImage;

import React, { useState } from "react";
import { Button, Upload } from "antd";
import type { GetProp, UploadFile, UploadProps } from "antd";
import ImgCrop from "antd-img-crop";
import { PictureOutlined } from "@ant-design/icons";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const ImageUpload = ({ fileList, setFileList }) => {
  const onChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  console.log(fileList.map((set) => console.log(set.originFileObj)));

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

  return (
    <>
      <ImgCrop grid rotate rotationSlider aspectSlider>
        <Upload
          action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
          fileList={fileList}
          onChange={onChange}
          onPreview={onPreview}
          previewFile={(file) => console.log("Your upload file:", file)}
        >
          <Button type="text" icon={<PictureOutlined />} />
        </Upload>
      </ImgCrop>
    </>
  );
};

export default ImageUpload;

import React, { useCallback, useState } from "react";
import {
  Button,
  Card,
  Drawer,
  Flex,
  Form,
  Layout,
  Modal,
  Space,
  Steps,
  Upload,
  UploadFile,
  UploadProps,
} from "antd";
import Cover from "./Cover";

import { createEvent } from "../../../graphql/actions/events";
import { Step1Props, Step3Props } from "../../../types/ts-types";
import { postJob } from "../../../graphql/actions/jobs";
import MarketPlaceForm from "./steps/Form";
import SubmitButton from "./steps/SubmitButton";
import ImgCrop from "antd-img-crop";
import Preview from "./steps/Preview";
import { postListing } from "../../../graphql/actions/marketPlace";

interface props {
  refresh?: any;
}
const { Header, Content, Sider } = Layout;
const CreateListing = ({ refresh }: props) => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const [current, setCurrent] = useState(0);

  const [form] = Form.useForm();
  const title = Form.useWatch("title", form);
  const price = Form.useWatch("price", form);
  const currency = Form.useWatch("currency", form);
  const condition = Form.useWatch("condition", form);
  const description = Form.useWatch("description", form);
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
  const onFinish = (values: any) => {
    post({
      variables: {
        input: {
          ...values,
          images: fileList.map((set) => set.originFileObj),
        },
      },
    });
  };
  const onCompleted = () => {
    onClose();
    form.resetFields();
    setFileList([]);
  };
  const [post, { loading }] = postListing({
    onCompleted,
  });

  return (
    <>
      <Button
        style={{ width: "100%", marginTop: 20 }}
        type="primary"
        onClick={showDrawer}
      >
        Post A Listing
      </Button>

      <Drawer
        title="Post A Listing"
        placement={"bottom"}
        width={500}
        height={"100%"}
        onClose={onClose}
        open={open}
      >
        <Layout style={{ height: "100%" }}>
          <Form onFinish={onFinish} form={form} layout="vertical">
            <Card
              style={{
                backgroundColor: "white",
                height: "100%",
              }}
              extra={
                <Space>
                  <Button loading={loading} htmlType="submit">
                    Save As Draft
                  </Button>

                  <SubmitButton form={form}>Publish</SubmitButton>
                </Space>
              }
            >
              <Sider
                style={{
                  backgroundColor: "white",
                  overflowY: "auto",
                  maxHeight: "calc(100vh - 200px)",
                }}
                width={300}
              >
                <Card style={{ marginBottom: 20 }}>
                  <Form.Item
                    label={` Upload up to 10 photos – ${fileList.length}/10 `}
                  >
                    <ImgCrop rotationSlider aspectSlider>
                      <Upload
                        listType="picture"
                        fileList={fileList}
                        onChange={onChange}
                        onPreview={onPreview}
                        customRequest={dummyRequest}
                      >
                        {fileList.length < 10 && <Button>Upload</Button>}
                      </Upload>
                    </ImgCrop>
                  </Form.Item>
                </Card>
                <MarketPlaceForm currency={currency} />
              </Sider>
            </Card>
          </Form>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Flex style={{ width: "100%" }} justify="center" align="center">
                <Preview
                  currency={currency}
                  title={title}
                  price={price}
                  condition={condition}
                  description={description}
                  fileList={fileList}
                />
              </Flex>
            </Content>
          </Layout>
        </Layout>
      </Drawer>
    </>
  );
};

export default CreateListing;

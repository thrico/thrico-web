import React, { useState } from "react";
import { Button, Card, Divider, Form, Input, Modal, Space, Upload } from "antd";
import AddButton from "@repo/ui/AddButton";

import { useParams } from "next/navigation";
import { applyJob } from "../../../graphql/actions/jobs";
import { CheckCircleOutlined, InboxOutlined } from "@ant-design/icons";

const ApplyJob = () => {
  const { slug } = useParams();

  const [form] = Form.useForm();

  const onCompleted = () => {
    handleCancel();
    form.resetFields();
  };
  const [add, { loading }] = applyJob({
    onCompleted,
    slug,
  });
  const onFinish = (values: any) => {
    add({
      variables: {
        input: { ...values, event: slug },
      },
    });
    console.log("Received values of form: ", values);
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
  const normFile = (e: any) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  return (
    <>
      <Space>
        <Button
          onClick={showModal}
          loading={loading}
          type="primary"
          icon={<CheckCircleOutlined />}
        >
          Apply
        </Button>
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
            title="Apply"
            extra={
              <Space>
                <Divider style={{ width: "100%" }} />
                <Divider type="vertical" />
                <Button loading={loading} type="primary" htmlType="submit">
                  Apply
                </Button>
                <Button>Cancel</Button>
              </Space>
            }
          >
            <Form.Item
              initialValue={"Pankaj Verma"}
              name="fullName"
              label="Full Name"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please input  Full Name",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              initialValue={"pankaj.verma.pulseplaydigital@gmail.com"}
              rules={[
                {
                  required: true,
                  message: "Please input Email",
                },
              ]}
              name="email"
              label="Email"
              hasFeedback
            >
              <Input />
            </Form.Item>
            <Form.Item
              initialValue={"9419237687"}
              rules={[
                {
                  required: true,
                  message: "Please input Email",
                },
              ]}
              name="phone"
              label="Phone"
              hasFeedback
            >
              <Input />
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please input Email",
                },
              ]}
              label="Upload Resume"
            >
              <Form.Item
                name="dragger"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                noStyle
              >
                <Upload.Dragger name="files" action="/upload.do">
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">
                    Click or drag file to this area to upload
                  </p>
                  <p className="ant-upload-hint">
                    Support for a single or bulk upload.
                  </p>
                </Upload.Dragger>
              </Form.Item>
            </Form.Item>
          </Card>
        </Form>
      </Modal>
    </>
  );
};

export default ApplyJob;

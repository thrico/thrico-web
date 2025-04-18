import React, { useState } from "react";
import { Button, Card, Divider, Form, Input, Modal, Space } from "antd";
import AddButton from "@repo/ui/AddButton";

import { useParams } from "next/navigation";
import { addVenue } from "../../../../../../../graphql/actions/events";

const AddVenue = () => {
  const { slug } = useParams();

  const [form] = Form.useForm();

  const onCompleted = () => {
    handleCancel();
    form.resetFields();
  };
  const [add, { loading }] = addVenue({
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

  return (
    <>
      <Space onClick={showModal}>
        <AddButton />
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
            title="Add Venue"
            extra={
              <Space>
                <Divider style={{ width: "100%" }} />
                <Divider type="vertical" />
                <Button loading={loading} type="primary" htmlType="submit">
                  Add
                </Button>
                <Button>Cancel</Button>
              </Space>
            }
          >
            <Form.Item
              name="venue"
              label="Venue"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please input  Venue",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please input  Address",
                },
              ]}
              name="address"
              label="Address"
              hasFeedback
            >
              <Input />
            </Form.Item>
          </Card>
        </Form>
      </Modal>
    </>
  );
};

export default AddVenue;

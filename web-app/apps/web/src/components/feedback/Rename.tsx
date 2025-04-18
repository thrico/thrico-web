import React, { useState } from "react";
import { Button, Card, Form, Input, Modal, Space } from "antd";
import {
  addFeedBackForm,
  editFeedBackForm,
} from "../../graphql/actions/feedback";

const Rename = ({ isModalOpen, handleOk, handleCancel, type, id, record }) => {
  const [form] = Form.useForm();
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  const onCompleted = () => {
    handleCancel();
    form.resetFields();
  };

  const [edit, { loading, error }] = editFeedBackForm({
    onCompleted,
    type,
  });

  const onFinish = (values: any) => {
    edit({
      variables: {
        input: {
          id: record.id,
          type,
          ...values,
        },
      },
    });
  };
  return (
    <>
      <Modal
        title=""
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          style={{ maxWidth: 600 }}
          scrollToFirstError
          initialValues={{ items: [{}] }}
        >
          <Card
            title="Rename Title"
            extra={[
              <>
                <Space>
                  <Button loading={loading} type="primary" htmlType="submit">
                    Edit
                  </Button>
                  <Button onClick={() => handleCancel()}>Cancel</Button>
                </Space>
              </>,
            ]}
          >
            <Form.Item
              initialValue={record?.title}
              name="title"
              label="Give it a name"
              hasFeedback
              rules={[{ required: true }]}
              style={{ width: "100%" }}
            >
              <Input />
            </Form.Item>
          </Card>
        </Form>
      </Modal>
    </>
  );
};

export default Rename;

import React, { useState } from "react";
import {
  Button,
  Card,
  Form,
  Input,
  InputNumber,
  Modal,
  Select,
  Space,
} from "antd";
import AddButton from "@repo/ui/AddButton";

import { useParams } from "next/navigation";
import { PlusCircleOutlined } from "@ant-design/icons";
import { addFeedBackForm } from "../../graphql/actions/feedback";

const Add = ({ type }) => {
  const { slug } = useParams();
  const [modalOpen, setModalOpen] = useState(false);

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
    setModalOpen(false);
  };

  const [add, { loading, error }] = addFeedBackForm({
    onCompleted,
    type,
  });

  const onFinish = (values: any) => {
    add({
      variables: {
        input: {
          type,
          ...values,
        },
      },
    });
  };

  return (
    <>
      <Space>
        <Button
          onClick={() => setModalOpen(true)}
          icon={<PlusCircleOutlined />}
          type="primary"
        >
          Add Form
        </Button>
      </Space>
      <Modal
        width={600}
        footer={[]}
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
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
            title="What are you creating?"
            extra={[
              <>
                <Space>
                  <Button loading={loading} type="primary" htmlType="submit">
                    Add
                  </Button>
                  <Button onClick={() => setModalOpen(false)}>Cancel</Button>
                </Space>
              </>,
            ]}
          >
            <Form.Item
              initialValue={"My New FeedBack Form"}
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

export default Add;

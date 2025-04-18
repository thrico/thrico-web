import React, { useState } from "react";
import { Button, Form, Modal, Space, Tag, theme } from "antd";
import EditButton from "@repo/ui/EditButton";
import SelectTag from "@/components/tag/Tag";
import { editProfileTag } from "@/graphql/actions/profile";

const EditTags = ({ data }) => {
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

  const onCompleted = () => {
    handleCancel();
  };
  const [update, { loading }] = editProfileTag({
    onCompleted,
  });
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    update({
      variables: {
        input: values,
      },
    });
  };

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tags = Form.useWatch("tag", form);
  const {
    token: { colorPrimary },
  } = theme.useToken();
  return (
    <>
      <Space onClick={showModal}>
        <EditButton />
      </Space>

      <Modal
        footer={false}
        title="Interests and tags"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Space style={{ margin: 20 }} wrap>
          {tags?.map((set: any) => <Tag color={colorPrimary}>{set}</Tag>)}
        </Space>
        <Form
          {...layout}
          form={form}
          name="control-hooks"
          onFinish={onFinish}
          style={{ maxWidth: 600 }}
          initialValues={{
            tag: data,
          }}
        >
          <SelectTag />

          <Form.Item
            style={{ marginTop: 30 }}
            wrapperCol={{ offset: 6, span: 16 }}
          >
            <Button loading={loading} type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default EditTags;

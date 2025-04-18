import React, { useState } from "react";
import { Button, Card, Flex, Form, Modal, Select, Space } from "antd";
import AddButton from "@repo/ui/AddButton";

import { IoIosArrowDropdown } from "react-icons/io";
import { useParams } from "next/navigation";
import { addFeedBackQuestion } from "../../../graphql/actions/feedback";
import { MdDriveFolderUpload } from "react-icons/md";
const Add = () => {
  const { id } = useParams();
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
    form.resetFields();
  };

  const onFinish = (values: any) => {
    add({
      variables: {
        input: {
          ...values,
          id: id,
        },
      },
    });
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const [add, { loading, error }] = addFeedBackQuestion({
    onCompleted,
    id: id,
  });

  return (
    <>
      <Space onClick={() => setModalOpen(true)}>
        <AddButton />
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
            title="Add Field"
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
              name="type"
              label="Select Question Type"
              hasFeedback
              rules={[{ required: true }]}
              style={{ width: "100%" }}
            >
              <Select
                defaultValue={"multipleChoice"}
                onChange={handleChange}
                style={{ width: 200 }}
                options={[
                  {
                    label: <Flex>Choices</Flex>,
                    title: "choices",
                    options: [
                      {
                        label: <Flex>Dropdown</Flex>,
                        value: "dropdown",
                      },

                      {
                        label: <Flex>Multiple Choice</Flex>,
                        value: "multipleChoice",
                      },
                      {
                        label: <Flex>Picture Choice</Flex>,
                        value: "pictureChoice",
                      },
                      {
                        label: <Flex>Yes/No</Flex>,
                        value: "yes/no",
                      },
                    ],
                  },

                  {
                    label: <Flex> Text</Flex>,
                    title: "text",
                    options: [
                      {
                        label: <Flex>Short Text</Flex>,
                        value: "shortText",
                      },

                      {
                        label: <Flex>Long Text</Flex>,
                        value: "longText",
                      },
                    ],
                  },

                  {
                    label: <Flex>Number</Flex>,
                    title: "number",
                    options: [
                      {
                        label: <Flex>Number</Flex>,
                        value: "number",
                      },
                    ],
                  },

                  {
                    label: <Flex> Rating & ranking</Flex>,
                    title: "rating",
                    options: [
                      {
                        label: <Flex>Opinion Scale</Flex>,
                        value: "opinionScale",
                      },
                      {
                        label: <Flex>Rating</Flex>,
                        value: "rating",
                      },
                    ],
                  },
                  {
                    label: <Flex>Contact info</Flex>,
                    title: "contact",
                    options: [
                      {
                        label: <Flex>Address</Flex>,
                        value: "address",
                      },
                      {
                        label: <Flex>Contact Info</Flex>,
                        value: "contactInfo",
                      },
                      {
                        label: <Flex>Email</Flex>,
                        value: "email",
                      },
                      {
                        label: <Flex>Website</Flex>,
                        value: "website",
                      },
                      {
                        label: <Flex>Phone</Flex>,
                        value: "phone",
                      },
                    ],
                  },
                  {
                    label: <Flex> Legal & consent</Flex>,
                    title: "legal",
                    options: [
                      {
                        label: <Flex>Legal</Flex>,
                        value: "legal",
                      },
                    ],
                  },
                  {
                    label: <Flex>Upload</Flex>,
                    title: "upload",
                    options: [
                      {
                        label: <Flex>File Upload</Flex>,
                        value: "fileUpload",
                      },
                    ],
                  },
                ]}
              />
            </Form.Item>
          </Card>
        </Form>
      </Modal>
    </>
  );
};

export default Add;

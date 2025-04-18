import React, { useState } from "react";
import {
  Avatar,
  Button,
  Card,
  Divider,
  Flex,
  Form,
  Input,
  List,
  Modal,
  Select,
  Space,
} from "antd";
import AddButton from "@repo/ui/AddButton";

import { useParams } from "next/navigation";
import { addSpeaker } from "../../../../../../../graphql/actions/events";
import FormItem from "antd/es/form/FormItem";
import Cover from "../../../../../add/Cover";
import TextArea from "antd/es/input/TextArea";
import { getAllOrganizationUser } from "../../../../../../../graphql/actions/alumni";
import { user } from "../../../../../../ts-types/types";

const AddSpeakers = () => {
  const { slug } = useParams();
  const { data, loading: load } = getAllOrganizationUser({});
  const [form] = Form.useForm();
  const type = Form.useWatch("type", form);
  const speaker = Form.useWatch("speaker", form);
  const onCompleted = () => {
    handleCancel();
    form.resetFields();
  };
  const [add, { loading }] = addSpeaker({
    onCompleted,
    slug,
  });
  const onFinish = (values: any) => {
    if (type === "external") {
      add({
        variables: {
          input: {
            ...values,
            event: slug,
            cover: cover === "" ? null : cover,
            speaker: slug,
          },
        },
      });
    } else {
      add({
        variables: {
          input: {
            ...values,
            event: slug,
          },
        },
      });
    }
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
  const [imageUrl, setImageUrl] = useState<string>("");
  const [cover, setCover] = useState<string>("");

  return (
    <>
      <Space onClick={showModal}>
        <AddButton />
      </Space>
      <Modal
        width={700}
        style={{ top: 10 }}
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
            <FormItem name="type" label="Type of Speaker">
              <Select
                showSearch
                placeholder="Select"
                optionFilterProp="children"
                options={[
                  {
                    label: "Internal",
                    value: "internal",
                  },
                  {
                    label: "External",
                    value: "external",
                  },
                ]}
              />
            </FormItem>

            {type === "internal" && (
              <Flex justify="space-between" wrap="wrap">
                <Form.Item
                  name="speaker"
                  style={{ width: "100%" }}
                  label="Select Speaker"
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Please input Speaker Name",
                    },
                  ]}
                >
                  <Select
                    showSearch
                    loading={load}
                    placeholder="Select"
                    optionFilterProp="children"
                    options={data?.getAllOrganizationUser.map((set: user) => ({
                      label: `${set?.firstName} ${set?.lastName} - (${set?.aboutAlumni?.currentPosition}) `,
                      value: set?.id,
                    }))}
                  />
                </Form.Item>

                {speaker && (
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        <Avatar
                          src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${data?.getAllOrganizationUser.find(
                            (set: user) => set.id === speaker
                          )?.avatar}`}
                        />
                      }
                      title={`${data?.getAllOrganizationUser.find(
                        (set: user) => set.id === speaker
                      )?.firstName} ${data?.getAllOrganizationUser.find(
                        (set: user) => set.id === speaker
                      )?.lastName}`}
                      description={
                        data?.getAllOrganizationUser.find(
                          (set: user) => set.id === speaker
                        )?.aboutAlumni?.currentPosition
                      }
                    />
                  </List.Item>
                )}
              </Flex>
            )}
            {type === "external" && (
              <Flex justify="space-between" wrap="wrap">
                <Cover
                  setCover={setCover}
                  imageUrl={imageUrl}
                  setImageUrl={setImageUrl}
                  buttonText="Update Speaker Profile Image"
                />
                <Form.Item
                  name="name"
                  style={{ width: "45%" }}
                  label="Speaker Name"
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Please input Speaker Name",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  style={{ width: "48%" }}
                  name="linkedin"
                  label="Linkedin"
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Please input Speaker Name",
                    },
                  ]}
                >
                  <Input addonBefore="https://linkedin.com/" />
                </Form.Item>
                <Form.Item
                  style={{ width: "100%" }}
                  name="about"
                  label="About Speakers"
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Please input  About Speakers",
                    },
                  ]}
                >
                  <TextArea rows={5} />
                </Form.Item>
              </Flex>
            )}
          </Card>
        </Form>
      </Modal>
    </>
  );
};

export default AddSpeakers;

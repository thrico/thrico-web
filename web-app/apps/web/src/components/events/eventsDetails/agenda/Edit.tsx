import React, { useState } from "react";
import {
  Button,
  Card,
  DatePicker,
  Form,
  Input,
  Modal,
  Segmented,
  Select,
  Space,
  Typography,
  Upload,
} from "antd";
import EditButton from "@repo/ui/EditButton";
import TextArea from "antd/es/input/TextArea";

import {
  CloseOutlined,
  GlobalOutlined,
  LockOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { MdOutlineEventSeat } from "react-icons/md";
import { GiVideoConference } from "react-icons/gi";
import { RiLiveLine } from "react-icons/ri";
const Edit = () => {
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
  const { Option } = Select;
  const [form] = Form.useForm();
  const onFinish = (values: any) => {};
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
  const { RangePicker } = DatePicker;
  const eventType = Form.useWatch("eventType", form);
  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  const dummyRequest = ({ file, onSuccess }: any) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };

  return (
    <>
      <Space onClick={showModal}>
        <EditButton />
      </Space>

      <Modal
        style={{ top: 10 }}
        title=""
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
        width={900}
      >
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          scrollToFirstError
        >
          <Card
            extra={[
              <Space style={{ position: "sticky", top: 10, zIndex: 10 }}>
                <Button type="primary" htmlType="submit">
                  Update
                </Button>
                <Button onClick={handleCancel}>Cancel</Button>
              </Space>,
            ]}
          >
            <Form
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 18 }}
              form={form}
              name="dynamic_form_complex"
              style={{ maxWidth: 900 }}
              autoComplete="off"
              initialValues={{ items: [{}] }}
            >
              <Form.List name="items">
                {(fields, { add, remove }) => (
                  <div
                    style={{
                      display: "flex",
                      rowGap: 16,
                      flexDirection: "column",
                    }}
                  >
                    {fields.map((field) => (
                      <Card
                        size="small"
                        title={`Day ${field.name + 1}`}
                        key={field.key}
                        extra={
                          <CloseOutlined
                            onClick={() => {
                              remove(field.name);
                            }}
                          />
                        }
                      >
                        <Form.Item label="Title" name={[field.name, "title"]}>
                          <Input />
                        </Form.Item>

                        {/* Nest Form.List */}
                        <Form.Item label="List">
                          <Form.List name={[field.name, "list"]}>
                            {(subFields, subOpt) => (
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  rowGap: 16,
                                }}
                              >
                                {subFields.map((subField) => (
                                  <Space key={subField.key}>
                                    <Form.Item
                                      noStyle
                                      name={[subField.name, "Title"]}
                                    >
                                      <Input placeholder="Title" />
                                    </Form.Item>
                                    <Form.Item
                                      noStyle
                                      name={[subField.name, "description"]}
                                    >
                                      <TextArea placeholder="Description" />
                                    </Form.Item>
                                    <Form.Item
                                      valuePropName="fileList"
                                      getValueFromEvent={normFile}
                                    >
                                      <Upload
                                        customRequest={dummyRequest}
                                        listType="picture-card"
                                      >
                                        <button
                                          style={{
                                            border: 0,
                                            background: "none",
                                          }}
                                          type="button"
                                        >
                                          <PlusOutlined />
                                          <div style={{ marginTop: 8 }}>
                                            Upload
                                          </div>
                                        </button>
                                      </Upload>
                                    </Form.Item>
                                    <CloseOutlined
                                      onClick={() => {
                                        subOpt.remove(subField.name);
                                      }}
                                    />
                                  </Space>
                                ))}
                                <Button
                                  type="dashed"
                                  onClick={() => subOpt.add()}
                                  block
                                >
                                  + Add Agenda
                                </Button>
                              </div>
                            )}
                          </Form.List>
                        </Form.Item>
                      </Card>
                    ))}

                    <Button type="dashed" onClick={() => add()} block>
                      + Add Day
                    </Button>
                  </div>
                )}
              </Form.List>
            </Form>
          </Card>
        </Form>
      </Modal>
    </>
  );
};

export default Edit;

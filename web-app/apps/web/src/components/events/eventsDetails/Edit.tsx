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
} from "antd";
import EditButton from "@repo/ui/EditButton";
import TextArea from "antd/es/input/TextArea";
import Cover from "../add/Cover";
import { GlobalOutlined, LockOutlined } from "@ant-design/icons";
import { MdOutlineEventSeat } from "react-icons/md";
import { GiVideoConference } from "react-icons/gi";
import { RiLiveLine } from "react-icons/ri";
const Edit = () => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [cover, setCover] = useState<string>();
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
  return (
    <>
      <Space onClick={showModal}>
        <EditButton />
      </Space>

      <Modal
        title=""
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
        width={700}
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
            <Cover
              setCover={setCover}
              imageUrl={imageUrl}
              setImageUrl={setImageUrl}
            />
            <Form.Item
              hasFeedback
              name="name"
              label="Event Name"
              rules={[
                {
                  required: true,
                  message: "Please input Event Name",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="eventType"
              label="Event Type"
              hasFeedback
              rules={[{ required: true }]}
              style={{ width: "100%" }}
              initialValue={"virtual"}
            >
              <Segmented
                options={[
                  {
                    label: "Virtual",
                    value: "virtual",
                    icon: <MdOutlineEventSeat />,
                  },
                  {
                    label: "In Person",
                    value: "inPerson",
                    icon: <GiVideoConference />,
                  },
                  { label: "Hybrid", value: "hybrid", icon: <RiLiveLine /> },
                ]}
              />
            </Form.Item>
            {eventType !== "virtual" && (
              <Form.Item
                hasFeedback
                name="venue"
                label="Event Venue"
                rules={[
                  {
                    required: true,
                    message: "Please input Venue",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            )}

            <Form.Item
              name="eventVisibility"
              label="Event Visibility"
              hasFeedback
              rules={[{ required: true }]}
              style={{ width: "100%" }}
              initialValue={"public"}
            >
              <Segmented
                options={[
                  {
                    label: "Public",
                    value: "public",
                    icon: <GlobalOutlined />,
                  },
                  {
                    label: "Private",
                    value: "private",
                    icon: <LockOutlined />,
                  },
                ]}
              />
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                },
              ]}
              name="range-picker"
              label="Event Timing"
            >
              <RangePicker showTime />
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                },
              ]}
              name="endDate"
              label="Registration End date "
            >
              <DatePicker />
            </Form.Item>
          </Card>
        </Form>
      </Modal>
    </>
  );
};

export default Edit;

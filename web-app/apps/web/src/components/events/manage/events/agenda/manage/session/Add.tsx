import React, { useState } from "react";
import {
  Button,
  Card,
  DatePicker,
  Divider,
  Drawer,
  Form,
  Input,
  Space,
  Switch,
  TimePicker,
} from "antd";
import AddButton from "@repo/ui/AddButton";

import { addAgenda } from "../../../../../../../graphql/actions/events";
import { useParams } from "next/navigation";
import Editor from "../../../../../../common/editor/Editor";

import SelectVenue from "./SelectVenue";
import SelectSpeakers from "./SelectSpeakers";
import { RangePickerProps } from "antd/es/date-picker";
import dayjs from "dayjs";
import moment from "moment";

const Add = () => {
  const { slug } = useParams();

  const [form] = Form.useForm();

  const onCompleted = () => {
    setOpen(false);
    form.resetFields();
  };
  const [add, { loading }] = addAgenda({
    onCompleted,
    slug,
  });
  const onFinish = (values: any) => {
    add({
      variables: {
        input: { ...values, event: slug },
      },
    });
  };

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const disabledDate: RangePickerProps["disabledDate"] = (current) => {
    return current && current < dayjs().endOf("day");
  };

  return (
    <>
      <Space onClick={showDrawer}>
        <AddButton />
      </Space>
      <Drawer width={"700px"} title="Add Session" onClose={onClose} open={open}>
        <Form
          form={form}
          name="register"
          onFinish={onFinish}
          style={{ maxWidth: "100%" }}
          scrollToFirstError
          initialValues={{ items: [{}] }}
          layout="vertical"
        >
          <Card>
            <Form.Item
              name="title"
              label="Title"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please input  Sponsor type",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item name="videoSteam" label="Video Steam" hasFeedback>
              <Input />
            </Form.Item>
            <Space split={<Divider type="vertical" />} direction="horizontal">
              <Form.Item name="date" label="Select Date">
                <DatePicker
                  defaultValue={[moment(), moment().add(7, "days")]}
                  disabledDate={disabledDate}
                />
              </Form.Item>
              <Form.Item name="startTime" label="Start Time">
                <TimePicker format="HH:mm" />
              </Form.Item>
              <Form.Item name="endTime" label="End Time">
                <TimePicker format="HH:mm" />
              </Form.Item>
            </Space>

            <Form.Item name="venue" label="Venue" hasFeedback>
              <SelectVenue />
            </Form.Item>

            <Form.Item name="speakers" label="Speakers" hasFeedback>
              <SelectSpeakers />
            </Form.Item>
            <Form.Item
              initialValue={false}
              name="isPinned"
              label="Pin Session"
              hasFeedback
            >
              <Switch />
            </Form.Item>

            <Form.Item label="Description" hasFeedback>
              <Editor />
            </Form.Item>
          </Card>
          <Card
            style={{
              position: "sticky",
              bottom: 0,
              backgroundColor: "white",

              width: "100%",
            }}
          >
            <Space>
              <Divider style={{ width: "100%" }} />
              <Divider type="vertical" />
              <Button loading={loading} type="primary" htmlType="submit">
                Publish
              </Button>
              <Button onClick={() => setOpen(false)}>Save as Draft</Button>
            </Space>
          </Card>
        </Form>
      </Drawer>
    </>
  );
};

export default Add;

import React from "react";

import {
  Alert,
  Col,
  Collapse,
  DatePicker,
  Flex,
  Form,
  Input,
  InputNumber,
  Row,
  Segmented,
  Select,
  Space,
  Upload,
} from "antd";
import { MdOutlineEventSeat } from "react-icons/md";
import { GiVideoConference } from "react-icons/gi";
import { RiLiveLine } from "react-icons/ri";
import {
  CaretRightOutlined,
  GlobalOutlined,
  LockOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import moment from "moment";
import { EventFormProps } from "./types";
import Currency from "@/components/common/currency/Currency";
import SelectTag from "../../tag/Tag";

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
interface DataNodeType {
  value: string;
  label: string;
  children?: DataNodeType[];
}

const EventForm = ({
  eventCost,
  paymentMode,
  currency,
  eventType,
}: EventFormProps) => {
  const { RangePicker } = DatePicker;

  return (
    <Space style={{ width: "90%" }} direction="vertical">
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
            { label: "Public", value: "public", icon: <GlobalOutlined /> },
            { label: "Private", value: "private", icon: <LockOutlined /> },
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
        <RangePicker showSecond />
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

      <Form.Item
        rules={[{ required: true, min: 100, max: 200 }]}
        name="details"
        label="What are the details?"
      >
        <TextArea rows={5} showCount minLength={100} maxLength={200} />
      </Form.Item>
      <Flex
        style={{ marginBottom: 20 }}
        vertical
        justify="flex-end"
        align="flex-end"
        gap={20}
      >
        <Collapse
          style={{ width: "90%" }}
          collapsible="header"
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 0} />
          )}
          defaultActiveKey={["1"]}
          items={[
            {
              key: "1",
              label: "Events Cost",
              children: (
                <>
                  <Form.Item
                    name="eventCost"
                    label="Event Cost"
                    hasFeedback
                    rules={[{ required: true }]}
                    style={{ width: "100%" }}
                    initialValue={"free"}
                  >
                    <Segmented
                      options={[
                        {
                          label: "Free",
                          value: "free",
                        },
                        {
                          label: "Paid",
                          value: "paid",
                        },
                      ]}
                    />
                  </Form.Item>
                  {eventCost === "paid" && (
                    <>
                      <Form.Item
                        name="costPerAdults"
                        label="Cost Per Adults"
                        hasFeedback
                        rules={[{ required: true }]}
                        style={{ width: "100%" }}
                      >
                        <InputNumber min={1} addonAfter={<Currency />} />
                      </Form.Item>
                      <Form.Item
                        name="costPerChildren"
                        label="Cost Per Children"
                        hasFeedback
                        rules={[{ required: true }]}
                        style={{ width: "100%" }}
                      >
                        <InputNumber min={1} addonAfter={<Currency />} />
                      </Form.Item>
                    </>
                  )}
                </>
              ),
            },
          ]}
        />

        <Collapse
          style={{ width: "90%" }}
          collapsible="header"
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 0} />
          )}
          defaultActiveKey={["1"]}
          items={[
            {
              key: "1",
              label: "Events Host",
              children: (
                <>
                  <Form.Item
                    name="contactEmail"
                    label="Contact Email"
                    hasFeedback
                    initialValue={"test@gmail.com"}
                    rules={[{ required: true }]}
                    style={{ width: "100%" }}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    name="contactNumber"
                    label="Contact Number"
                    hasFeedback
                    initialValue={"9199912991229"}
                    rules={[{ required: true }]}
                    style={{ width: "100%" }}
                  >
                    <Input />
                  </Form.Item>
                </>
              ),
            },
          ]}
        />
      </Flex>

      <SelectTag />
      <Alert
        showIcon
        type="info"
        message="When you add an event, it will be published once it is approved."
      />
    </Space>
  );
};

export default EventForm;

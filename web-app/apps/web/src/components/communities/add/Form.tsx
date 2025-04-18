import React from "react";
import { Form, Input, Segmented } from "antd";
import { GlobalOutlined, LockOutlined } from "@ant-design/icons";

import {
  getGroupInterests,
  getGroupTheme,
} from "../../../graphql/actions/communities";
import { MdOutlineEventSeat } from "react-icons/md";
import { RiLiveLine } from "react-icons/ri";
import { GiVideoConference } from "react-icons/gi";
import Cover from "@/components/events/add/Cover";

interface props {
  privacy: string;
}
const AddForm = ({
  privacy,
  imageUrl,
  setImageUrl,
  cover,
  setCover,
}: props) => {
  const theme = getGroupTheme({});
  const interests = getGroupInterests({});
  return (
    <>
      <Cover
        setCover={setCover}
        imageUrl={imageUrl}
        setImageUrl={setImageUrl}
      />

      <Form.Item name={"name"} label="Name" rules={[{ required: true }]}>
        <Input showCount maxLength={50} minLength={10} />
      </Form.Item>

      <Form.Item name={"about"} label="About">
        <Input showCount maxLength={300} />
      </Form.Item>
      <Form.Item
        name="privacy"
        label="Choose Privacy"
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
        name="groupType"
        label="Group Type"
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
      <Form.Item
        name="joiningCondition"
        label="Community Joining Terms"
        hasFeedback
        rules={[{ required: true }]}
        style={{ width: "100%" }}
        initialValue={"Anyone Can Join"}
      >
        <Segmented
          options={[
            {
              label: "Anyone Can Join",
              value: "Anyone Can Join",
              icon: <MdOutlineEventSeat />,
            },
            {
              label: "Admin only Add",
              value: "Admin only Add",
              icon: <GiVideoConference />,
            },
          ]}
        />
      </Form.Item>

      {/* <Form.Item name="theme" label="Select Theme">
        <Select loading={theme.loading}>
          {theme?.data?.getGroupTheme?.map((set, key) => (
            <Select.Option key={key} value={set.id}>
              {set.title}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="interest" label="Select Interest">
        <Select loading={interests.loading}>
          {interests?.data?.getGroupInterests?.map((set, key) => (
            <Select.Option key={key} value={set.id}>
              {set.title}
            </Select.Option>
          ))}
        </Select>
      </Form.Item> */}

      {/* <SelectTag /> */}
    </>
  );
};

export default AddForm;

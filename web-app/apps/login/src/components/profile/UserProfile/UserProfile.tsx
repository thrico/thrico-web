import { Button, DatePicker, Flex, Form, Input, Select } from "antd";
import React from "react";

import TimeZone from "./TimeZone";
import Language from "./Language";
import Country from "./Country";

import dayjs from "dayjs";
import dynamic from "next/dynamic";
import { RangePickerProps } from "antd/es/date-picker";
import { Option } from "antd/es/mentions";
import { UserProfileProps } from "@/lib/types";
import TextArea from "antd/es/input/TextArea";

import GooglePlacesInput from "@/components/location/Google-places-autocomplete";
const PhoneNumber = dynamic(() => import("./PhoneNumber"), {
  ssr: false,
});

const UserProfile = ({
  profile,
  setProfile,
  setCurrent,
  getUser,
}: UserProfileProps) => {

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    const value = {
      ...values,
      DOB: values["month-picker"].format("YYYY/MM/DD"),
    };

    delete value["month-picker"];
    setProfile({
      ...value,
    });

    console.log(value, profile, "sdd")
    setCurrent(1);
  };

  const disabledDate: RangePickerProps["disabledDate"] = (current) => {
    // Can not select days before today and today
    return current && current > dayjs().endOf("day");
  };

  console.log(profile)
  return (
    <>
      <Form
        form={form}
        name="register"
        onFinish={onFinish}
        style={{
          marginTop: "2rem",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        scrollToFirstError
      >
        <Form.Item
          style={{ width: "47%" }}
          label="First Name"
          name="firstName"
          rules={[
            { required: true },
            { max: 50, message: "Max 50 characters allowed" },
          ]}
          hasFeedback
          initialValue={profile.fistName ? profile.fistName : getUser?.firstName}
        >
          <Input style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          hasFeedback
          style={{ width: "47%" }}
          label="Last Name"
          name="lastName"
          rules={[
            { required: true },
            { max: 50, message: "Max 50 characters allowed" },
          ]}
          initialValue={profile.lastName ? profile.lastName : getUser?.lastName}
        >
          <Input style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          hasFeedback
          style={{ width: "47%" }}
          label="Email"
          rules={[
            { required: true },
            { max: 100, message: "Max 50 characters allowed" },
          ]}
          initialValue={getUser?.email}
        >
          <Input
            disabled
            value={getUser?.email}
            readOnly
            style={{ width: "100%" }}
          />
        </Form.Item>

        {profile.DOB === "" && (
          <Form.Item
            hasFeedback
            style={{ width: "48%" }}
            name="month-picker"
            label="Date of Birth"
            rules={[
              { required: true, message: "Please input your Date of Birth" },
              {
                validator: (_, value) => {
                  if (value && dayjs().diff(value, "years") < 18) {
                    return Promise.reject(
                      new Error("Age must be greater than 18 years")
                    );
                  }
                  return Promise.resolve();
                },
              },
            ]}
          >
            <DatePicker disabledDate={disabledDate} style={{ width: "100%" }} />
          </Form.Item>
        )}
        {profile.DOB !== "" && (
          <Form.Item
            hasFeedback
            initialValue={dayjs(profile.DOB, "YYYY/MM/DD")}
            style={{ width: "48%" }}
            name="month-picker"
            label="Date of Birth"
            rules={[
              { required: true, message: "Please input your Date of Birth" },
            ]}
          >
            <DatePicker disabledDate={disabledDate} style={{ width: "100%" }} />
          </Form.Item>
        )}

        <Country country={profile.country} />
        <PhoneNumber phone={profile.phone} />
        <TimeZone timeZone={profile.timeZone} />
        <Language language={profile.language} />

        <Form.Item
          hasFeedback
          name="gender"
          initialValue={profile?.gender}
          label="Gender"
          style={{ width: "47%" }}
          rules={[{ required: true, message: "Please select your Gender" }]}
        >
          <Select>
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>
        <Form.Item
          hasFeedback
          name="pronouns"
          label="Pronouns"
          initialValue={profile?.pronouns}
          style={{ width: "47%" }}
          rules={[{ required: true, message: "Please select your Pronouns" }]}
        >
          <Select>
            <Option value="he/him">He/Him</Option>
            <Option value="she/her">She/Her</Option>
            <Option value="they/them">They/Them</Option>
          </Select>
        </Form.Item>

        <Form.Item
          hasFeedback
          style={{ width: "47%" }}
          label="Current position"
          name="currentPosition"
          rules={[
            { required: true },
            { max: 100, message: "Max 100 characters allowed" },
          ]}
          initialValue={profile?.currentPosition}
        >
          <Input style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          hasFeedback
          style={{ width: "47%" }}
          label="Headline"
          name="headline"
          rules={[
            { required: true, message: "Headline is required" },
            { max: 150, message: "Max 150 characters allowed" },
          ]}
          initialValue={profile?.headline}
        >
          <TextArea style={{ width: "100%" }} maxLength={150} showCount />
        </Form.Item>



        <Form.Item
          hasFeedback
          style={{ width: "47%" }}
          label="Location"
          name="location"
          rules={[{ required: true, message: "Please add location" }]}
          initialValue={profile.location}
        >
          <GooglePlacesInput
            initialValue={profile?.location}
            onChange={(value) => form.setFieldsValue({ location: value })}

          />

        </Form.Item>


        <Form.Item
          hasFeedback
          style={{ width: "47%" }}
          label="About"
          name="about"
          rules={[
            { required: true, message: "about is required" },
            { max: 500, message: "Max 500 characters allowed" },
          ]}
          initialValue={profile?.headline}
        >
          <TextArea style={{ width: "100%" }} maxLength={500} showCount />
        </Form.Item>
        <Flex style={{ width: "100%" }} justify="center" align="center">
          <Button type="primary" htmlType="submit">
            Next
          </Button>
        </Flex>
      </Form>
    </>
  );
};

export default UserProfile;

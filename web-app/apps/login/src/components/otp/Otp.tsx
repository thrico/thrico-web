"use client";

import React, { useState } from "react";
import { Button, Flex, Form, GetProp, Input, Typography } from "antd";

import { useParams, useRouter } from "next/navigation";

import { InputOTP } from "antd-input-otp";
import { loginByOtp } from "../../graphql/actions";
import { useTokenStore } from "../../store/store";
const Otp = ({ data }: any) => {
  const { id } = useParams();
  const router = useRouter();
  const storeToken = useTokenStore((state) => state.storeToken);
  const [login, { loading }] = loginByOtp({
    async onCompleted(data: any) {
      storeToken(data?.loginByOtp?.token);
      router.push(`${process.env.NEXT_PUBLIC_LOGIN_URL}/profile`);
    },
  });

  const [form] = Form.useForm();

  const handleFinish = (values) => {
    // The value will be array of string
    // Check the field if there is no value, or value is undefined/empty string
    const { otp } = values;

    if (!otp || otp.includes(undefined) || otp.includes(""))
      return form.setFields([
        {
          name: "otp",
          errors: ["Please enter valid Otp"],
        },
      ]);

    login({
      variables: {
        input: {
          id,
          otp: otp.toString().replaceAll(",", ""),
        },
      },
    });
  };
  return (
    <Flex
      style={{ width: "100%", justifyContent: "center" }}
      align="center"
      vertical
    >
      <Typography.Title level={2}>OTP Verification</Typography.Title>

      <Typography>We have send an OTP on given email {data?.email}</Typography>

      <Form style={{ padding: 20 }} form={form} onFinish={handleFinish}>
        <Form.Item
          style={{ padding: 20 }}
          name="otp"
          className="center-error-message"
        >
          <InputOTP autoFocus inputType="numeric" length={4} />
        </Form.Item>

        <Form.Item noStyle>
          <Button loading={loading} block htmlType="submit" type="primary">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Flex>
  );
};

export default Otp;

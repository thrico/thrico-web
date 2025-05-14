import React from "react";
import type { FormProps } from "antd";
import { Button, Checkbox, Flex, Form, Input } from "antd";
import { useTokenOrganization } from "../../../store/store";
import { decryptToken } from "@repo/ui/encryption";
import { loginByEmail } from "../../../graphql/actions";
import { useRouter } from "next/navigation";

type FieldType = {
  email?: string;
};

const LoginByEmail = () => {
  const router = useRouter();
  const orgToken = useTokenOrganization.getState().token;
  const [loginWithEmail, { data, loading }] = loginByEmail({
    async onCompleted(data: any) {
      router.push(`http://localhost:4001/otp/${data?.loginByEmail?.id}`);
    },
  });
  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    const domain = await decryptToken(orgToken);
    const set = {
      email: values.email,
      domain: domain.origin,
    };
    loginWithEmail({
      variables: {
        input: set,
      },
    });
  };

  return (
    <Form
      name="basic"
      layout="vertical"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Flex vertical style={{ width: "100%", marginTop: 20 }} align="center">
        <Form.Item<FieldType>
          style={{ width: 300 }}
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "The input is not valid E-mail!",
            },
          ]}
        >
          <Input placeholder="Email address*" />
        </Form.Item>

        <Form.Item style={{ width: 300 }}>
          <Button
            loading={loading}
            style={{ width: 300 }}
            type="primary"
            htmlType="submit"
          >
            Continue
          </Button>
        </Form.Item>
      </Flex>
    </Form>
  );
};

export default LoginByEmail;

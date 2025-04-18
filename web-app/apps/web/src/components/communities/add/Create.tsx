import { Button, Card, Flex, Form, Space, theme } from "antd";
import React, { useState } from "react";
import Container from "../../Layout/Container";

import AddForm from "./Form";

import Preview from "./Preview";
import {
  createCommunities,
  createGroup,
} from "../../../graphql/actions/communities";
import { useRouter } from "next/navigation";
const Create = ({ onClose, initialValues }) => {
  const router = useRouter();
  const [imageUrl, setImageUrl] = useState<string>(
    "https://cdn.thrico.network/communities-default-cover-photo.jpg"
  );
  const [cover, setCover] = useState<string>();
  const onFinish = (values: any) => {
    create({
      variables: {
        input: { cover: cover, ...values },
      },
    });
  };

  const complete = (data) => {
    onClose();
  };

  const [form] = Form.useForm<{
    name: string;
    privacy: string;
    about: string;
  }>();
  const privacy = Form.useWatch("privacy", form);
  const name = Form.useWatch("name", form);
  const about = Form.useWatch("about", form);
  const [create, { error, reset, loading }] = createCommunities({
    onCompleted: complete,
  });

  return (
    <Container>
      <Space align="start">
        <Form
          autoComplete="off"
          form={form}
          name="nest-messages"
          onFinish={onFinish}
          style={{ maxWidth: 700 }}
          layout="vertical"
          scrollToFirstError
          initialValues={initialValues}
        >
          <Card
            extra={[
              <>
                <Button loading={loading} type="primary" htmlType="submit">
                  Create
                </Button>
              </>,
            ]}
          >
            <AddForm
              privacy={privacy}
              imageUrl={imageUrl}
              setImageUrl={setImageUrl}
              cover={cover}
              setCover={setCover}
            />
          </Card>
        </Form>

        <Preview
          imageUrl={imageUrl}
          name={name}
          privacy={privacy}
          about={about}
        />
      </Space>
    </Container>
  );
};

export default Create;

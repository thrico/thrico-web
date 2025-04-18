import React, { useState } from "react";
import { Button, Checkbox, Flex, Form, Input, message, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import Agreement from "./Agreement";
import { getAllMentorCategory } from "../../../graphql/actions/mentorship";
import Skills from "./Skills";

type SizeType = Parameters<typeof Form>[0]["size"];

const Experience = ({ prev, experience, setExperience, submit, loading }) => {
  const { data, loading: load } = getAllMentorCategory();
  const [componentSize, setComponentSize] = useState<SizeType | "default">(
    "default"
  );

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };
  const [form] = Form.useForm();
  const onFinish = async (values: any) => {
    await submit({ values });
  };

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={experience}
      onValuesChange={onFormLayoutChange}
      size={componentSize as SizeType}
      style={{ padding: 20 }}
      onFinish={onFinish}
    >
      <Form.Item
        initialValue={"Engineering & Data"}
        rules={[{ required: true }]}
        name="category"
        label="Category"
      >
        <Select loading={load}>
          {data?.getAllMentorCategory.map((set, key) => (
            <Select.Option
              key={key}
              value={set.title}
            >{`${set.title}`}</Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Skills />
      <Form.Item
        rules={[{ required: true }]}
        help="Add Youtube and vimeo  video for your future mentees"
        name="introVideo"
        label="Intro Video"
      >
        <Input type="url" />
      </Form.Item>
      <Form.Item name="featuredArticle" label="Featured Article">
        <Input />
      </Form.Item>
      <Form.Item
        name="whyDoWantBecomeMentor"
        label="Why do you want a become a mentor? (Not publicly visible)"
      >
        <TextArea rows={4} />
      </Form.Item>
      <Form.Item
        name="greatestAchievement"
        label="What, in your opinion, has been your greatest achievements so far? (Not publicly visible)"
      >
        <TextArea rows={4} />
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error("Should accept agreement")),
          },
        ]}
      >
        <Checkbox>
          <Agreement />
        </Checkbox>
      </Form.Item>
      <Flex
        style={{ marginTop: 24, display: "flex", justifyContent: "center" }}
      >
        <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
          Previous
        </Button>

        <Button loading={loading} type="primary" htmlType="submit">
          Done
        </Button>
      </Flex>
    </Form>
  );
};

export default Experience;

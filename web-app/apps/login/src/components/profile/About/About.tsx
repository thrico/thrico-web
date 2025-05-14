import { AboutType } from "@/lib/types";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Card, Flex, Form, Input, Select, Space } from "antd";
import { Option } from "antd/es/mentions";
import React from "react";

interface AboutProps {
  setAbout: (about: AboutType) => void;
  setCurrent: (step: number) => void;

  social: Array<{ url: string; platform: string }>;
}

const About: React.FC<AboutProps> = ({
  setAbout,
  setCurrent,

  social,
}) => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    setAbout(values);
    setCurrent(4);
  };

  return (
    <Form
      name="dynamic_form_nest_item"
      onFinish={onFinish}
      style={{ justifyContent: "center", width: "100%" }}
      autoComplete="off"
    >
      <Flex vertical style={{ width: "100%" }} gap={10}>
        <Card style={{ width: "100%" }}>
          <Form.List initialValue={social} name="social">
            {(fields, { add, remove }) => (
              <Flex
                justify="center"
                align="center"
                vertical
                style={{ width: "100%" }}
                gap={10}
              >
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <Space
                      key={key}
                      style={{
                        display: "flex",
                        marginBottom: 8,
                        justifyContent: "center",
                        width: "80%",
                        gap: 20,
                      }}
                      align="baseline"
                    >
                      <Form.Item
                        {...restField}
                        name={[name, "url"]}
                        rules={[{ required: true, message: "Missing Url" }]}
                      >
                        <Input placeholder="First Name" />
                      </Form.Item>
                      <Form.Item
                        style={{ width: 150 }}
                        {...restField}
                        name={[name, "platform"]}
                        rules={[
                          {
                            required: true,
                            message: "Missing social media details",
                          },
                        ]}
                      >
                        <Select placeholder="Select Social Media">
                          <Option value="instagram">Instagram</Option>
                          <Option value="linkedIn">LinkedIn</Option>
                          <Option value="x">X</Option>
                          <Option value="gitHub">GitHub</Option>
                          <Option value="facebook">Facebook</Option>
                          <Option value="twitter">Twitter</Option>
                          <Option value="youtube">YouTube</Option>
                          <Option value="pinterest">Pinterest</Option>
                          <Option value="snapchat">Snapchat</Option>
                          <Option value="tiktok">TikTok</Option>
                          <Option value="reddit">Reddit</Option>
                          <Option value="tumblr">Tumblr</Option>
                          <Option value="whatsapp">WhatsApp</Option>
                          <Option value="telegram">Telegram</Option>
                          <Option value="discord">Discord</Option>
                          <Option value="slack">Slack</Option>
                          <Option value="weChat">WeChat</Option>
                          <Option value="line">Line</Option>
                          <Option value="viber">Viber</Option>
                          <Option value="quora">Quora</Option>
                        </Select>
                      </Form.Item>
                      <DeleteOutlined onClick={() => remove(name)} />
                    </Space>
                  ))}
                </>

                <Button
                  style={{ width: "30%" }}
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add Social Media
                </Button>
              </Flex>
            )}
          </Form.List>
        </Card>
        <Flex
          style={{ width: "100%", marginTop: 29 }}
          justify="center"
          align="center"
        >
          <Space>
            <Button onClick={() => setCurrent(2)}>Previous</Button>

            <Button type="primary" htmlType="submit">
              Next
            </Button>
          </Space>
        </Flex>
      </Flex>
    </Form>
  );
};

export default About;

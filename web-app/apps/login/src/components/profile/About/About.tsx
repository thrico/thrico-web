import { AboutType } from "@/lib/types";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Card, Flex, Form, Input, Select, Space } from "antd";
import React, { useState } from "react";

const { Option } = Select;

interface AboutProps {
  setAbout: (about: AboutType) => void;
  setCurrent: (step: number) => void;
  social: Array<{ url: string; platform: string }>;
}

// Social platform → URL prefix map
const platformURLPrefixes: Record<string, string> = {
  instagram: "https://instagram.com/",
  linkedIn: "https://linkedin.com/in/",
  x: "https://x.com/",
  gitHub: "https://github.com/",
  facebook: "https://facebook.com/",
  twitter: "https://twitter.com/",
  youtube: "https://youtube.com/",
  pinterest: "https://pinterest.com/",
  snapchat: "https://snapchat.com/add/",
  tiktok: "https://tiktok.com/@",
  reddit: "https://reddit.com/u/",
  tumblr: "https://tumblr.com/",
  whatsapp: "https://wa.me/",
  telegram: "https://t.me/",
  discord: "https://discord.com/users/",
  slack: "https://slack.com/",
  weChat: "https://wechat.com/",
  line: "https://line.me/",
  viber: "https://viber.com/",
  quora: "https://quora.com/profile/",
};

const About: React.FC<AboutProps> = ({ setAbout, setCurrent, social }) => {
  const [form] = Form.useForm();
  const [urlPrefixes, setUrlPrefixes] = useState<{ [key: number]: string }>({});

  const onFinish = (values: any) => {
    // Combine prefix + user input before submission
    const transformedSocial = values.social.map((item: any, index: number) => ({
      platform: item.platform,
      url: (urlPrefixes[index] || "") + (item.url || ""),
    }));
    setAbout({ ...values, social: transformedSocial });
    setCurrent(4);
  };

  const handlePlatformChange = (platform: string, name: number) => {
    const prefix = platformURLPrefixes[platform] || "";
    setUrlPrefixes((prev) => ({ ...prev, [name]: prefix }));

    const currentSocial = form.getFieldValue("social") || [];
    const updatedSocial = [...currentSocial];
    updatedSocial[name] = {
      ...updatedSocial[name],
      platform,
    };
    form.setFieldsValue({ social: updatedSocial });
  };

  return (
    <Form
      name="dynamic_form_nest_item"
      form={form}
      onFinish={onFinish}
      autoComplete="off"
      style={{ width: "100%" }}
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
                      rules={[{ required: true, message: "Missing URL" }]}
                    >
                      <Input
                        placeholder="Username or ID"
                        addonBefore={urlPrefixes[name] || "https://"}
                      />
                    </Form.Item>
                    <Form.Item
                      style={{ width: 150 }}
                      {...restField}
                      name={[name, "platform"]}
                      rules={[{ required: true, message: "Missing platform" }]}
                    >
                      <Select
                        placeholder="Select Platform"
                        onChange={(value) => handlePlatformChange(value, name)}
                      >
                        {Object.entries(platformURLPrefixes).map(([value]) => (
                          <Option key={value} value={value}>
                            {value.charAt(0).toUpperCase() + value.slice(1)}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                    <DeleteOutlined onClick={() => remove(name)} />
                  </Space>
                ))}
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                  style={{ width: "30%" }}
                >
                  Add Social Media
                </Button>
              </Flex>
            )}
          </Form.List>
        </Card>

        <Flex justify="center" align="center" style={{ marginTop: 29 }}>
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

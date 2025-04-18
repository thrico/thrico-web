"use client"

import { Button, Card, Form, Input, Select, Typography, Space, Radio, Checkbox } from "antd"
import { DownOutlined } from "@ant-design/icons"

const { Text } = Typography
const { TextArea } = Input
const { Option } = Select

export default function CustomizeCommunity() {
  const [form] = Form.useForm()

  return (
    <Card title={

      "Customize Community"


    }
      extra={

        <Button type="primary">Update</Button>

      }
    >

      <Form
        form={form}
        layout="vertical"
        initialValues={{
          communityName: "Arts For Life",
          about:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          location: "Dharmatala, Himachal Pradesh, India",
          mode: "Virtual",
          webAddress: "www.thrica.com/community/abcdefxyz",
          category: "Creative Arts",
          interest: "Visual Arts",
          tags: "Art",
          privacy: "public",
        }}
      >
        <Form.Item label={<Text strong>Community Name</Text>} name="communityName" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <div style={{ textAlign: "right" }}>
          <Text type="secondary">0/50</Text>
        </div>

        <Form.Item label={<Text strong>About</Text>} name="about">
          <TextArea rows={4} />
        </Form.Item>

        <div style={{ textAlign: "right" }}>
          <Text type="secondary">0/2000</Text>
        </div>

        <Form.Item label={<Text strong>Location</Text>} name="location">
          <Select suffixIcon={<DownOutlined />}>
            <Option value="Dharmatala, Himachal Pradesh, India">Dharmatala, Himachal Pradesh, India</Option>
          </Select>
        </Form.Item>

        <Form.Item label={<Text strong>Mode</Text>} name="mode">
          <Select suffixIcon={<DownOutlined />}>
            <Option value="Virtual">Virtual</Option>
            <Option value="In-person">In-person</Option>
            <Option value="Hybrid">Hybrid</Option>
          </Select>
        </Form.Item>

        <Form.Item label={<Text strong>Web address</Text>} name="webAddress">
          <Input />
        </Form.Item>

        <Form.Item label={<Text strong>Category</Text>} name="category">
          <Select suffixIcon={<DownOutlined />}>
            <Option value="Creative Arts">Creative Arts</Option>
          </Select>
        </Form.Item>

        <div style={{ textAlign: "right" }}>
          <Text type="secondary">1/3</Text>
        </div>

        <Form.Item label={<Text strong>Interest</Text>} name="interest">
          <Select suffixIcon={<DownOutlined />} mode="multiple" maxTagCount={2}>
            <Option value="Visual Arts">Visual Arts</Option>
            <Option value="Crafts">Crafts</Option>
          </Select>
        </Form.Item>

        <div style={{ textAlign: "right" }}>
          <Text type="secondary">2/5</Text>
        </div>

        <Form.Item label={<Text strong>Tags</Text>} name="tags">
          <Select suffixIcon={<DownOutlined />} mode="multiple" maxTagCount={2}>
            <Option value="Art">Art</Option>
            <Option value="Creativity">Creativity</Option>
          </Select>
        </Form.Item>

        <div style={{ textAlign: "right" }}>
          <Text type="secondary">2/5</Text>
        </div>

        <Form.Item label={<Text strong>Choose Privacy</Text>} name="privacy">
          <Radio.Group>
            <Space direction="vertical">
              <Radio value="public">
                <Space direction="vertical">
                  <Text strong>Public</Text>
                  <Text type="secondary">Anyone can view posts and join or visit the community</Text>
                </Space>
              </Radio>
              <Radio value="private">
                <Space direction="vertical">
                  <Text strong>Private</Text>
                  <Text type="secondary">Only members can view posts and join the community</Text>
                </Space>
              </Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item name="mature" valuePropName="checked">
          <Checkbox>
            <Text strong>Mature 18+</Text>
            <div>
              <Text type="secondary">Only shared to those 18+ users who join the community</Text>
            </div>
          </Checkbox>
        </Form.Item>


      </Form>
    </Card>
  )
}


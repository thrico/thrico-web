import React, { useState } from "react";
import {
  Button,
  Card,
  Form,
  Input,
  InputNumber,
  Modal,
  Select,
  Space,
} from "antd";
import AddButton from "@repo/ui/AddButton";
import { CloseOutlined } from "@ant-design/icons";
import DeleteButton from "@repo/ui/DeleteButton";
import { Option } from "antd/es/mentions";
import {
  addEventSponsors,
  addSponsorShip,
  getEventSponsorship,
} from "../../../../../../graphql/actions/events";
import { useParams } from "next/navigation";
import Cover from "../../../../add/Cover";

const Add = () => {
  const { slug } = useParams();
  const [modalOpen, setModalOpen] = useState(false);

  const [form] = Form.useForm();
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };

  const onCompleted = () => {
    setModalOpen(false);
    form.resetFields();
  };
  const [add, { loading }] = addEventSponsors({
    onCompleted,
    slug,
  });
  const onFinish = (values: any) => {
    add({
      variables: {
        input: { ...values, event: slug, sponsorLogo: cover },
      },
    });
    console.log("Received values of form: ", values);
  };

  const { data, loading: loadData } = getEventSponsorship({
    variables: {
      input: {
        slug: slug,
      },
    },
  });
  const [imageUrl, setImageUrl] = useState<string>("");
  const [cover, setCover] = useState<string>("");
  return (
    <>
      <Space onClick={() => setModalOpen(true)}>
        <AddButton />
      </Space>
      <Modal
        width={800}
        footer={[]}
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
      >
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          style={{ maxWidth: 800 }}
          scrollToFirstError
          initialValues={{ items: [{}] }}
        >
          <Card
            title="Add Sponsors"
            extra={[
              <>
                <Space>
                  <Button loading={loading} type="primary" htmlType="submit">
                    Add
                  </Button>
                  <Button onClick={() => setModalOpen(false)}>Cancel</Button>
                </Space>
              </>,
            ]}
          >
            <Cover
              setCover={setCover}
              imageUrl={imageUrl}
              setImageUrl={setImageUrl}
              buttonText="Update Sponsor Image"
            />
            <Form.Item
              name="sponsorShipId"
              label="Sponsorship type"
              hasFeedback
              rules={[{ required: true }]}
              style={{ width: "100%" }}
            >
              <Select loading={loadData} placeholder="Please select a country">
                {data?.getEventSponsorship.map((set) => (
                  <Option value={set.id}>{set.sponsorType}</Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              name="sponsorName"
              label="Sponsor Name"
              hasFeedback
              rules={[{ required: true }]}
              style={{ width: "100%" }}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="sponsorUserDesignation"
              label="sponsor User Name"
              hasFeedback
              rules={[{ required: true }]}
              style={{ width: "100%" }}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="sponsorUserName"
              label="Sponsor User Designation"
              hasFeedback
              rules={[{ required: true }]}
              style={{ width: "100%" }}
            >
              <Input />
            </Form.Item>
          </Card>
        </Form>
      </Modal>
    </>
  );
};

export default Add;

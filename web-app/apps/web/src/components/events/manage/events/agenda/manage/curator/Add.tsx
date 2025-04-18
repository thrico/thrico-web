import React, { useState } from "react";
import {
  Button,
  Card,
  Divider,
  Drawer,
  Form,
  Input,
  InputNumber,
  Modal,
  Select,
  Space,
  Switch,
  TabsProps,
} from "antd";
import AddButton from "@repo/ui/AddButton";
import { CloseOutlined } from "@ant-design/icons";
import DeleteButton from "@repo/ui/DeleteButton";
import { Option } from "antd/es/mentions";
import { addSponsorShip } from "../../../../../../../graphql/actions/events";
import { useParams } from "next/navigation";
import Editor from "../../../../../../common/editor/Editor";

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
  const [add, { loading }] = addSponsorShip({
    onCompleted,
    slug,
  });
  const onFinish = (values: any) => {
    add({
      variables: {
        input: { ...values, slug },
      },
    });
    console.log("Received values of form: ", values);
  };
  const currency = Form.useWatch("currency", form);

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const items: TabsProps["items"] = [
    { key: "1", label: "Tab 1", children: "Content of Tab Pane 1" },
    { key: "2", label: "Tab 2", children: "Content of Tab Pane 2" },
    { key: "3", label: "Tab 3", children: "Content of Tab Pane 3" },
  ];

  return (
    <>
      <Space onClick={showDrawer}>
        <AddButton />
      </Space>
      <Drawer width={"700px"} title="Add Session" onClose={onClose} open={open}>
        <Form
          form={form}
          name="register"
          onFinish={onFinish}
          style={{ maxWidth: "100%" }}
          scrollToFirstError
          initialValues={{ items: [{}] }}
          layout="vertical"
        >
          <Card>
            <Form.Item
              name="title"
              label="Title"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please input  Sponsor type",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item name="videosteam" label="Video Steam" hasFeedback>
              <Input />
            </Form.Item>

            <Form.Item name="pin" label="Pin Session" hasFeedback>
              <Switch />
            </Form.Item>
            <Form.Item name="pin" label="Description" hasFeedback>
              <Editor />
            </Form.Item>
          </Card>
          <Card
            style={{
              marginTop: 20,
              position: "sticky",
              bottom: 0,

              width: "100%",
            }}
          >
            <Space>
              <Divider style={{ width: "100%" }} />
              <Divider type="vertical" />
              <Button loading={loading} type="primary" htmlType="submit">
                Publish
              </Button>
              <Button onClick={() => setModalOpen(false)}>Save as Draft</Button>
            </Space>
          </Card>
        </Form>
      </Drawer>
    </>
  );
};

export default Add;

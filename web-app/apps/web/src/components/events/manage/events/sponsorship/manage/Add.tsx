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
  Switch,
} from "antd";
import AddButton from "@repo/ui/AddButton";
import { CloseOutlined } from "@ant-design/icons";
import DeleteButton from "@repo/ui/DeleteButton";
import { Option } from "antd/es/mentions";
import { addSponsorShip } from "../../../../../../graphql/actions/events";
import { useParams } from "next/navigation";

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

  return (
    <>
      <Space onClick={() => setModalOpen(true)}>
        <AddButton />
      </Space>
      <Modal
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
          style={{ maxWidth: 600 }}
          scrollToFirstError
          initialValues={{ items: [{}] }}
        >
          <Card
            title="Add Sponsorship"
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
            <Form.Item
              name="type"
              label="Sponsor type"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please input  Sponsor type",
                },
              ]}
            >
              <Input placeholder="ie Gold , Silver" />
            </Form.Item>
            <Form.Item
              name="currency"
              label="Currency"
              hasFeedback
              rules={[{ required: true }]}
              style={{ width: "100%" }}
              initialValue={"$"}
            >
              <Select placeholder="Please select a country">
                <Option value="₹">₹</Option>
                <Option value="$">$</Option>
              </Select>
            </Form.Item>
            {currency && (
              <>
                <Form.Item
                  name="price"
                  label="Price"
                  style={{ width: "100%" }}
                  hasFeedback
                  rules={[{ required: true }]}
                >
                  <InputNumber min={0} addonAfter={currency} />
                </Form.Item>

                <Form.Item
                  name="showPrice"
                  label="Show Price"
                  hasFeedback
                  rules={[{ required: true }]}
                  initialValue={false}
                >
                  <Switch />
                </Form.Item>
              </>
            )}

            <Form.List name="content">
              {(fields, { add, remove }) => (
                <div
                  style={{
                    display: "flex",
                    rowGap: 16,
                    flexDirection: "column",
                  }}
                >
                  {fields.map(({ key, name, ...restField }) => (
                    <Card
                      size="small"
                      title={`Item ${name + 1}`}
                      key={key}
                      extra={
                        <Space
                          style={{ padding: 5, scale: 0.9 }}
                          onClick={() => remove(name)}
                        >
                          <DeleteButton />{" "}
                        </Space>
                      }
                    >
                      <Form.Item
                        label="Title"
                        {...restField}
                        name={[name, "title"]}
                        rules={[{ required: true, message: "Missing Title" }]}
                      >
                        <Input placeholder="Title" />
                      </Form.Item>
                      <Form.Item
                        label="Description"
                        {...restField}
                        name={[name, "description"]}
                        rules={[
                          { required: true, message: "Missing Description" },
                        ]}
                      >
                        <Input placeholder="Description" />
                      </Form.Item>
                    </Card>
                  ))}

                  <Button type="dashed" onClick={() => add()} block>
                    + Add Item
                  </Button>
                </div>
              )}
            </Form.List>
          </Card>
        </Form>
      </Modal>
    </>
  );
};

export default Add;

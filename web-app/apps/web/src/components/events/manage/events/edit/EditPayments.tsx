import React, { useState } from "react";
import { CaretRightOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Alert,
  Button,
  Col,
  Collapse,
  DatePicker,
  Drawer,
  Flex,
  Form,
  Input,
  InputNumber,
  Row,
  Segmented,
  Select,
  Space,
  Upload,
} from "antd";
import EditButton from "@repo/ui/EditButton";
import TextArea from "antd/es/input/TextArea";

const { Option } = Select;

const EditPayments = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onFinish = (values: any) => {};
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
  const [form] = Form.useForm();
  const eventCost = Form.useWatch("eventCost", form);
  const paymentMode = Form.useWatch("paymentMode", form);
  const currency = Form.useWatch("currency", form);
  const eventType = Form.useWatch("eventType", form);
  return (
    <>
      <Space onClick={showDrawer}>
        <EditButton />
      </Space>
      <Drawer
        title="Edit Payments"
        width={720}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onClose} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          scrollToFirstError
        >
          <Flex vertical justify="flex-end" align="flex-end" gap={20}>
            <Collapse
              style={{ width: "90%" }}
              collapsible="header"
              expandIcon={({ isActive }) => (
                <CaretRightOutlined rotate={isActive ? 90 : 0} />
              )}
              defaultActiveKey={["1"]}
              items={[
                {
                  key: "1",
                  label: "Events Cost",
                  children: (
                    <>
                      <Form.Item
                        name="eventCost"
                        label="Event Cost"
                        hasFeedback
                        rules={[{ required: true }]}
                        style={{ width: "100%" }}
                        initialValue={"free"}
                      >
                        <Segmented
                          options={[
                            {
                              label: "Free",
                              value: "free",
                            },
                            {
                              label: "Paid",
                              value: "paid",
                            },
                          ]}
                        />
                      </Form.Item>
                      {eventCost === "paid" && (
                        <>
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
                          <Form.Item
                            name="costPerAdults"
                            label="Cost Per Adults"
                            hasFeedback
                            rules={[{ required: true }]}
                            style={{ width: "100%" }}
                          >
                            <InputNumber min={1} addonAfter={currency} />
                          </Form.Item>
                          <Form.Item
                            name="costPerChildren"
                            label="Cost Per Children"
                            hasFeedback
                            rules={[{ required: true }]}
                            style={{ width: "100%" }}
                          >
                            <InputNumber min={1} addonAfter={currency} />
                          </Form.Item>
                          <Form.Item
                            name="paymentMode"
                            label="Payment Mode"
                            hasFeedback
                            rules={[{ required: true }]}
                            style={{ width: "100%" }}
                            initialValue={"qrCode"}
                          >
                            <Segmented
                              options={[
                                {
                                  label: "Qr Code",
                                  value: "qrCode",
                                },
                                {
                                  label: "PayPal",
                                  value: "paypal",
                                },
                                {
                                  label: "Bank Account",
                                  value: "bankAccount",
                                },
                              ]}
                            />
                          </Form.Item>

                          {paymentMode === "qrCode" && (
                            <Form.Item
                              rules={[{ required: true }]}
                              label="Upload"
                              valuePropName="fileList"
                            >
                              <Upload
                                action="/upload.do"
                                listType="picture-card"
                              >
                                <button
                                  style={{ border: 0, background: "none" }}
                                  type="button"
                                >
                                  <PlusOutlined />
                                  <div style={{ marginTop: 8 }}>Upload</div>
                                </button>
                              </Upload>
                            </Form.Item>
                          )}
                          {paymentMode === "paypal" && (
                            <Form.Item
                              rules={[{ required: true }]}
                              name={"paypalDetails"}
                              label="Enter Paypal Details"
                            >
                              <Input></Input>
                            </Form.Item>
                          )}
                          {paymentMode === "bankAccount" && (
                            <>
                              <Form.Item
                                name={"bankName"}
                                rules={[{ required: true }]}
                                label="Enter Bank Name"
                              >
                                <Input></Input>
                              </Form.Item>
                              <Form.Item
                                name={"accountNumber"}
                                rules={[{ required: true }]}
                                label="Enter Account Number"
                              >
                                <Input></Input>
                              </Form.Item>
                              <Form.Item
                                name={"ifscCode"}
                                rules={[{ required: true }]}
                                label="IFSC Code"
                              >
                                <Input></Input>
                              </Form.Item>
                            </>
                          )}
                        </>
                      )}
                    </>
                  ),
                },
              ]}
            />

            <Alert
              showIcon
              type="info"
              message="When you add an event, it will be published once it is approved."
            />
            {/* <Collapse
          style={{ width: "90%" }}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 0} />
          )}
          defaultActiveKey={["1"]}
          items={[
            {
              key: "1",
              label: "Are you Accepting Events Sponsorship?",
              children: (
                <Space style={{ width: "100%" }} direction="vertical">
                  <Checkbox
                    checked={sponsorShip}
                    onChange={(e) => setSponsorShip(e.target.checked)}
                  >
                    Accepting Events Sponsorship
                  </Checkbox>
                  {sponsorShip && (
                    <Space style={{ width: "100%", marginTop: 30 }}>
                      <Form.List name="users">
                        {(fields, { add, remove }) => (
                          <>
                            {fields.map(({ key, name, ...restField }) => (
                              <Space
                                key={key}
                                style={{
                                  width: "110%",
                                  display: "flex",
                                  marginBottom: 8,

                                  justifyContent: "space-between",
                                }}
                                align="baseline"
                              >
                                <Form.Item
                                  style={{ width: 300 }}
                                  {...restField}
                                  name={[name, "sponsorshipType"]}
                                  label={"Type"}
                                  rules={[
                                    {
                                      required: true,
                                      message: "Missing Sponsorship Type",
                                    },
                                  ]}
                                >
                                  <Select placeholder="Sponsorship Type">
                                    <Option value="gold">Gold</Option>
                                    <Option value="silver">Silver</Option>
                                    <Option value="bronze">Bronze</Option>
                                  </Select>
                                </Form.Item>
                                <Form.Item
                                  style={{ width: 200 }}
                                  {...restField}
                                  label={"Amount"}
                                  name={[name, "sponsorshipAmount"]}
                                  rules={[
                                    {
                                      required: true,
                                      message: "Missing Amount",
                                    },
                                  ]}
                                >
                                  <Input
                                    placeholder="Account"
                                    addonAfter={currency}
                                  />
                                </Form.Item>
                                <MinusCircleOutlined
                                  onClick={() => remove(name)}
                                />
                              </Space>
                            ))}
                            <Form.Item>
                              <Button
                                style={{ width: 200 }}
                                type="dashed"
                                onClick={() => add()}
                                block
                                icon={<PlusOutlined />}
                              >
                                Add
                              </Button>
                            </Form.Item>
                          </>
                        )}
                      </Form.List>
                    </Space>
                  )}
                </Space>
              ),
            },
          ]}
        /> */}

            {/* <Collapse
          style={{ width: "90%" }}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 0} />
          )}
          defaultActiveKey={["1"]}
          items={[
            {
              key: "1",
              label: "Are you Event Having Speakers?",
              children: (
                <Space style={{ width: "100%" }} direction="vertical">
                  <Checkbox
                    checked={speaker}
                    onChange={(e) => setSpeaker(e.target.checked)}
                  >
                    Yes
                  </Checkbox>
                  {speaker && (
                    <Space style={{ width: "100%", marginTop: 30 }}>
                      <Form.List name="users">
                        {(fields, { add, remove }) => (
                          <>
                            {fields.map(({ key, name, ...restField }) => (
                              <Space
                                key={key}
                                style={{
                                  width: "110%",
                                  display: "flex",
                                  marginBottom: 8,

                                  justifyContent: "space-between",
                                }}
                                align="baseline"
                              >
                                <Form.Item
                                  style={{ width: 200 }}
                                  {...restField}
                                  name={[name, "Type"]}
                                  label={"Type"}
                                  rules={[
                                    {
                                      required: true,
                                      message: "Missing Sponsorship Type",
                                    },
                                  ]}
                                >
                                  <Select placeholder="Sponsorship Type">
                                    <Option value="rupees">Gold</Option>
                                    <Option value="dollar">Silver</Option>
                                  </Select>
                                </Form.Item>
                                <Form.Item
                                  {...restField}
                                  label={"Amount"}
                                  name={[name, "last"]}
                                  rules={[
                                    {
                                      required: true,
                                      message: "Missing Amount",
                                    },
                                  ]}
                                >
                                  <Input placeholder="Last Name" />
                                </Form.Item>
                                <MinusCircleOutlined
                                  onClick={() => remove(name)}
                                />
                              </Space>
                            ))}
                            <Form.Item>
                              <Button
                                style={{ width: 200 }}
                                type="dashed"
                                onClick={() => add()}
                                block
                                icon={<PlusOutlined />}
                              >
                                Add
                              </Button>
                            </Form.Item>
                          </>
                        )}
                      </Form.List>
                    </Space>
                  )}
                </Space>
              ),
            },
          ]}
        /> */}
          </Flex>
        </Form>
      </Drawer>
    </>
  );
};

export default EditPayments;

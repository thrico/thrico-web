import React, { useCallback, useState } from "react";
import { Button, Card, Flex, Form, Modal, Space } from "antd";
import Cover from "./Cover";
import EventForm from "./EventForm";
import { createEvent } from "../../../graphql/actions/events";

interface props {
  refresh?: any;
}
const CreateEvent = ({ refresh }: props) => {
  console.log(refresh);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [cover, setCover] = useState<string>();
  const onCompleted = () => {
    form.resetFields();
    handleCancel();
    setCover("");
    if (refresh) {
      refresh();
    }
  };
  const [create, { loading }] = createEvent({
    onCompleted,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values: any) => {
    const rangeValue = values["range-picker"];
    const endDate = values["endDate"];

    const data = {
      cover,
      eventStartTime: rangeValue[0].format("YYYY-MM-DD HH:mm:ss"),
      eventEndTime: rangeValue[1].format("YYYY-MM-DD HH:mm:ss"),
      registrationEndDate: endDate.format("YYYY-MM-DD HH:mm:ss"),
      ...values,
    };
    delete data["range-picker"];
    delete data["endDate"];

    create({
      variables: {
        input: data,
      },
    });
  };

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
      <Button style={{ marginTop: 20 }} type="primary" onClick={showModal}>
        Add Event
      </Button>

      <Modal
        style={{ top: 10 }}
        title={false}
        width={900}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          scrollToFirstError
        >
          <Card
            title="Add Event"
            extra={
              <Space style={{ position: "sticky", top: 10, zIndex: 10 }}>
                <Button loading={loading} type="primary" htmlType="submit">
                  Add Event
                </Button>
                <Button onClick={handleCancel}>Cancel</Button>
              </Space>
            }
          >
            <Flex
              vertical
              style={{ width: "100%", height: 600, overflow: "scroll" }}
            >
              <Cover
                setCover={setCover}
                imageUrl={imageUrl}
                setImageUrl={setImageUrl}
              />
              <EventForm
                eventType={eventType}
                currency={currency}
                paymentMode={paymentMode}
                eventCost={eventCost}
              />
            </Flex>
          </Card>
        </Form>
      </Modal>
    </>
  );
};

export default CreateEvent;

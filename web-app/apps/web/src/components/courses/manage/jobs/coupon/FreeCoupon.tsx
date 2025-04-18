import React, { useState } from "react";
import {
  Avatar,
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  List,
  Mentions,
  Modal,
  Select,
  TreeSelect,
} from "antd";
import DiscountIcon from "../../../../svg/DiscountIcon";
import FreeIcon from "../../../../svg/FreeIcon";

const FreeCoupon = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  const { RangePicker } = DatePicker;

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 14 },
    },
  };
  return (
    <>
      <List.Item onClick={showModal}>
        <List.Item.Meta
          avatar={
            <>
              <FreeIcon />
            </>
          }
          title="Free Coupon"
          description="Offer Free Courses to users"
        />
      </List.Item>

      <Modal
        footer={[]}
        title="Select coupon type"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Form {...formItemLayout} variant="filled" style={{ maxWidth: 600 }}>
          <Form.Item
            label="Coupon Name"
            name="Input"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Input minLength={3} placeholder="Min 3 Words" />
          </Form.Item>

          <Form.Item
            label="RangePicker"
            name="RangePicker"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <RangePicker />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default FreeCoupon;

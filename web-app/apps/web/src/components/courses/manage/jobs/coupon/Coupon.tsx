import React from "react";
import {
  Button,
  Card,
  Checkbox,
  Form,
  type FormProps,
  Input,
  Select,
  Space,
  Typography,
} from "antd";
import Editor from "../../../../common/editor/Editor";
import { currency } from "../../../../../json/currency";
import CreateCoupon from "./CreateCoupon";

type FieldType = {
  price?: string;
  currency?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Coupon = () => {
  const [form] = Form.useForm();
  const courseCurrency = Form.useWatch("currency", form);
  return (
    <Card
      extra={<CreateCoupon />}
      style={{ width: "100%" }}
      title="Get more sales with coupons"
    >
      <Typography>Now you can create coupons for your courses</Typography>
    </Card>
  );
};

export default Coupon;

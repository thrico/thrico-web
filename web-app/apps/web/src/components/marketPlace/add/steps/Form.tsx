import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
} from "antd";

const { RangePicker } = DatePicker;
const { TextArea } = Input;
const { Option } = Select;
const MarketPlaceForm = ({ currency }) => {
  return (
    <>
      <>
        <Form.Item
          rules={[
            {
              required: true,
              message: "Please input Job Title",
            },
          ]}
          name="title"
          label="Title"
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="currency"
          label="Currency"
          hasFeedback
          rules={[{ required: true }]}
          style={{ width: "100%" }}
          initialValue={"$"}
        >
          {currency && (
            <Select placeholder="Please select a country">
              <Option value="₹">₹</Option>
              <Option value="$">$</Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: "Please input Price",
            },
          ]}
          name="price"
          label="Price"
          style={{ width: "100%" }}
        >
          <Input addonAfter={currency} type="number" min={1} />
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: "Please input Price",
            },
          ]}
          name="category"
          label="Category"
        >
          <Select
            showSearch
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={[
              {
                value: "Electronics",
                label: "electronics",
              },
            ]}
          />
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: "Please input Price",
            },
          ]}
          name="condition"
          label="Condition"
        >
          <Select
            showSearch
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={[
              {
                value: "new",
                label: "New",
              },
              {
                value: "used-like now",
                label: "Used-Like Now",
              },
              {
                value: "used-like good",
                label: "Used-Like Good",
              },
              {
                value: "used-like fair",
                label: "Used-Like Fair",
              },
            ]}
          />
        </Form.Item>

        <Form.Item name="brand" label="Brand">
          <Input />
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: "Please input Location",
            },
          ]}
          name="location"
          label="Location"
        >
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <TextArea rows={3} />
        </Form.Item>
        <Form.Item name="sku" label="SKU">
          <Input />
        </Form.Item>
      </>
    </>
  );
};

export default MarketPlaceForm;

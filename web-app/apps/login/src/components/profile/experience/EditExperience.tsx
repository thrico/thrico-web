
import React, { useState } from "react";
import { Button, Checkbox, DatePicker, Form, Input, Modal, Select, Space } from "antd";

import { experience } from "@/lib/types";

import { EducationAutocompleteSelect } from "../education/EducationAutoComplete";
import GooglePlacesInput from "@/components/location/Google-places-autocomplete";
import dayjs from "dayjs";








interface props {
  experience: experience[];
  item: experience;
  setExperience(experience: experience[]): void;
}

const EditExperience = ({ item, experience, setExperience }: props) => {

  const [isModalOpen, setIsModalOpen] = useState<string>("");

  const handleCancel = () => {
    setIsModalOpen("");
  };
  const editExperience = async (ex: experience) => {
    const findIndex = experience.findIndex(
      (obj: experience) => obj.id == ex.id
    );
    console.log(findIndex);

    const newState = experience.map((obj) =>
      obj.id === ex.id ? { ...ex } : obj
    );

    setExperience(newState);
  };

  const { RangePicker } = DatePicker;
  const [form] = Form.useForm();
  const currentlyWorking = Form.useWatch("currentlyWorking", form);
  const onFinish = (values: any) => {
    const currentlyWorking = values["currentlyWorking"];
    const rangeTimeValue = values["rangeTimeValue"];
    const startDate = values["Start Date"];
    const value = {
      ...values,
      id: item?.id,

      duration: !currentlyWorking ? [
        rangeTimeValue[0].format("YYYY-MM-DD HH:mm:ss"),
        rangeTimeValue[1].format("YYYY-MM-DD HH:mm:ss"),
      ] : "",
      startDate: currentlyWorking ?
        startDate.format("YYYY-MM-DD HH:mm:ss") : "",


    };
    delete value["rangeTimeValue"];
    delete value["Start Date"];
    editExperience(value);
    handleCancel();
  };

  return (
    <>
      <Space onClick={() => setIsModalOpen(item.id)}>Edit</Space>
      {isModalOpen === item?.id && (
        <Modal
          title="Edit experience"
          width={700}
          open={isModalOpen === item.id}
          footer={false}
          onCancel={handleCancel}
        >
          <Space>
            <Form
              form={form}
              name="register"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 17 }}
              layout="horizontal"
              onFinish={onFinish}

              style={{ width: 700 }}
            >
              <Form.Item
                style={{ width: "100%" }}
                name="title"
                label="Title"
                rules={[{ required: true }]}
                initialValue={item?.title}
              >
                <Input />
              </Form.Item>
              <Form.Item
                initialValue={item?.company}
                style={{ width: "100%" }}
                name="company"
                label="Company name "
                rules={[{ required: true }]}
                hasFeedback
              >
                <EducationAutocompleteSelect
                  initialValue={item?.company}
                  onChange={(value) => form.setFieldsValue({ company: value })}
                />
              </Form.Item>
              <Form.Item
                initialValue={item?.employmentType}
                hasFeedback
                rules={[{ required: true }]}
                name="employmentType"
                label="Employment type"
              >
                <Select>
                  <Select.Option value="Full Time">Full Time</Select.Option>
                  <Select.Option value="Part Time">Part Time</Select.Option>
                  <Select.Option value="Self Employed">Self Employed</Select.Option>
                  <Select.Option value="Internship">Internship</Select.Option>
                  <Select.Option value="Trainee">Trainee</Select.Option>
                  <Select.Option value="Freelance">Freelance</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item
                initialValue={item?.location}
                hasFeedback
                rules={[{ required: true }]}
                name="location"
                label="Location"
              >
                <GooglePlacesInput
                  initialValue={item?.location}
                  onChange={(value) => form.setFieldsValue({ location: value })}
                />
              </Form.Item>

              <Form.Item
                name="currentlyWorking"
                valuePropName="checked"
                initialValue={item?.currentlyWorking}
                wrapperCol={{ offset: 5, span: 17 }}
              >
                <Checkbox>I am currently working in this role</Checkbox>
              </Form.Item>



              {
                !currentlyWorking && (
                  <Form.Item
                    initialValue={
                      item?.duration && item?.duration.length > 0
                        ? item?.duration?.map((t: string) =>
                          dayjs(t, "YYYY-MM-DD")
                        )
                        : undefined
                    }
                    hasFeedback
                    rules={[{ required: true }]}
                    name="rangeTimeValue"
                    label="Duration"
                  >
                    <RangePicker
                      picker="month"
                      format="YYYY-MM"
                      disabledDate={(current) => current && current > dayjs().endOf('day')}
                    />
                  </Form.Item>
                )
              }

              {
                currentlyWorking && (
                  <Form.Item
                    initialValue={
                      dayjs(item?.startDate, "YYYY-MM-DD")
                    }
                    hasFeedback
                    rules={[{ required: true }]}
                    name="Start Date"
                    label="Start Date"
                  >
                    <DatePicker
                      picker="month"
                      format="YYYY-MM"
                      disabledDate={(current) => current && current > dayjs().endOf('day')}
                    // Disable end date if currentlyWorking is true
                    />
                  </Form.Item>
                )
              }

              <Form.Item
                initialValue={item?.locationType}
                hasFeedback
                rules={[{ required: true }]}
                name="locationType"
                label="Location type"
              >
                <Select>
                  <Select.Option value="On-site">On-site</Select.Option>
                  <Select.Option value="Hybrid">Hybrid</Select.Option>
                  <Select.Option value="Remote">Remote</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item style={{ width: "100%" }}>
                <Space
                  style={{
                    width: "100%",

                    justifyContent: "center",
                  }}
                >
                  <Button onClick={handleCancel}>Cancel</Button>
                  <Button type="primary" htmlType="submit">
                    Save
                  </Button>
                </Space>
              </Form.Item>
            </Form>
          </Space>
        </Modal>
      )}
    </>
  );
};

export default EditExperience;

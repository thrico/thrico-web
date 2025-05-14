import React, { useState } from "react";
import { Button, DatePicker, Flex, Form, Input, Modal, Space } from "antd";
import EditForm from "./edit/EditForm";
import { education } from "@/lib/types";
import { EducationAutocompleteSelect } from "./EducationAutoComplete";
import TextArea from "antd/es/input/TextArea";
import dayjs from "dayjs";



interface props {
  education: education[];
  item: education;
  setEducation(education: education[]): void;
}

const EditEducation = ({ item, education, setEducation }: props) => {
  const [isModalOpen, setIsModalOpen] = useState<string>("");

  const handleCancel = () => {
    setIsModalOpen("");
  };
  const editEducation = async (ex: education) => {


    const newState = education.map((obj) =>
      obj.id === ex.id ? { ...ex } : obj
    );

    setEducation(newState);
  };


  const { RangePicker } = DatePicker;
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    const rangeTimeValue = values["rangeTimeValue"];
    const value = {
      ...values,
      id: item.id,
      duration: [
        rangeTimeValue[0].format("YYYY-MM-DD HH:mm:ss"),
        rangeTimeValue[1].format("YYYY-MM-DD HH:mm:ss"),
      ],
    };
    delete value["rangeTimeValue"];
    editEducation(value);
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
                hasFeedback
                initialValue={item.school}
                style={{ width: "100%" }}
                name="school"
                label="School/Institute"
                rules={[{ required: true }]}
              >
                <EducationAutocompleteSelect
                  initialValue={item.school}
                  onChange={(value) => form.setFieldsValue({ school: value })}
                />
              </Form.Item>
              <Form.Item
                hasFeedback
                initialValue={item.degree}
                style={{ width: "100%" }}
                name="degree"
                label="Degree"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                hasFeedback
                initialValue={item.grade}
                rules={[{ required: true }]}
                name="grade"
                label="Grade"
              >
                <Input />
              </Form.Item>
              <Form.Item
                initialValue={item.duration.map((t: string) => dayjs(t, "'YYYY-MM-DD'"))}
                hasFeedback
                rules={[{ required: true }]}
                name="rangeTimeValue"
                label="Duration"
              >
                <RangePicker picker="month" format="YYYY-MM" />
              </Form.Item>
              <Form.Item
                initialValue={item.activities}
                rules={[{ required: true }]}
                name="activities"
                label="Activities"
              >
                <TextArea rows={4} />
              </Form.Item>
              <Form.Item
                initialValue={item.description}
                name="description"
                label="Description"
              >
                <TextArea rows={4} />
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

export default EditEducation;

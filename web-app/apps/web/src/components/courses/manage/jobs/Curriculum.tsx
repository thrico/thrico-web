import React, { useCallback } from "react";
import {
  Button,
  Card,
  Checkbox,
  Form,
  type FormProps,
  Input,
  Popconfirm,
  Space,
  Typography,
} from "antd";
import Editor from "../../../common/editor/Editor";
import { CloseOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import DeleteButton from "@repo/ui/DeleteButton";
import { usePathname, useSearchParams } from "next/navigation";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Curriculum: React.FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const view = searchParams.get("view");
  return (
    <Form
      name="basic"
      style={{ width: "100%" }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
    >
      <Card
        extra={
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        }
        style={{ width: "100%" }}
        title="Curriculum"
      >
        <Typography>
          Start putting together your course by creating sections, lectures and
          practice (quizzes, coding exercises and assignments). Start putting
          together your course by creating sections, lectures and practice
          activities (quizzes, coding exercises and assignments). Use your
          course outline to structure your content and label your sections and
          lectures clearly. If you’re intending to offer your course for free,
          the total length of video content must be less than 2 hours.
        </Typography>
        <Form.List name="items">
          {(fields, { add, remove }) => (
            <div
              style={{ display: "flex", rowGap: 16, flexDirection: "column" }}
            >
              {fields.map((field) => (
                <Card
                  style={{ marginTop: 30 }}
                  size="small"
                  title={`Section ${field.name + 1}`}
                  key={field.key}
                  extra={
                    <Popconfirm
                      title="Delete the task"
                      description="Are you sure to delete this task?"
                      onConfirm={() => remove(field.name)}
                      icon={<QuestionCircleOutlined style={{ color: "red" }} />}
                    >
                      <Button danger>Delete</Button>
                    </Popconfirm>
                  }
                >
                  <Form.Item label="Section  Name" name={[field.name, "name"]}>
                    <Input />
                  </Form.Item>

                  {/* Nest Form.List */}
                  <Form.Item label="Item">
                    <Form.List name={[field.name, "list"]}>
                      {(subFields, subOpt) => (
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            rowGap: 16,
                          }}
                        >
                          {subFields.map((subField) => (
                            <Space key={subField.key}>
                              <Form.Item
                                noStyle
                                name={[subField.name, "first"]}
                              >
                                <Input placeholder="first" />
                              </Form.Item>
                              <Form.Item
                                noStyle
                                name={[subField.name, "second"]}
                              >
                                <Input placeholder="second" />
                              </Form.Item>
                              <CloseOutlined
                                onClick={() => {
                                  subOpt.remove(subField.name);
                                }}
                              />
                            </Space>
                          ))}
                          <Button
                            type="dashed"
                            onClick={() => subOpt.add()}
                            block
                          >
                            + Add Curriculum Item
                          </Button>
                        </div>
                      )}
                    </Form.List>
                  </Form.Item>
                </Card>
              ))}

              <Button
                style={{ marginTop: 30, width: 200 }}
                type="primary"
                onClick={() => add()}
                block
              >
                + Add Section
              </Button>
            </div>
          )}
        </Form.List>
      </Card>
    </Form>
  );
};

export default Curriculum;

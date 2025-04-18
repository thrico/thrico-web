import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  StarOutlined,
} from "@ant-design/icons";
import {
  Button,
  Flex,
  Input,
  InputNumber,
  Space,
  theme,
  Typography,
} from "antd";
import React from "react";
import { formPropsQuestionType } from "../../../types/ts-types";
import TextArea from "antd/es/input/TextArea";

const Form = ({ active, setActive, data }: formPropsQuestionType) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const set = data.find((set) => set.id === active);

  return (
    <Flex
      justify="center"
      vertical
      style={{
        width: "100%",
        height: 400,
        padding: 10,
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
      }}
    >
      <Space>
        <Typography style={{ fontSize: 50, color: "danger" }}>*</Typography>
        <Input
          style={{ fontSize: 50 }}
          placeholder="You question here."
          variant="borderless"
        />
      </Space>
      <Space>
        <Input
          size="large"
          style={{ fontSize: 30 }}
          placeholder="Description(Optional)"
          variant="borderless"
        />
      </Space>
      <Space style={{ marginTop: 20 }}>
        <InputType questionType={set?.questionType} />
      </Space>
    </Flex>
  );
};

export default Form;

const InputType = ({ questionType }: any) => {
  switch (questionType) {
    case "rating":
      return (
        <Space style={{ marginTop: 20 }}>
          {[1, 2, , 3, 3, 3, 3, 3, 3].map((set, index) => (
            <Button type={"text"}>
              <StarOutlined style={{ fontSize: 40 }} />
            </Button>
          ))}
        </Space>
      );

    case "yes/no":
      return (
        <Space style={{ marginTop: 20 }}>
          <Button icon={<CheckCircleOutlined />}>Yes</Button>
          <Button icon={<CloseCircleOutlined />}>No</Button>
        </Space>
      );

    case "legal":
      return (
        <Space style={{ marginTop: 20 }}>
          <Button icon={<CheckCircleOutlined />}>I Accept</Button>
          <Button icon={<CloseCircleOutlined />}>I don't accept</Button>
        </Space>
      );

    case "opinionScale":
      return (
        <Space style={{ marginTop: 20 }}>
          {[1, 2, , 3, 3, 3, 3, 3, 3].map((set, index) => (
            <Button type={"dashed"}>{index}</Button>
          ))}
        </Space>
      );

    case "rating":
      return (
        <Space style={{ marginTop: 20 }}>
          {[1, 2, , 3, 3, 3, 3, 3, 3].map((set, index) => (
            <Button type={"text"}>
              <StarOutlined style={{ fontSize: 40 }} />
            </Button>
          ))}
        </Space>
      );
    case "shortText":
      return (
        <Space style={{ marginTop: 20 }}>
          <Input
            style={{ width: 400, marginLeft: 20 }}
            placeholder="Short Text"
            disabled
          />
        </Space>
      );
    case "longText":
      return (
        <Space style={{ marginTop: 20, width: 200 }}>
          <TextArea
            style={{ width: 400, marginLeft: 20 }}
            placeholder="Long Text"
            disabled
          />
        </Space>
      );
    case "number":
      return (
        <Space style={{ marginTop: 20, width: 200 }}>
          <InputNumber
            style={{ width: 400, marginLeft: 20 }}
            placeholder="Number"
            disabled
          />
        </Space>
      );
  }
};

import React, { useCallback } from "react";
import { Flex, Form, Segmented, Select, Space, theme } from "antd";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AppstoreOutlined, BarsOutlined } from "@ant-design/icons";

const ViewSelector = () => {
  const router = useRouter();
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

  const {
    token: { colorPrimary },
  } = theme.useToken();
  const view = searchParams.get("view");
  return (
    <Flex justify="space-between" align="center" style={{ marginTop: "1rem" }}>
      <Space align="center">
        <Form.Item
          style={{ paddingTop: "1rem", width: "15rem" }}
          name=""
          hasFeedback
        ></Form.Item>
      </Space>

      <Segmented
        defaultValue={view === "list" ? "list" : "gird"}
        onChange={(value) =>
          router.push(pathname + "?" + createQueryString("view", value))
        }
        options={[
          { value: "gird", icon: <AppstoreOutlined color={colorPrimary} /> },
          {
            value: "list",
            icon: <BarsOutlined twoToneColor={colorPrimary} />,
          },
        ]}
      />
    </Flex>
  );
};

export default ViewSelector;

import React, { useCallback } from "react";
import GirdSvg from "../../../svg/GirdSvg";
import ListSvg from "../../../svg/ListSvg";
import { Flex, Form, Segmented, Select, Space, theme } from "antd";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  AppstoreOutlined,
  BarsOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

const Layout = () => {
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

  const view = searchParams.get("view");
  const {
    token: { colorPrimary },
  } = theme.useToken();
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
        defaultValue={view}
        onChange={(value) =>
          router.push(pathname + "?" + createQueryString("view", value))
        }
        options={[
          {
            value: "list",
            icon: <BarsOutlined twoToneColor={colorPrimary} />,
          },
          { value: "gird", icon: <AppstoreOutlined color={colorPrimary} /> },
          {
            value: "calender",
            icon: <CalendarOutlined color={colorPrimary} />,
          },
        ]}
      />
    </Flex>
  );
};

export default Layout;

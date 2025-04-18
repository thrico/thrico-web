import { Button, Divider, Flex, Popover, Space, theme } from "antd";
import React, { useCallback, useState } from "react";
import DropDownIcon from "../Icon/DropDownIcon";
import {
  FunnelPlotTwoTone,
  UserOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";

const Total = () => {
  const {
    token: { colorPrimary },
  } = theme.useToken();
  const [open, setOpen] = useState(false);

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  return (
    <Popover
      placement="bottom"
      content={<Content hide={hide} />}
      title=""
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
    >
      <Button style={{ borderRadius: 10 }}>
        <Space>
          <UsergroupAddOutlined twoToneColor={colorPrimary} />
          <span>Members</span> <DropDownIcon />
        </Space>
      </Button>
    </Popover>
  );
};

export default Total;

import { Slider, Switch } from "antd";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Content = ({ hide }) => {
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
  const interests = searchParams.get("interests");

  const [disabled, setDisabled] = useState(false);

  const onChange = (checked: boolean) => {
    setDisabled(checked);
  };

  const finish = () => {
    router.push(pathname + "?" + createQueryString("interests"));
    hide();
  };
  return (
    <>
      <Space style={{ width: 250 }} direction="vertical">
        <Slider
          max={5000}
          min={1}
          range
          defaultValue={[1, 5000]}
          disabled={disabled}
        />

        <Divider />
        <Flex justify="center" style={{ width: "100%" }}>
          <Button onClick={finish} type="primary">
            Show Result
          </Button>
        </Flex>
      </Space>
    </>
  );
};

import {
  Button,
  Divider,
  Popover,
  Radio,
  RadioChangeEvent,
  Space,
  Typography,
  theme,
} from "antd";
import React, { useCallback, useState } from "react";
import { CheckOutlined, FunnelPlotTwoTone } from "@ant-design/icons";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

import { oneFilterContentProps, oneFilterProps } from "./ts-types";
import DropDownIcon from "../Icon/DropDownIcon";

const OneFilter = ({
  options,
  loading,
  filter,
  filterName,
  icon,
}: oneFilterProps) => {
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

  const bg = `${colorPrimary}20`;

  return (
    <Popover
      placement="bottom"
      content={
        <Content
          hide={hide}
          options={options}
          filterName={filterName}
          filter={filter}
        />
      }
      title=""
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
    >
      <Button
        loading={loading}
        style={{
          borderRadius: 10,
          backgroundColor: filter ? bg : "transparent",
        }}
      >
        <Space>
          <span
            style={{
              color: colorPrimary,
              marginTop: 5,
              fontSize: 16,
            }}
          >
            {icon}
          </span>
          <span style={{ textTransform: "capitalize" }}>{filterName}</span>{" "}
          <DropDownIcon />
        </Space>
      </Button>
    </Popover>
  );
};

export default OneFilter;

const Content = ({
  hide,
  options,
  filter,
  filterName,
}: oneFilterContentProps) => {
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
  const mode = searchParams.get("mode");

  return (
    <Radio.Group
      onChange={(e: RadioChangeEvent) => {
        router.push(
          pathname + "?" + createQueryString(filterName, e.target.value)
        );
        hide();
      }}
      optionType="button"
    >
      <Space style={{ width: 200, position: "relative" }} direction="vertical">
        {options?.map((t) => (
          <>
            <Radio.Button value={t.value} style={{ width: "100%" }}>
              <span style={{ textTransform: "capitalize" }}>{t.value}</span>
              {mode === t.value && (
                <Space style={{ position: "absolute", right: 10 }}>
                  <CheckOutlined />
                </Space>
              )}
            </Radio.Button>
          </>
        ))}
      </Space>
    </Radio.Group>
  );
};

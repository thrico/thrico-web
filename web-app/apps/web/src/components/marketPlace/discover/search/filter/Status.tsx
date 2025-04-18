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
import DropDownIcon from "../../../../common/Icon/DropDownIcon";
import { CheckOutlined, FunnelPlotTwoTone } from "@ant-design/icons";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const SortBy = () => {
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
          <FunnelPlotTwoTone twoToneColor={colorPrimary} />
          <span>Status</span> <DropDownIcon />
        </Space>
      </Button>
    </Popover>
  );
};

export default SortBy;

const data = [
  { value: "active", label: "Active" },
  { value: "inActive", label: "InActive" },
  { value: "paused", label: "Paused" },
];
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
  const status = searchParams.get("status");
  return (
    <Radio.Group
      onChange={(e: RadioChangeEvent) => {
        router.push(
          pathname + "?" + createQueryString("status", e.target.value)
        );
        hide();
      }}
      optionType="button"
    >
      <Space style={{ width: 200, position: "relative" }} direction="vertical">
        {data.map((t) => (
          <>
            <Radio.Button value={t.value} style={{ width: "100%" }}>
              {t.label}{" "}
              {status === t.value && (
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

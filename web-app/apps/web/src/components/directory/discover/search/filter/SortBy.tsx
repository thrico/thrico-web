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

  const bg = `${colorPrimary}20`;
  return (
    <Popover
      placement="bottom"
      content={<Content hide={hide} />}
      title=""
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
    >
      <Button style={{ borderRadius: 10, backgroundColor: bg }}>
        <Space>
          <FunnelPlotTwoTone twoToneColor={colorPrimary} />
          <span>Sort By</span> <DropDownIcon />
        </Space>
      </Button>
    </Popover>
  );
};

export default SortBy;

const data = [
  { value: "popular", label: "Popular" },
  { value: "viewed", label: "Most Viewed" },
];

interface props {
  hide: () => void;
}
const Content = ({ hide }: props) => {
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
  const sort = searchParams.get("sort");
  return (
    <Radio.Group
      onChange={(e: RadioChangeEvent) => {
        router.push(pathname + "?" + createQueryString("sort", e.target.value));
        hide();
      }}
      optionType="button"
    >
      <Space style={{ width: 200, position: "relative" }} direction="vertical">
        {data.map((t) => (
          <>
            <Radio.Button value={t.value} style={{ width: "100%" }}>
              {t.label}{" "}
              {sort === t.value && (
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

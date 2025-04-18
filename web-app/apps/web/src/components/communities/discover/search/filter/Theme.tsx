import { Button, Col, Flex, Popover, Row, Space, Spin, theme } from "antd";
import React, { useCallback, useState } from "react";
import DropDownIcon from "../../../../common/Icon/DropDownIcon";

import { FaNetworkWired } from "react-icons/fa6";
const Theme = () => {
  const { data, loading } = getGroupTheme({});
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
  const searchParams = useSearchParams();
  const themes = searchParams.get("theme");
  const bg = `${colorPrimary}20`;
  return (
    <Popover
      placement="bottom"
      content={
        loading ? <Spin /> : <Content data={data?.getGroupTheme} hide={hide} />
      }
      title=""
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
    >
      <Button
        style={{
          borderRadius: 10,
          backgroundColor: themes ? bg : "transparent",
        }}
      >
        <Space>
          <FaNetworkWired
            strokeWidth={1}
            style={{ paddingTop: 1 }}
            color={colorPrimary}
          />
          <span>Theme</span> <DropDownIcon />
        </Space>
      </Button>
    </Popover>
  );
};

export default Theme;

import { Checkbox, Divider } from "antd";
import type { CheckboxProps, GetProp } from "antd";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { getGroupTheme } from "@/graphql/actions/communities";

type CheckboxValueType = GetProp<typeof Checkbox.Group, "value">[number];

const CheckboxGroup = Checkbox.Group;

const Content = ({ hide, data }) => {
  const plainOptions = data.map((set) => ({
    value: set.title,
    label: set.title,
  }));
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
  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>([
    "professions",
  ]);

  const checkAll = plainOptions.length === checkedList?.length;
  const indeterminate =
    checkedList?.length > 0 && checkedList?.length < plainOptions.length;

  const onChange = (list: CheckboxValueType[]) => {
    setCheckedList(list);
  };

  const onCheckAllChange: CheckboxProps["onChange"] = (e) => {
    setCheckedList(
      e.target.checked ? plainOptions.map((set) => set.value) : []
    );
  };

  const finish = () => {
    router.push(
      pathname + "?" + createQueryString("theme", checkedList.toString())
    );
    hide();
  };

  return (
    <>
      <Checkbox
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}
      >
        Select All
      </Checkbox>
      <Divider />
      <Space style={{ width: 250 }} direction="vertical">
        <CheckboxGroup
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 10,
          }}
          options={plainOptions}
          value={checkedList}
          onChange={onChange}
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

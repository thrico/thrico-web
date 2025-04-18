import { Button, Flex, Popover, Space, theme } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import DropDownIcon from "../../../../common/Icon/DropDownIcon";

import { MdOutlineSportsEsports } from "react-icons/md";
const Interests = () => {
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
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
    >
      <Button style={{ borderRadius: 10 }}>
        <Space>
          <MdOutlineSportsEsports fontSize={15} color={colorPrimary} />
          <span>Interests</span> <DropDownIcon />
        </Space>
      </Button>
    </Popover>
  );
};

export default Interests;

import { Checkbox, Divider } from "antd";
import type { CheckboxProps, GetProp } from "antd";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type CheckboxValueType = GetProp<typeof Checkbox.Group, "value">[number];

const CheckboxGroup = Checkbox.Group;

const plainOptions = [
  { value: "movies", label: "Movies" },
  { value: "Ai", label: "Artificial Intelligence" },
  { value: "sports", label: "Sports" },
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
  const interests = searchParams.get("interests");

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
    console.log(plainOptions.map((set) => set.value));
    setCheckedList(
      e.target.checked ? plainOptions.map((set) => set.value) : []
    );
  };

  const finish = () => {
    router.push(
      pathname + "?" + createQueryString("interests", checkedList.toString())
    );
    hide();
  };
  useEffect(() => {
    const data = interests?.split(",");
    setCheckedList(data);
  }, [interests]);

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

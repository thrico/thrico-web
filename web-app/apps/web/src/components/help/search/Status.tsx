import { useSearchParams } from "next/navigation";
import React from "react";
import {
  MdOutlineChromeReaderMode,
  MdOutlinePrivacyTip,
  MdPrivacyTip,
} from "react-icons/md";
import { data } from "../list";
import OneFilter from "@/components/common/filter/OneFilter";

const Status = () => {
  const searchParams = useSearchParams();

  const options = ["Open", "Close"].map((set) => ({
    value: set.toLowerCase(),
    label: set,
  }));

  const filter = searchParams.get("status");
  const filterName = "status";

  return (
    <OneFilter
      loading={false}
      icon={""}
      filter={filter}
      filterName={filterName}
      options={options}
    />
  );
};

export default Status;

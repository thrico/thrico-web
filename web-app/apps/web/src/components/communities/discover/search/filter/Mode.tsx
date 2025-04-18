import OneFilter from "@/components/common/filter/OneFilter";
import { getGroupModeType } from "@/graphql/actions/communities";
import { useSearchParams } from "next/navigation";
import React from "react";
import {
  MdOutlineChromeReaderMode,
  MdOutlinePrivacyTip,
  MdPrivacyTip,
} from "react-icons/md";

const Mode = () => {
  const searchParams = useSearchParams();
  const { data, loading } = getGroupModeType();

  const options = data?.getGroupModeType.map((set: string) => ({
    value: set,
    label: set,
  }));

  const filter = searchParams.get("mode");
  const filterName = "mode";

  return (
    <OneFilter
      icon={<MdOutlineChromeReaderMode />}
      filter={filter}
      filterName={filterName}
      loading={loading}
      options={options}
    />
  );
};

export default Mode;

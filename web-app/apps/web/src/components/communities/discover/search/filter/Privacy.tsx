import OneFilter from "@/components/common/filter/OneFilter";
import { getGroupPrivacyEnum } from "@/graphql/actions/communities";
import { useSearchParams } from "next/navigation";
import React from "react";
import { MdOutlinePrivacyTip, MdPrivacyTip } from "react-icons/md";

const Privacy = () => {
  const searchParams = useSearchParams();
  const { data, loading } = getGroupPrivacyEnum();

  const options = data?.getGroupPrivacyEnum.map((set: string) => ({
    value: set,
    label: set,
  }));

  const filter = searchParams.get("privacy");
  const filterName = "privacy";

  return (
    <OneFilter
      icon={<MdOutlinePrivacyTip />}
      filter={filter}
      filterName={filterName}
      loading={loading}
      options={options}
    />
  );
};

export default Privacy;

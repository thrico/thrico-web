import OneFilter from "@/components/common/filter/OneFilter";
import { getEventsType } from "@/graphql/actions/events";

import { useSearchParams } from "next/navigation";
import React from "react";
import { MdOutlineChromeReaderMode } from "react-icons/md";

const Mode = () => {
  const searchParams = useSearchParams();
  const { data, loading } = getEventsType();

  const options = data?.getEventsType.map((set: string) => ({
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

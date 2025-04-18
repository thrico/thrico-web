import OneFilter from "@/components/common/filter/OneFilter";
import { getEventCostType, getEventsType } from "@/graphql/actions/events";

import { useSearchParams } from "next/navigation";
import React from "react";
import { MdOutlineChromeReaderMode } from "react-icons/md";
import { RiPriceTag3Line } from "react-icons/ri";

const Cost = () => {
  const searchParams = useSearchParams();
  const { data, loading } = getEventCostType();

  const options = data?.getEventCostType.map((set: string) => ({
    value: set,
    label: set,
  }));

  const filter = searchParams.get("cost");
  const filterName = "cost";

  return (
    <OneFilter
      icon={<RiPriceTag3Line />}
      filter={filter}
      filterName={filterName}
      loading={loading}
      options={options}
    />
  );
};

export default Cost;

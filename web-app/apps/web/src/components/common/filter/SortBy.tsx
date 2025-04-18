import { useSearchParams } from "next/navigation";
import React from "react";
import { GoSortAsc } from "react-icons/go";
import OneFilter from "./OneFilter";
const SortBy = () => {
  const searchParams = useSearchParams();

  const options = [
    {
      value: "popular",
      label: "popular",
    },
    {
      value: "viewed",
      label: "Most Viewed",
    },
  ];
  const filter = searchParams.get("sort");
  const filterName = "sort";

  return (
    <OneFilter
      icon={<GoSortAsc />}
      filter={filter}
      filterName={filterName}
      loading={false}
      options={options}
    />
  );
};

export default SortBy;

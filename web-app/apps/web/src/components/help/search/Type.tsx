import { useSearchParams } from "next/navigation";
import React from "react";

import { data } from "../list";
import OneFilter from "@/components/common/filter/OneFilter";

const Type = () => {
  const searchParams = useSearchParams();

  const options = data.map((set) => ({
    value: set.title,
    label: set.title,
  }));

  const filter = searchParams.get("label");
  const filterName = "label";

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

export default Type;

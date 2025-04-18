"use client";

import React, { useEffect } from "react";
import Search from "./search/Search";
import View from "./view/View";

import { useSearchParams } from "next/navigation";
import Help from "./Help";
import { getIssue } from "@/graphql/actions/issues";

const Discover = () => {
  const searchParams = useSearchParams();
  const sort = searchParams.get("sort");

  const search = searchParams.get("search");

  const offset = searchParams.get("offset");
  const view = searchParams.get("view");
  const input = {
    sort,

    search,

    offset: offset ? Number(offset) : 1,
    limit: view === null || "gird" ? 9 : 3,
  };
  const { data, loading, refetch } = getIssue({
    variables: {
      input,
    },
  });

  useEffect(() => {
    refetch();
  }, [sort, search, offset]);

  return (
    <>
      <Search />

      <Help
        totalRecords={data?.getIssues?.totalRecords}
        data={data?.getIssues?.data}
        loading={loading}
      />
    </>
  );
};

export default Discover;

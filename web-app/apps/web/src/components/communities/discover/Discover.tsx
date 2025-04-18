"use client";

import React, { useEffect } from "react";
import Search from "./search/Search";

import { getGroup } from "../../../graphql/actions/communities";
import { useSearchParams } from "next/navigation";
import CommunitiesList from "./list/CommunitiesList";
import useSearchParamsData from "@/components/hooks/useSearchParamsData";

const Discover = () => {
  const params = useSearchParamsData();

  const { data, loading, refetch } = getGroup();

  useEffect(() => {
    refetch();
  }, [params]);

  console.log(data);
  return (
    <>
      <Search />

      <CommunitiesList data={data?.getAllCommunities} loading={loading} />
    </>
  );
};

export default Discover;

"use client";

import React, { useEffect } from "react";

import useSearchParamsData from "@/components/hooks/useSearchParamsData";
import Search from "../search/Search";
import CommunitiesList from "../list/CommunitiesList";
import {
  getFeaturedCommunities,
  getGroup,
} from "@/graphql/actions/communities";

const Featured = () => {
  const params = useSearchParamsData();

  const { data, loading, refetch } = getFeaturedCommunities();

  useEffect(() => {
    refetch();
  }, [params]);

  console.log(data);
  return (
    <>
      <Search />

      <CommunitiesList data={data?.getFeaturedCommunities} loading={loading} />
    </>
  );
};

export default Featured;

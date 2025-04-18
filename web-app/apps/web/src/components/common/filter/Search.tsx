import Input, { SearchProps } from "antd/es/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";
const { Search: SearchInput } = Input;
const SearchBar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  const onSearch: SearchProps["onSearch"] = (value, _e) => {
    router.push(pathname + "?" + createQueryString("search", value));
  };
  return (
    <SearchInput
      defaultValue={search ? search : ""}
      onSearch={onSearch}
      style={{ width: "100%" }}
      placeholder="Enter your community here"
      enterButton="Search"
      allowClear
    />
  );
};

export default SearchBar;

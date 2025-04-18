import { Flex, PaginationProps, Space } from "antd";
import React, { useCallback, useState } from "react";
import { Pagination as AntPagination } from "antd";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
const Pagination = ({ totalRecords }: { totalRecords: number }) => {
  const router = useRouter();
  const pathname = usePathname();

  const searchParams = useSearchParams();
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const offset = searchParams.get("offset");
  const view = searchParams.get("view");
  const onChange: PaginationProps["onChange"] = (page) => {
    router.push(pathname + "?" + createQueryString("offset", page.toString()));
  };

  const showTotal = (total: Number, range: any) =>
    `  ${range[0]}-${range[1]} of ${total} items`;

  return (
    <Flex style={{ width: "100%", padding: 20 }} justify="center">
      <AntPagination
        pageSize={view === null || "gird" ? 9 : 3}
        showQuickJumper
        current={offset ? Number(offset) : 1}
        onChange={onChange}
        total={totalRecords}
        showTotal={showTotal}
      />
    </Flex>
  );
};

export default Pagination;

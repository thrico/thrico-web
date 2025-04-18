import { Redirect } from "@/components/Layout/redirect/Redirect";
import { Flex, Tag, theme } from "antd";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import React, { useCallback } from "react";

const List = () => {
  const {
    token: { colorPrimary },
  } = theme.useToken();
  const searchParams = useSearchParams();
  const sort = searchParams.get("sort");

  const mode = searchParams.get("mode");
  const cost = searchParams.get("cost");
  const router = useRouter();
  const pathname = usePathname();
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <Flex style={{ marginTop: 10 }}>
      {cost && (
        <Tag
          onClose={() =>
            router.push(pathname + "?" + createQueryString("cost", ""))
          }
          color={colorPrimary}
          bordered={false}
          closable
        >
          <span style={{ textTransform: "capitalize" }}>{cost}</span>
        </Tag>
      )}
      {sort && (
        <Tag
          onClose={() =>
            router.push(pathname + "?" + createQueryString("sort", ""))
          }
          color={colorPrimary}
          bordered={false}
          closable
        >
          <span style={{ textTransform: "capitalize" }}>{sort}</span>
        </Tag>
      )}
      {mode && (
        <Tag
          onClose={() =>
            router.push(pathname + "?" + createQueryString("mode", ""))
          }
          color={colorPrimary}
          bordered={false}
          closable
        >
          <span style={{ textTransform: "capitalize" }}>{mode}</span>
        </Tag>
      )}

      {(cost || sort || mode) && (
        <Tag
          color={colorPrimary}
          bordered={false}
          closable
          onClose={() => {
            router.push(pathname);
          }}
        >
          Clear all
        </Tag>
      )}
    </Flex>
  );
};

export default List;

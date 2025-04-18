import { Redirect } from "@/components/Layout/redirect/Redirect";
import { Flex, Tag, theme } from "antd";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import React, { useCallback } from "react";

interface props {
  list: [string];
}
const ClearFilter = ({ list }: props) => {
  return (
    <>
      {list.map((set) => (
        <Label value={set} />
      ))}
      <ClearAll />
    </>
  );
};

const Label = ({ value }: { value: string }) => {
  const {
    token: { colorPrimary },
  } = theme.useToken();
  const searchParams = useSearchParams();
  const filter = searchParams.get(value);
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  const router = useRouter();
  const pathname = usePathname();
  return (
    <>
      {filter && (
        <Tag
          onClose={() =>
            router.push(pathname + "?" + createQueryString(value, ""))
          }
          color={colorPrimary}
          bordered={false}
          closable
        >
          <span style={{ textTransform: "capitalize" }}>{filter}</span>
        </Tag>
      )}
    </>
  );
};

const ClearAll = () => {
  const {
    token: { colorPrimary },
  } = theme.useToken();
  const searchParams = useSearchParams();
  const values = [];
  searchParams.forEach((value, key) => {
    return values.push(key);
  });

  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      {values.length > 0 && (
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
    </>
  );
};

export default ClearFilter;

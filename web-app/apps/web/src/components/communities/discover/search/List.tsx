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
  const themes = searchParams.get("theme");
  const interests = searchParams.get("interests");
  const view = searchParams.get("view");
  const mode = searchParams.get("mode");
  const privacy = searchParams.get("privacy");
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
      {privacy && (
        <Tag
          onClose={() =>
            router.push(pathname + "?" + createQueryString("privacy", ""))
          }
          color={colorPrimary}
          bordered={false}
          closable
        >
          <span style={{ textTransform: "capitalize" }}>{privacy}</span>
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

      {themes && (
        <>
          {[
            themes.split(",").map((set) => (
              <Tag
                onClose={() => {
                  const newValue = themes.split(",").filter((t) => t !== set);
                  router.push(
                    pathname +
                      "?" +
                      createQueryString("theme", newValue.toString())
                  );
                }}
                color={colorPrimary}
                bordered={false}
                closable
              >
                <span style={{ textTransform: "capitalize" }}>{set}</span>
              </Tag>
            )),
          ]}
        </>
      )}

      {interests && (
        <>
          {[
            interests.split(",").map((set) => (
              <Tag
                onClose={() => {
                  const newValue = interests
                    .split(",")
                    .filter((t) => t !== set);

                  router.push(
                    pathname +
                      "?" +
                      createQueryString("interests", newValue.toString())
                  );
                }}
                color={colorPrimary}
                bordered={false}
                closable
              >
                <span style={{ textTransform: "capitalize" }}>{set}</span>
              </Tag>
            )),
          ]}
        </>
      )}

      {(interests || themes || sort || mode) && (
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

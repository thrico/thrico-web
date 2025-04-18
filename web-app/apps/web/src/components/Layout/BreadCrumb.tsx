import React from "react";

import { Breadcrumb, Layout, Menu, theme } from "antd";
import { usePathname } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { HomeOutlined, LeftCircleTwoTone } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import Link from "next/link";

const MainBreadcrumb = () => {
  const {
    token: { colorPrimary },
  } = theme.useToken();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  let path;
  path = pathname.split("/").filter((set) => set !== "");

  const value = searchParams.get("name");
  return (
    <Breadcrumb style={{ margin: "16px 0" }}>
      {path.length !== 0 && (
        <>
          <LeftCircleTwoTone
            twoToneColor={colorPrimary}
            onClick={() => router.back()}
            style={{
              fontSize: "1.3rem",
              marginRight: "1rem",
              cursor: "pointer",
            }}
          />
          <Breadcrumb.Item>
            <Link href="/">
              <HomeOutlined />
            </Link>
          </Breadcrumb.Item>
        </>
      )}

      {path.map((t, index) => (
        <>
          {path.length === index + 1 ? (
            <>
              {value ? (
                <Breadcrumb.Item key={index}>
                  <span key={index} style={{ textTransform: "capitalize" }}>
                    {value}
                  </span>
                </Breadcrumb.Item>
              ) : (
                <Breadcrumb.Item key={index}>
                  <span key={index} style={{ textTransform: "capitalize" }}>
                    {t}
                  </span>
                </Breadcrumb.Item>
              )}
            </>
          ) : (
            <Breadcrumb.Item key={index}>
              <span key={index} style={{ textTransform: "capitalize" }}>
                {t}
              </span>
            </Breadcrumb.Item>
          )}
        </>
      ))}
    </Breadcrumb>
  );
};

export default MainBreadcrumb;

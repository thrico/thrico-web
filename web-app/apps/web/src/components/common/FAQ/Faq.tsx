"use client";
import type { CSSProperties } from "react";
import React from "react";
import { CaretRightOutlined } from "@ant-design/icons";
import type { CollapseProps } from "antd";
import { Collapse, theme } from "antd";
import { getModuleFaq } from "@/graphql/actions/organization";
import Loading from "./Loading";

interface faq {
  title: string;
  description: string;
}

const FAQS = ({ module }: { module: string }) => {
  const { data, loading } = getModuleFaq({
    variables: {
      input: {
        module: module,
      },
    },
  });

  const { token } = theme.useToken();

  const items = data?.getModuleFaq.map((set: faq, index: number) => ({
    key: index,
    label: set?.title,
    children: <div>{set.description}</div>,
  }));

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <Collapse
          bordered={false}
          defaultActiveKey={["1"]}
          style={{ background: token.colorBgContainer }}
          items={items}
        />
      )}
    </>
  );
};

export default FAQS;

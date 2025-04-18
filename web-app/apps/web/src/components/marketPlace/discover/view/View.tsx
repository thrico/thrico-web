import { Card, Space } from "antd";
import React from "react";
import ListView from "./ListView";
import GirdView from "./GirdView";
import { useSearchParams } from "next/navigation";

import { AllEvents, events } from "../type";
import { TagsOutlined, UsergroupAddOutlined } from "@ant-design/icons";

const View = ({ data, loading }: AllEvents) => {
  const searchParams = useSearchParams();
  const view = searchParams.get("view");

  return (
    <>
      <Card style={{ marginTop: 20 }}>
        {view === "gird" && <GirdView loading={loading} data={data} />}
        {view === null && <GirdView data={data} loading={loading} />}
        {view === "list" && <ListView data={data} />}
      </Card>
    </>
  );
};

export default View;

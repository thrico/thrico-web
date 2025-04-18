import { Card, Pagination, Space } from "antd";
import React from "react";
import ListView from "./ListView";
import GirdView from "./GirdView";
import { useSearchParams } from "next/navigation";
// import CalenderView from "./CalenderView";
import { AllEvents, events } from "../type";
import DiscoverLoading from "@/components/common/loading/DiscoverLoading";

const View = ({ data, loading, totalRecords }: AllEvents) => {
  const searchParams = useSearchParams();
  const view = searchParams.get("view");

  return (
    <>
      <Card style={{ marginTop: 20 }}>
        {loading && <DiscoverLoading />}
        {view === "list" ? (
          <>{!loading && <ListView data={data} loading={loading} />}</>
        ) : (
          <>{!loading && <GirdView data={data} loading={loading} />}</>
        )}
        <Pagination totalRecords={totalRecords} />
      </Card>
    </>
  );
};

export default View;

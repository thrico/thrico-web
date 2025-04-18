import { Card, List } from "antd";
import React from "react";
import { useSearchParams } from "next/navigation";

import { group } from "./ts-types";
import DiscoverLoading from "@/components/common/loading/DiscoverLoading";
import CommunitiesCard from "./Card/CommunitiesCard";
const CommunitiesList = ({
  data,
  loading,
}: {
  data: [group];
  loading: boolean;
  totalRecords: number;
}) => {
  const searchParams = useSearchParams();
  const view = searchParams.get("view");
  return (
    <>
      <div style={{ marginTop: 20 }}>
        {loading && <DiscoverLoading />}
        <List
          loading={loading}
          grid={{
            gutter: 16,
            xs: 1,
            sm: 3,
            md: 3,
            lg: 3,
            xl: 3,
            xxl: 3,
          }}
          dataSource={data}
          renderItem={(item, index) => (
            <>
              <CommunitiesCard item={item} index={index} view={view} />
            </>
          )}
        />
      </div>
    </>
  );
};

export default CommunitiesList;

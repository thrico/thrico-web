"use client";
import { List } from "antd";
import ProfileCard from "./ProfileCard";
import { getNetwork } from "@/graphql/actions/network";
import Loading from "./Loading";
import LoadingProfileSkeleton from "./Loading";

const NetworkList = () => {
  const { data, refetch, loading } = getNetwork();

  return (
    <>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 3,
          md: 3,
          lg: 3,
          xl: 4,
          xxl: 4,
        }}
        
        loading={loading}
        dataSource={data?.getNetwork}
        renderItem={(item) => <ProfileCard item={item} />}
      />
    </>
  );
};

export default NetworkList;

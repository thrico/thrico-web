import { Space, Spin } from "antd";
import React from "react";
import ListOfSponsors from "./ListOfSponsors";
import { getSponsorshipEvents } from "../../../../graphql/actions/events";
import { useParams } from "next/navigation";
import ListOfSponsorShip from "./ListOfSponsorShip";

const SponsorShip = () => {
  const { slug } = useParams();

  const { data, loading } = getSponsorshipEvents({
    variables: {
      input: {
        slug,
      },
    },
  });

  return (
    <Space style={{ width: "100%" }} direction="vertical">
      {loading && <Spin />}
      {!loading && (
        <ListOfSponsorShip
          data={data?.getSponsorshipEvents?.eventSponsorship}
        />
      )}
      {!loading && <ListOfSponsors data={data.getSponsorshipEvents} />}
    </Space>
  );
};

export default SponsorShip;

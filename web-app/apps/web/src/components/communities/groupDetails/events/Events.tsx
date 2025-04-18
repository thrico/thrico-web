import React from "react";
import EmptyView from "./Empty";
import { getAllGroupEvents } from "../../../../graphql/actions/communities";
import AllEvents from "./AllEvents";

const Events = ({ id, isAdmin }) => {
  const { data, loading } = getAllGroupEvents({
    variables: {
      input: {
        id,
      },
    },
  });
  return (
    <>
      {!loading && !data?.getAllGroupEvents?.length && (
        <EmptyView id={id} isAdmin={isAdmin} />
      )}
      {!loading && data?.getAllGroupEvents?.length && (
        <AllEvents data={data?.getAllGroupEvents} id={id} isAdmin={isAdmin} />
      )}
    </>
  );
};

export default Events;

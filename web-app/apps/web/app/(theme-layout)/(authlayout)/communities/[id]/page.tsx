"use client";
import List from "@/components/communities/details/dicussion/List";
import FeedCreator from "@/components/feed/add/FeedCreator";
import { addFeedCommunities } from "@/graphql/actions/feed";
import { useParams } from "next/navigation";
import React from "react";

function Discussion() {
  const { id } = useParams<{ id: string }>();

  const onCompleted = (close) => {
    close();
  };
  const [add, { loading }] = addFeedCommunities({
    onCompleted,
    id,
  });

  const createFeed = (data) => {
    add({
      variables: {
        input: {
          ...data,
          source: "group",
          groupID: id,
        },
      },
    });
  };

  return (
    <>
      <FeedCreator
        add={createFeed}
        loading={loading}
        onCompleted={onCompleted}
        type={"communities"}
      />
      <List />
    </>
  );
}

export default Discussion;

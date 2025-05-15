"use client";

import React from "react";

import Discussion from "@/components/homeFeed/Feed";

import FeedCreator from "@/components/feed/add/FeedCreator";
import { addFeed } from "@/graphql/actions/feed";

const HomeFeed = () => {
  const onCompleted = (close) => {
    // close();
  };

  const [add, { loading }] = addFeed({
    onCompleted,
  });

  const createFeed = (data) => {
    add({
      variables: {
        input: {
          ...data,
        },
      },
    });
  };

  return (
    <>
      {/* <FeedCreator
        add={createFeed}
        loading={loading}
        onCompleted={onCompleted}
        type={"feed"}
      /> */}

      <Discussion />
    </>
  );
};

export default HomeFeed;

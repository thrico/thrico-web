import { useApolloClient } from "@apollo/client";
import FeedCard from "./Card";
import {
  GET_COMMUNITIES_FEED,
  GET_COMMUNITIES_FEED_LIST,
  GET_FEED,
  GET_JOB_FEED,
  GET_MARKETPLACE_FEED,
} from "@/graphql/queries/feed";
import { checkValueLikes, checkValueWishList } from "@/components/hooks/feed";

const Feed = ({ item }) => {
  const client = useApolloClient();
  console.log(item);

  const wishlistUpdate = async () => {
    try {
      const { getFeed } = client.readQuery({
        query: GET_FEED,
      });

      // const { getJobFeed } = client.readQuery({
      //   query: GET_JOB_FEED,
      // });

      // const { getMarketPlaceFeed } = client.readQuery({
      //   query: GET_MARKETPLACE_FEED,
      // });

      // const { getCommunitiesFeed } = client.readQuery({
      //   query: GET_COMMUNITIES_FEED,
      // });

      const newFeedData = await checkValueWishList(getFeed, item);

      // const newFeedJobData = await checkValueWishList(getJobFeed, item);
      // const newFeedCommunitiesData = await checkValueWishList(
      //   getCommunitiesFeed,
      //   item
      // );

      // const newFeedMarketPlaceData = await checkValueWishList(
      //   getMarketPlaceFeed,
      //   item
      // );
      client.writeQuery({
        query: GET_FEED,
        data: {
          getFeed: newFeedData,
        },
      });
      // client.writeQuery({
      //   query: GET_JOB_FEED,
      //   data: {
      //     getFeed: newFeedJobData,
      //   },
      // });
      // client.writeQuery({
      //   query: GET_COMMUNITIES_FEED,
      //   data: {
      //     getFeed: newFeedCommunitiesData,
      //   },
      // });
      // client.writeQuery({
      //   query: GET_MARKETPLACE_FEED,
      //   data: {
      //     getFeed: newFeedMarketPlaceData,
      //   },
      // });
    } catch (error) {
      console.log(error);
    }
  };

  const likeUpdate = async () => {
    const { getFeed } = client.readQuery({
      query: GET_FEED,
    });

    // const { getJobFeed } = client.readQuery({
    //   query: GET_JOB_FEED,
    // });

    // const { getMarketPlaceFeed } = client.readQuery({
    //   query: GET_MARKETPLACE_FEED,
    // });

    // const { getCommunitiesFeed } = client.readQuery({
    //   query: GET_COMMUNITIES_FEED,
    // });

    const newFeedData = await checkValueLikes(getFeed, item);
    // const newFeedJobData = await checkValueLikes(getJobFeed, item);
    // const newFeedCommunitiesData = await checkValueLikes(
    //   getCommunitiesFeed,
    //   item
    // );

    // const newFeedMarketPlaceData = await checkValueLikes(
    //   getMarketPlaceFeed,
    //   item
    // );

    client.writeQuery({
      query: GET_FEED,
      data: {
        getFeed: newFeedData,
      },
    });
    // client.writeQuery({
    //   query: GET_JOB_FEED,
    //   data: {
    //     getFeed: newFeedJobData,
    //   },
    // });
    // client.writeQuery({
    //   query: GET_COMMUNITIES_FEED_LIST,
    //   data: {
    //     getFeed: newFeedCommunitiesData,
    //   },
    // });
    // client.writeQuery({
    //   query: GET_MARKETPLACE_FEED,
    //   data: {
    //     getFeed: newFeedMarketPlaceData,
    //   },
    // });
  };
  return (
    <FeedCard
      item={item}
      likeUpdate={likeUpdate}
      wishlistUpdate={wishlistUpdate}
    />
  );
};

export default Feed;

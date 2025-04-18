import { useApolloClient } from "@apollo/client";

import { checkValueLikes, checkValueWishList } from "@/components/hooks/feed";
import { GET_COMMUNITIES_FEED_LIST } from "@/graphql/queries/feed";
import FeedCard from "@/components/feed/FeedCard/Card";

const Feed = ({ item, id }) => {
  console.log(item.id);
  const client = useApolloClient();

  const wishlistUpdate = async () => {
    try {
      const { getCommunitiesFeedList } = client.readQuery({
        query: GET_COMMUNITIES_FEED_LIST,
        variables: {
          input: {
            id: id,
          },
        },
      });

      const newFeedData = await checkValueWishList(
        getCommunitiesFeedList,
        item
      );

      client.writeQuery({
        query: GET_COMMUNITIES_FEED_LIST,
        data: {
          getCommunitiesFeedList: newFeedData,
        },
        variables: {
          input: {
            id: id,
          },
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const likeUpdate = async () => {
    const { getCommunitiesFeedList } = client.readQuery({
      query: GET_COMMUNITIES_FEED_LIST,
      variables: {
        input: {
          id: id,
        },
      },
    });

    const newFeedData = await checkValueLikes(getCommunitiesFeedList, item);

    console.log(newFeedData);

    client.writeQuery({
      query: GET_COMMUNITIES_FEED_LIST,
      data: {
        getCommunitiesFeedList: newFeedData,
      },
      variables: {
        input: {
          id: id,
        },
      },
    });
  };
  return (
    <FeedCard
      item={{ ...item, source: "dashboard" }}
      likeUpdate={likeUpdate}
      wishlistUpdate={wishlistUpdate}
    />
  );
};

export default Feed;

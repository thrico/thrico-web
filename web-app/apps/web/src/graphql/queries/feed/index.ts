export const privacy = `
    id
    repostId
      source
     privacy
      isLiked
      isWishList
      isOwner
      media
      totalComment
      totalReactions
      totalReShare
      description
      createdAt
       marketPlace {
      category
      condition
      description
      createdAt
     
      price
      media
      title
    }
      story {
      id
      title
      cover
      createdAt
      subTitle
      description
      updatedAt
    }
      group {
        id
        cover
        title
      }
 
      user {
      id
        about {
          currentPosition
        }
        avatar
        firstName
        lastName
      }
         event {
      cover
      eventType
      registrationEndDate
      eventStartTime
      eventEndTime
    
      name
    
     
      }
`;

import { gql } from "@apollo/client";

export const ADD_FEED = gql`
  mutation AddFeed($input: inputAddFeed) {
    addFeed(input: $input) {
      id
      isLiked
      isOwner
      isWishList
      totalComment
      totalReactions
      description
      createdAt
      media
      user {
        about {
          currentPosition
        }
        avatar
        firstName
        lastName
      }
    }
  }
`;

export const GET_JOB_FEED = gql`
  query getJobFeed {
    getJobFeed {
     ${privacy}
    }
  }
`;
export const GET_FEED_DETAILS_ID = gql`
query GetFeedDetailsById($input: inputId) {
  getFeedDetailsById(input: $input) {
    ${privacy}
  }
}`;
export const REPOST_FEED = gql`
mutation RepostFeedWithThought($input: repostFeedWithThought!) {
  repostFeedWithThought(input: $input) {
    ${privacy}
  }
}`;

export const GET_MARKETPLACE_FEED = gql`
  query getMarketPlaceFeed {
    getMarketPlaceFeed {
     ${privacy}
    }
  }
`;

export const GET_EVENTS_FEED = gql`
  query getUserEventsFeed {
    getUserEventsFeed {
     ${privacy}
    }
  }
`;
export const GET_FEED = gql`
  query GetFeed {
    getFeed {
     ${privacy}
    }
  }
`;

export const GET_PERSONALIZED_FEED = gql`
  query getPersonalizedFeed {
    getPersonalizedFeed {
     ${privacy}
    }
  }
`;

export const GET_COMMUNITIES_FEED = gql`
  query GetCommunitiesFeed {
    getCommunitiesFeed {
     ${privacy}
    }
  }
`;
export const ADD_COMMENT = gql`
  mutation AddComment($input: inputComment) {
    addComment(input: $input) {
      id
      isOwner
      isPostOwner
      content
      createdAt
      user {
        about {
          currentPosition
        }
        avatar
        firstName
        id
        lastName
      }
    }
  }
`;
export const GET_FEED_COMMENT = gql`
  query GetFeedComment($input: inputId) {
    getFeedComment(input: $input) {
      content
      id
      isOwner
      isPostOwner
      createdAt
      user {
        about {
          currentPosition
        }
        avatar
        firstName
        id
        lastName
      }
    }
  }
`;
export const WISHLIST_FEED = gql`
  mutation WishListFeed($input: inputId) {
    wishListFeed(input: $input) {
      status
    }
  }
`;
export const LIKE_FEED = gql`
  mutation LikeFeed($input: inputId) {
    likeFeed(input: $input) {
      status
    }
  }
`;

export const DELETE_FEED = gql`
  mutation DeleteFeed($input: inputId) {
    deleteFeed(input: $input) {
      id
    }
  }
`;
export const DELETE_COMMENT = gql`
  mutation DeleteCommentFeed($input: inputDeleteFeedComment) {
    deleteCommentFeed(input: $input) {
      id
    }
  }
`;

export const ADD_COMMUNITIES_FEED = gql`
  mutation AddFeedCommunities($input: inputAddFeed) {
    addFeedCommunities(input: $input) {
      createdAt
      description
      id
      isLiked
      isOwner
      isWishList
      source
      totalComment
      totalReShare
      totalReactions
      user {
        id
        about {
          currentPosition
        }
        avatar
        firstName
        isOnline
        lastName
      }
    }
  }
`;

export const GET_COMMUNITIES_FEED_LIST = gql`
  query getCommunitiesFeedList($input: inputId) {
    getCommunitiesFeedList(input: $input) {
      ${privacy}
    }
  }
`;

export const GET_USER_FEED = gql`
query GetUserActivityFeed($input: inputId!) {
  getUserActivityFeed(input: $input) {
      ${privacy}
    }
  }
`;

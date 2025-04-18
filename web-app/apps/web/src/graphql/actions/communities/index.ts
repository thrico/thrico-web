import { useMutation, useQuery } from "@apollo/client";
import {
  ADD_GROUP_FEED,
  ALL_ALUMNI_FEED,
  COMMUNITY_MEMBER,
  CREATE_COMMUNITIES,
  CREATE_GROUP,
  GET_COMMUNITIES_DETAILS,
  GET_FEATURED_COMMUNITIES,
  GET_FEATURED_GROUP,
  GET_GROUP,
  GET_GROUP_BY_PEOPLE,
  GET_GROUP_BY_SLUG,
  GET_GROUP_FEED,
  GET_GROUP_TYPE,
  GET_RECOMMENDATION,
  GROUP_EVENTS,
  GROUP_INTERESTS,
  GROUP_PEOPLE,
  GROUP_REQUEST,
  GROUP_THEME,
  JOIN_COMMUNITIES,
  JOIN_GROUP,
  LIKE_FEED,
  PRIVACY_ENUM,
  WISHLIST_COMMUNITY,
} from "../../queries/communities";
import { ACCEPT_REQUEST } from "../../queries";

export const createGroup = (options: any) =>
  useMutation(CREATE_GROUP, {
    onCompleted(data) {
      options.onCompleted(data);
    },
  });

export const getGroup = () => useQuery(GET_GROUP);

export const getFeaturedGroup = (options: any) =>
  useQuery(GET_FEATURED_GROUP, options);
export const getGroupModeType = () => useQuery(GET_GROUP_TYPE);
export const getGroupBySlug = (options: any) =>
  useQuery(GET_GROUP_BY_SLUG, options);

export const getGroupBySlugPeople = (options: any) =>
  useQuery(GET_GROUP_BY_PEOPLE, options);

export const addFeedGroup = (options: any) =>
  useMutation(ADD_GROUP_FEED, {
    onCompleted(data) {
      options.onCompleted();
    },
    update(cache, { data: { addFeedGroup } }) {
      console.log(options.groupId);
      try {
        const { getGroupFeed }: any = cache.readQuery({
          query: GET_GROUP_FEED,
          variables: {
            input: {
              id: options.groupId,
            },
          },
        });

        cache.writeQuery({
          query: GET_GROUP_FEED,
          variables: {
            input: {
              id: options.groupId,
            },
          },
          data: { getGroupFeed: [addFeedGroup, ...getGroupFeed] },
        });
      } catch (error) {
        console.log(error);
      }
      // console.log(likeFeed);

      // console.log(data);
    },
  });

export const getGroupFeed = (options: any) => useQuery(GET_GROUP_FEED, options);
export const getAllAlumniFeed = (options: any) =>
  useQuery(ALL_ALUMNI_FEED, options);

export const likeFeed = (options: any) =>
  useMutation(LIKE_FEED, {
    update(cache, { data: { likeFeed } }) {
      console.log(options.groupId);
      try {
        const { getGroupFeed }: any = cache.readQuery({
          query: GET_GROUP_FEED,
          variables: {
            input: {
              id: options.groupId,
            },
          },
        });

        let arr = getGroupFeed;

        const objIndex = getGroupFeed.findIndex(
          (set: any) => set.id === options.id
        );

        let set = getGroupFeed[objIndex];

        const update = {
          ...set,
          reactions: [
            likeFeed,
            ...set.reactions.filter((t) => t.user.id !== likeFeed.user.id),
          ],
        };
        // console.log(update, getGroupFeed);

        const updatedArr = arr.map((set) =>
          set.id !== update.id ? set : update
        );

        cache.writeQuery({
          query: GET_GROUP_FEED,
          variables: {
            input: {
              id: options.groupId,
            },
          },
          data: { getGroupFeed: [...updatedArr] },
        });
      } catch (error) {
        console.log(error);
      }
    },
  });

export const getAllGroupPeople = (options: any) =>
  useQuery(GROUP_PEOPLE, options);

export const joinGroup = (options: any) =>
  useMutation(JOIN_GROUP, {
    onCompleted() {
      console.log(options);
      options.options();
    },
    update(cache, { data: { joinGroup } }) {},
  });

export const getAllGroupRequest = (options: any) =>
  useQuery(GROUP_REQUEST, options);

export const acceptRequestGroup = (options: any) =>
  useMutation(ACCEPT_REQUEST, {
    onCompleted() {
      options.onCompleted();
    },
    update(cache, { data: { acceptRequestGroup } }) {
      console.log(options.id);
      try {
        const { getAllGroupRequest }: any = cache.readQuery({
          query: GROUP_REQUEST,
          variables: {
            input: {
              id: options.id,
            },
          },
        });

        const update = getAllGroupRequest.filter(
          (set) => set.id !== acceptRequestGroup.id
        );

        cache.writeQuery({
          query: GROUP_REQUEST,
          variables: {
            input: {
              id: options.id,
            },
          },
          data: { getAllGroupRequest: [...update] },
        });
      } catch (error) {
        console.log(error);
      }
    },
  });

export const getAllGroupEvents = (options: any) =>
  useQuery(GROUP_EVENTS, options);

export const getGroupTheme = (options: any) => useQuery(GROUP_THEME, options);

export const getGroupInterests = (options: any) =>
  useQuery(GROUP_INTERESTS, options);

export const getGroupPrivacyEnum = () => useQuery(PRIVACY_ENUM);

export const getGroupsRecommendation = (options: any) =>
  useQuery(GET_RECOMMENDATION, options);

export const getCommunitiesMember = (options: any) =>
  useQuery(COMMUNITY_MEMBER, options);

export const createCommunities = (options: any) =>
  useMutation(CREATE_COMMUNITIES, {
    onCompleted() {
      console.log(options.onCompleted);
      options.onCompleted();
    },
  });

export const getFeaturedCommunities = () => useQuery(GET_FEATURED_COMMUNITIES);

export const joinCommunity = (options: any) =>
  useMutation(JOIN_COMMUNITIES, {
    update(cache, { data: { joinCommunity } }) {
      try {
        console.log(joinCommunity);
        const { getAllCommunities }: any = cache.readQuery({
          query: GET_GROUP,
        });

        const newData = getAllCommunities.map((item: any) => {
          if (item.id === joinCommunities?.id) {
            return { ...item, status: joinCommunities?.status };
          } else {
            return item;
          }
        });

        cache.writeQuery({
          query: GET_GROUP,
          data: { getAllCommunities: [...newData] },
        });
      } catch (error) {
        console.log(error);
      }
    },
  });

export const wishListCommunity = (options: any) =>
  useMutation(WISHLIST_COMMUNITY, {
    onCompleted() {
      options.onCompleted();
    },
  });

export const getCommunityDetails = (options: any) =>
  useQuery(GET_COMMUNITIES_DETAILS, options);

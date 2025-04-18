import { useMutation, useQuery } from "@apollo/client";
import { GET_PROFILE_INFO, GET_PROFILE_TAGS, UPDATE_AVATAR, UPDATE_COVER_IMAGE, UPDATE_PROFILE_DETAILS, UPDATE_PROFILE_TAGS } from "../../queries/profile";

export const getProfileTag = () => useQuery(GET_PROFILE_TAGS);

export const editProfileTag = (options: any) =>
  useMutation(UPDATE_PROFILE_TAGS, {
    onCompleted() {
      options.onCompleted();
    },
    update(cache, { data: { editProfileTag } }) {
      try {
        cache.writeQuery({
          query: GET_PROFILE_TAGS,
          data: {
            getProfileTag: editProfileTag,
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
  });


export const updateProfileCover = (options: any) =>
  useMutation(UPDATE_COVER_IMAGE);


export const updateProfileAvatar = (options: any) =>
  useMutation(UPDATE_AVATAR, options);


export const getProfileInfo = () => useQuery(GET_PROFILE_INFO);

export const updateProfileDetails = (options: any) => useMutation(UPDATE_PROFILE_DETAILS, options);
import { useMutation, useQuery } from "@apollo/client";
import {
  ALUMNI_STORY_BY_USER,
  ALUMNI_STORY_POSTED_BY_USER,
  GET_ALUMNI_STORIES,
} from "../../queries/alumni-stories";
import { CAMPAIGN_PAYMENT } from "../../queries/giving";

export const getAlumniStoriesCategory = () => useQuery(GET_ALUMNI_STORIES);

export const alumniStoryPostedByUser = (options: any) =>
  useMutation(ALUMNI_STORY_POSTED_BY_USER, {
    onCompleted() {
      options.onCompleted();
    },
  });

export const getMyAlumniStories = () => useQuery(ALUMNI_STORY_BY_USER);

export const campaignFundPayment = (options: any) =>
  useMutation(CAMPAIGN_PAYMENT, {
    onCompleted(data) {
      options.onCompleted(data);
    },
  });

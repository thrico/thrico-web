import { useMutation, useQuery } from "@apollo/client";
import { GET_ALUMNI_STORIES } from "../../queries/alumni-stories";
import { ADD_FUND_CAMPAIGN, APPROVED_CAMPAIGN } from "../../queries/giving";

export const getAlumniStoriesCategory = () => useQuery(GET_ALUMNI_STORIES);

export const addFundCampaign = (options: any) =>
  useMutation(ADD_FUND_CAMPAIGN, {
    onCompleted() {
      options.onCompleted();
    },
  });

export const getApprovedCampaign = () => useQuery(APPROVED_CAMPAIGN);

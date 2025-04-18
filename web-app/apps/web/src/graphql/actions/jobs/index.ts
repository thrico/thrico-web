import { useMutation, useQuery } from "@apollo/client";
import {
  APPLY_JOB,
  DUPLICATE_JOB,
  GET_ALL_JOBS,
  JOBS_POSTED_BY_ME,
  POST_JOB,
} from "../../queries/jobs";
import { GET_JOB_BY_SLUG } from "../../queries/events";

export const getAllJobs = (options: any) => useQuery(GET_ALL_JOBS, options);

export const postJob = (options: any) =>
  useMutation(POST_JOB, {
    onCompleted() {
      options.onCompleted();
    },
    update(cache, { data: { postJob } }) {
      try {
        const { getAllJobs }: any = cache.readQuery({
          query: GET_ALL_JOBS,
        });

        cache.writeQuery({
          query: GET_ALL_JOBS,
          data: {
            getAllJobs: [...postJob, ...getAllJobs],
          },
        });

        const { getJobPostedByMe }: any = cache.readQuery({
          query: JOBS_POSTED_BY_ME,
        });
        cache.writeQuery({
          query: JOBS_POSTED_BY_ME,
          data: {
            getJobPostedByMe: [...postJob, ...getJobPostedByMe],
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
  });

export const getJobPostedByMe = (options: any) =>
  useQuery(JOBS_POSTED_BY_ME, options);

export const duplicateJob = (options: any) =>
  useMutation(DUPLICATE_JOB, {
    onCompleted() {
      options.onCompleted();
    },
    update(cache, { data: { duplicateJob } }) {
      try {
        const { getJobPostedByMe }: any = cache.readQuery({
          query: JOBS_POSTED_BY_ME,
        });
        cache.writeQuery({
          query: JOBS_POSTED_BY_ME,
          data: {
            getJobPostedByMe: [...duplicateJob, ...getJobPostedByMe],
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
  });

export const getJobBySlug = (options: any) =>
  useQuery(GET_JOB_BY_SLUG, options);

export const applyJob = (options: any) => useMutation(APPLY_JOB, options);

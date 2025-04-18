import { useMutation, useQuery } from "@apollo/client";
import {
  ADD_ISSUE_COMMENT,
  ALL_ISSUES,
  CREATE_ISSUES,
  GET_ISSUE_COMMENT,
  ISSUES_BY_SLUG,
} from "../../queries/issues";

export const createIssue = (options: any) => useMutation(CREATE_ISSUES, {});

export const getIssue = (options: any) => useQuery(ALL_ISSUES, options);

export const getIssueBySlug = (options: any) =>
  useQuery(ISSUES_BY_SLUG, options);

export const getIssueComment = (options: any) =>
  useQuery(GET_ISSUE_COMMENT, options);

export const addIssueComment = (options: any) =>
  useMutation(ADD_ISSUE_COMMENT, {
    update(cache, { data: { addIssueComment } }) {
      try {
        const { getIssueComment }: any = cache.readQuery({
          query: GET_ISSUE_COMMENT,
          variables: {
            input: {
              id: options.id,
            },
          },
        });

        cache.writeQuery({
          query: GET_ISSUE_COMMENT,
          data: {
            getIssueComment: [...addIssueComment, ...getIssueComment],
          },
          variables: {
            input: {
              id: options.id,
            },
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
  });

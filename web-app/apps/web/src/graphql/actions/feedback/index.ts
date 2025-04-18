import { useMutation, useQuery } from "@apollo/client";
import {
  ADD_FEEDBACK_FORM,
  ADD_FEEDBACK_QUESTION,
  DUPLICATE_FEEDBACK,
  EDIT_FEEDBACK,
  GET_FEEDBACK_QUESTION,
  GET_FEEDBACK_TYPE,
} from "../../queries/feedback";
import { feedBackType } from "../../../types/ts-types";

export const getFeedbackFormByType = (options: any) =>
  useQuery(GET_FEEDBACK_TYPE, options);

export const addFeedBackForm = (options: any) =>
  useMutation(ADD_FEEDBACK_FORM, {
    onCompleted() {
      options.onCompleted();
    },
    update(cache, { data: { addFeedBackForm } }) {
      try {
        const { getFeedbackFormByType }: any = cache.readQuery({
          query: GET_FEEDBACK_TYPE,
          variables: {
            input: {
              type: options.type,
            },
          },
        });

        cache.writeQuery({
          query: GET_FEEDBACK_TYPE,
          data: {
            getFeedbackFormByType: [
              ...addFeedBackForm,
              ...getFeedbackFormByType,
            ],
          },
          variables: {
            input: {
              type: options.type,
            },
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
  });

export const editFeedBackForm = (options: any) =>
  useMutation(EDIT_FEEDBACK, {
    onCompleted() {
      options.onCompleted();
    },

    update(cache, { data: { editFeedBackForm } }) {
      try {
        console.log(editFeedBackForm, "ssd");

        const { getFeedbackFormByType }: any = cache.readQuery({
          query: GET_FEEDBACK_TYPE,
          variables: {
            input: {
              type: options.type,
            },
          },
        });

        console.log(getFeedbackFormByType);

        const updated = getFeedbackFormByType.map((obj: feedBackType) => {
          if (obj.id === editFeedBackForm.id) {
            return { ...editFeedBackForm };
          }
          return obj;
        });
        cache.writeQuery({
          query: GET_FEEDBACK_TYPE,
          data: {
            getFeedbackFormByType: [...updated],
          },
          variables: {
            input: {
              type: options.type,
            },
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
  });

export const duplicateFeedBackForm = (options: any) =>
  useMutation(DUPLICATE_FEEDBACK, {
    onCompleted() {
      options.onCompleted();
    },
    update(cache, { data: { duplicateFeedBackForm } }) {
      try {
        const { getFeedbackFormByType }: any = cache.readQuery({
          query: GET_FEEDBACK_TYPE,
          variables: {
            input: {
              type: options.type,
            },
          },
        });

        cache.writeQuery({
          query: GET_FEEDBACK_TYPE,
          data: {
            getFeedbackFormByType: [
              ...duplicateFeedBackForm,
              ...getFeedbackFormByType,
            ],
          },
          variables: {
            input: {
              type: options.type,
            },
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
  });

export const getFeedbackQuestion = (options: any) =>
  useQuery(GET_FEEDBACK_QUESTION, options);

export const addFeedBackQuestion = (options: any) =>
  useMutation(ADD_FEEDBACK_QUESTION, {
    onCompleted() {
      options.onCompleted();
    },

    update(cache, { data: { addFeedBackQuestion } }) {
      try {
        const { getFeedbackQuestion }: any = cache.readQuery({
          query: GET_FEEDBACK_QUESTION,
          variables: {
            input: {
              id: options.id,
            },
          },
        });

        cache.writeQuery({
          query: GET_FEEDBACK_QUESTION,
          data: {
            getFeedbackQuestion: {
              feedBackQuestion: [
                ...getFeedbackQuestion.feedBackQuestion,
                ...addFeedBackQuestion,
              ],
            },
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

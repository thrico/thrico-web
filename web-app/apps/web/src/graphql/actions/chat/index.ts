import {
  GET_ALL_MESSAGES,
  GET_INBOX,
  SEND_MESSAGE,
  START_CHAT,
} from "@/graphql/queries/chat";
import { useMutation, useQuery } from "@apollo/client";

export const startChat = (options: any) => useMutation(START_CHAT, options);

export const getInbox = (options: any) => useQuery(GET_INBOX, options);

export const getAllMessages = (options: any) =>
  useQuery(GET_ALL_MESSAGES, options);

export const sendMessage = (options: any) =>
  useMutation(SEND_MESSAGE, {
    onCompleted(data) {
      options.onCompleted(data);
    },
  });

import { useMutation, useQuery } from "@apollo/client";
import {
  ACCEPT_CONNECTION_REQUEST,
  CONNECT_TO_USER,
  GET_ALL_DIRECTORY,
  USER_DETAILS,
} from "../../queries/directory";

export const useGetAllDirectory = (options: any) =>
  useQuery(GET_ALL_DIRECTORY, options);

export const connectToUser = (options: any) =>
  useMutation(CONNECT_TO_USER, options);

export const acceptConnectionRequest = (options: any) =>
  useMutation(ACCEPT_CONNECTION_REQUEST, options);

export const getUserDetails = (options: any) => useQuery(USER_DETAILS, options);

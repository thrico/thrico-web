import { useMutation, useQuery } from "@apollo/client";
import {
  GET_ALL_CONNECTION,
  GET_ALL_ORGANIZATION_USER,
  REGISTER_EVENT,
} from "../../queries/alumni";
import { GET_ALL_AGENDA } from "../../queries/events";
import { GET_FEEDBACK_TYPE } from "../../queries/feedback";

export const getAllConnection = (options: any) =>
  useQuery(GET_ALL_CONNECTION, options);

export const getAllOrganizationUser = (options: any) =>
  useQuery(GET_ALL_ORGANIZATION_USER, options);

export const getAllAgenda = (options: any) => useQuery(GET_ALL_AGENDA, options);

export const registerEvent = (options: any) =>
  useMutation(REGISTER_EVENT, options);

import { gql, useQuery } from "@apollo/client";
import {
  GET_CURRENCY,
  GET_MODULE_FAQ,
  GET_TAGS,
} from "../../queries/organization";

export const getCurrency = () => useQuery(GET_CURRENCY);

export const getEntityTag = () => useQuery(GET_TAGS);

export const getModuleFaq = (options: any) => useQuery(GET_MODULE_FAQ, options);

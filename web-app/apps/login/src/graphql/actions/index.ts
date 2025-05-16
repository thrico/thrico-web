import { useMutation, useQuery } from "@apollo/client";
import {
  ADD_PAGE,
  CHECK_DOMAIN,
  CHECK_ORGANIZATION,
  CHECK_OTP_DETAILS,
  CHECK_PROFILE,
  CREATE_PROFILE,
  EMAIL_LOGIN,
  GET_PAGES,
  GET_TAGS,
  GET_USER,
  GOOGLE_LOGIN,
  LOGIN_BY_OTP,
} from "../queries";

export const useGetUser = () => useQuery(GET_USER);

export const loginByGoogle = (onCompleted: any) =>
  useMutation(GOOGLE_LOGIN, onCompleted);

export const checkProfile = () => useQuery(CHECK_PROFILE);

export const createProfile = (onCompleted: any) =>
  useMutation(CREATE_PROFILE, onCompleted);

export const checkDomain = (options: any) => useQuery(CHECK_DOMAIN, options);

export const checkEntity = (options: any) =>
  useQuery(CHECK_ORGANIZATION, options);

export const loginByEmail = (onCompleted: any) =>
  useMutation(EMAIL_LOGIN, onCompleted);

export const checkOtpDetails = (options: any) =>
  useQuery(CHECK_OTP_DETAILS, options);

export const loginByOtp = (onCompleted: any) =>
  useMutation(LOGIN_BY_OTP, onCompleted);

export const getEntityTag = () => useQuery(GET_TAGS);

export const useAddPage = (options: any) => useMutation(ADD_PAGE, options);

export const getAllPages = (options: any) => useQuery(GET_PAGES, options);

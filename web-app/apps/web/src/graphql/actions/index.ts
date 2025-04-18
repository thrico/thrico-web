import { useMutation, useQuery } from "@apollo/client";
import { COMPLETE_KYC, GET_USER } from "../queries";

export const useGetUser = () => useQuery(GET_USER);
export const completeKyc = (onCompleted: any) =>
  useMutation(COMPLETE_KYC, onCompleted);

"use client";

import { useSearchParams } from "next/navigation";
import { useGetUser } from "../graphql/actions";
import { Redirect } from "../components/Layout/redirect/Redirect";
import { useTokenStore } from "../store/store";
import useFetch from "./getToken";

export default function withAuth(WrappedComponent: React.ComponentType) {
  return function WithAuth(
    props: React.ComponentProps<typeof WrappedComponent>
  ) {
    const [urlParams, tokenLoading] = useFetch();
    const key = useTokenStore((state) => state.token);
    const searchParams = useSearchParams();
    const token = searchParams?.get("token");

    const { data: { getUser } = {}, loading, error } = useGetUser();

    const isClient = typeof window !== "undefined";
    // const LOGIN_URL = process.env.NEXT_PUBLIC_LOGIN_URL ? ;
    const BASE_URL = `https://www.thrico.com/`;

    if (error || (!loading && !getUser && isClient)) {
      return (
        <Redirect
          to={`/login?token=${token}&pathname=${typeof urlParams === "object" ? urlParams?.currentUrl : ""}`}
        />
      );
    }

    if (!getUser?.isProfileCompleted) {
      return <WrappedComponent {...props} />;
    }

    if (getUser?.isProfileCompleted) {
      return (
        <>
          {!tokenLoading && (
            <Redirect
              to={`${typeof urlParams === "object" ? urlParams?.origin : ""}/auth?token=${key}&path=${typeof urlParams === "object" ? urlParams?.currentUrl : ""}`}
            />
          )}
        </>
      );
    }

    return BASE_URL; // Default fallback if none of the conditions are met
  };
}

"use server";

import { getClient } from "@/apollo/apollo-client";
import { gql } from "@apollo/client";

import { headers } from "next/headers";
import { cache } from "react";

// Define the query
const query = gql`
  query CheckDomain($domain: String) {
    checkDomain(domain: $domain) {
      logo
      name
      favicon
      theme {
        borderRadius
        colorBgContainer
        colorPrimary
      }
    }
  }
`;

// Fetch the data with caching and handle errors
export const getData = cache(async () => {
  const headerData = headers();
  const authorization = (await headerData).get("x-forwarded-host");

  if (!authorization) {
    throw new Error("Authorization header not found");
  }

  console.log(authorization);
  // Apollo Client query with error handling
  const { data, errors } = await getClient().query({
    query,
    variables: { domain: authorization },
  });

  if (!data?.checkDomain || errors) {
    throw new Error("Failed to fetch data");
  }

  return data.checkDomain;
});

export default getData;

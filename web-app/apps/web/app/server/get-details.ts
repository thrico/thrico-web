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
        primaryColor
        secondaryColor
        backgroundColor
        textColor
        buttonColor
        borderRadius
        borderWidth
        borderStyle
        borderColor
        inputBackground
        inputBorderColor
        fontSize
        fontWeight
        boxShadow
        hoverEffect
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

  // Apollo Client query with error handling
  const { data, errors } = await getClient().query({
    query,
    variables: { domain: authorization },
  });
  console.log(errors);

  if (!data?.checkDomain || errors) {
    throw new Error("Failed to fetch data");
  }

  return data.checkDomain;
});

export default getData;

"use client";

import toast from "react-hot-toast";
import { ApolloLink } from "@apollo/client";
import {
  ApolloClient,
  InMemoryCache,
  ApolloNextAppProvider,
} from "@apollo/client-integration-nextjs";
import { createUploadLink } from "apollo-upload-client";
import { onError } from "@apollo/client/link/error";
function makeClient() {
  const errorControl = onError(({ graphQLErrors }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message, extensions }) => {
        console.log(extensions);
        if (extensions && extensions.code !== 403) {
          toast.error(message, {
            id: message,
          });
        }
      });
    }
  });

  const uploadLink = createUploadLink({
    uri: process.env.NEXT_PUBLIC_API_URL
      ? process.env.NEXT_PUBLIC_API_URL
      : "https://user.thrico.app/graphql",
  });

  const link = errorControl.concat(uploadLink);

  const authMiddleware = new ApolloLink((operation, forward) => {
    operation.setContext({
      headers: {
        authorization:
          localStorage.getItem("token") === null
            ? "" // Use empty string if no token
            : JSON.parse(localStorage.getItem("token") || "{}").state?.token ||
              "",
        "Apollo-Require-Preflight": "true",
      },
    });

    return forward(operation);
  });

  return new ApolloClient({
    link: ApolloLink.from([authMiddleware, link]),
    cache: new InMemoryCache(),
  });
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}

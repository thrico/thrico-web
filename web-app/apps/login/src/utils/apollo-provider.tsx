"use client";

import toast from "react-hot-toast";
import { ApolloLink, HttpLink, createHttpLink } from "@apollo/client";
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache,
  ApolloNextAppProvider,
} from "@apollo/client-integration-nextjs";
import { onError } from "@apollo/client/link/error";
//@ts-expect-error
import { createUploadLink } from "apollo-upload-client";

function makeClient() {
  const errorControl = onError(({ graphQLErrors }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message, extensions }) => {
        console.log(extensions);
        {
          extensions?.code !== 403 &&
            toast.error(message, {
              id: message,
            });
        }
      });
    }
  });

  const uploadLink = createUploadLink({
    uri: "http://localhost:3333/",
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

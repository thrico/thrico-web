import { gql } from "@apollo/client";

export const GET_YEAR = gql`
  query Books {
    books {
      author
      title
    }
  }
`;
export const GET_USER = gql`
  query GetUser {
    getUser {
      id
      email
      firstName
      isApproved
      lastName
      isRequested
      isApproved
      avatar
      cover
    }
  }
`;

export const COMPLETE_KYC = gql`
  mutation CompleteKyc($input: kyc) {
    completeKyc(input: $input) {
      success
    }
  }
`;

export const ACCEPT_REQUEST = gql`
  mutation AcceptRequestGroup($input: request) {
    acceptRequestGroup(input: $input) {
      id
    }
  }
`;

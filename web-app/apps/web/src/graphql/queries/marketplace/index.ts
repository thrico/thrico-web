import { gql } from "@apollo/client";

export const POST_MARKETPLACE_LISTING = gql`
  mutation PostListing($input: marketPlace) {
    postListing(input: $input) {
      id
      brand
      category
      createdAt
      condition
      description
      price
      sku
      title
      location
      currency
      images {
        url
      }
    }
  }
`;

export const GET_ALL_MARKETPLACE_LISTING = gql`
  query GetAllMarketPlaceListing {
    getAllMarketPlaceListing {
      id
      brand
      category
      createdAt
      condition
      description
      price
      currency
      sku
      location
      title

      images {
        url
      }
    }
  }
`;

export const CONTACT_MARKETPLACE = gql`
  mutation ContactMarketPlace($input: contactInput) {
    contactMarketPlace(input: $input) {
      id
    }
  }
`;

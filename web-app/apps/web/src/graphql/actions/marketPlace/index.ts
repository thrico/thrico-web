import { useMutation, useQuery } from "@apollo/client";
import {
  CONTACT_MARKETPLACE,
  GET_ALL_MARKETPLACE_LISTING,
  POST_MARKETPLACE_LISTING,
} from "../../queries/marketplace";

export const postListing = (options: any) =>
  useMutation(POST_MARKETPLACE_LISTING, {
    onCompleted() {
      options.onCompleted();
    },
    update(cache, { data: { postListing } }) {
      try {
        const { getAllMarketPlaceListing }: any = cache.readQuery({
          query: GET_ALL_MARKETPLACE_LISTING,
        });
        cache.writeQuery({
          query: GET_ALL_MARKETPLACE_LISTING,
          data: {
            getAllMarketPlaceListing: [
              ...postListing,
              ...getAllMarketPlaceListing,
            ],
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
  });

export const getAllMarketPlaceListing = (options: any) =>
  useQuery(GET_ALL_MARKETPLACE_LISTING, options);

export const contactMarketPlace = (options: any) =>
  useMutation(CONTACT_MARKETPLACE, {
    onCompleted(data) {
      options.onCompleted(data);
    },
  });

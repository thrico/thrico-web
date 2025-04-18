import {
  GET_NOTIFICATION,
  MARK_NOTIFICATION_AS_SEEN,
  UN_SEEN_NOTIFICATION,
} from "@/graphql/queries/notification";
import { useQuery } from "@apollo/client";

export const getUserNotification = () => useQuery(GET_NOTIFICATION);

export const markNotificationAsSeen = () => useQuery(MARK_NOTIFICATION_AS_SEEN);

export const unSeenNotification = (options: any) =>
  useQuery(UN_SEEN_NOTIFICATION, options);

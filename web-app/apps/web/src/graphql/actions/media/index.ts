import { useQuery } from "@apollo/client";
import { MEDIA_GROUP } from "../../queries/media";

export const getMediaByGroup = (options: any) => useQuery(MEDIA_GROUP, options);

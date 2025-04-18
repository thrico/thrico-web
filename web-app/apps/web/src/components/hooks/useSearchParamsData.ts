import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

// Custom hook to parse and manage all search parameters
const useSearchParamsData = () => {
  const searchParams = useSearchParams();

  // Extract and parse all the necessary query parameters
  const sort = searchParams.get("sort");
  const theme = searchParams.get("theme");
  const interests = searchParams.get("interests");
  const search = searchParams.get("search");
  const mode = searchParams.get("mode");
  const privacy = searchParams.get("privacy");
  const offset = searchParams.get("offset");
  const view = searchParams.get("view");

  // Prepare input object based on query parameters
  const input = {
    sort,
    theme: theme ? theme.split(",") : [],
    interests: interests ? interests.split(",") : [],
    search,
    mode,
    offset: offset ? Number(offset) : 1,
    limit: view === null || view === "grid" ? 9 : 3, // default to 9 or 3 based on view
    privacy,
  };

  return input;
};

export default useSearchParamsData;

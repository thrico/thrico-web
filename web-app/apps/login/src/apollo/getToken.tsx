import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useTokenOrganization } from "../store/store";
import { decryptToken } from "@/utils/encryption";

const useFetch = () => {
  const token = useTokenOrganization.getState().token;
  interface props {
    origin: string;
    currentUrl: string;
  }
  const [urlParams, setData] = useState<props | null>(null);
  const [tokenLoading, setTokenLoading] = useState<boolean>(true);
  const searchParams = useSearchParams();

  useEffect(() => {
    decryptToken(token?.replaceAll(" ", "+"))
      .then((res: props) => setData(res))
      .then(() => setTokenLoading(false));
  }, [searchParams]);

  return [urlParams, tokenLoading];
};

export default useFetch;

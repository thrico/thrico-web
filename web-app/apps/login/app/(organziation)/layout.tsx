"use client";

import CheckOrganization from "@/components/checkOrgainzation/CheckOrganization";
import { Redirect } from "@/components/Layout/redirect/Redirect";
import { useTokenOrganization } from "@/store/store";

function RootLayout({ children }: { children: React.ReactNode }) {
  const token = useTokenOrganization.getState().token;

  if (!token) {
    return (
      <>
        <Redirect to="https://thrico.com/" />
      </>
    );
  }
  if (token) {
    return <CheckOrganization token={token}>{children}</CheckOrganization>;
  }
}

export default RootLayout;

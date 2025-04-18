"use client";

import Register from "@/components/mentorship/register/Register";
import { checkMentorShip } from "@/graphql/actions/mentorship";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data, loading } = checkMentorShip();

  return (
    <>
      {!loading && (
        <>
          {!data?.checkMentorShip?.isRequested && <Register />}
          {data?.checkMentorShip?.isRequested && <> {children}</>}
        </>
      )}
    </>
  );
}

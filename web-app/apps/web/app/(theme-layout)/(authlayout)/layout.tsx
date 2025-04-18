"use client";

import withAuth from "@/apollo/withAuth";

async function RootLayout({ children }: { children: React.ReactNode }) {
  return <> {children} </>;
}

export default withAuth(RootLayout);

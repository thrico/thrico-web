"use client";

import withAuth from "@/apollo/withAuth";

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <> {children} </>;
};

export default withAuth(RootLayout);

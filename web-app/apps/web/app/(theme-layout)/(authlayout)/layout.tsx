"use client";

import AuthWrapper from "@/AuthWrapper";

function RootLayout({ children }: { children: React.ReactNode }) {
  return <AuthWrapper> {children} </AuthWrapper>;
}

export default RootLayout;

// components/AuthWrapper.tsx
"use client";
import withAuth from "@/apollo/withAuth";

function AuthWrapper({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export default withAuth(AuthWrapper);

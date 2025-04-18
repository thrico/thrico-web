import WebsiteLayout from "@/components/website/WebsiteLayout";
import getData from "../server/get-details";
import { Suspense } from "react";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fetch data and handle potential errors within RootLayout
  const data = await getData();

  return (
    <Suspense fallback={null}>
      <WebsiteLayout data={data}>{children}</WebsiteLayout>
    </Suspense>
  );
}

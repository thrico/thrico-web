import "antd/dist/reset.css";
import CommonLayout from "@/Layout/CommonLayout";

import getData from "../server/get-details";
import { Suspense } from "react";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    openGraph: {
      images: ["https://cdn.thrico.network/defaultEventCover.png"],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fetch data and handle potential errors within RootLayout
  const data = await getData();

  return (
    <Suspense fallback={null}>
      <CommonLayout data={data}> {children} </CommonLayout>
    </Suspense>
  );
}

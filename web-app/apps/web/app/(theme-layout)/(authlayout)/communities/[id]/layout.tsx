import CommunitiesDetails from "@/components/communities/details/CommunitiesDetails";
import { getCommunityDetails } from "@/graphql/actions/communities";

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) {
  return (
    <>
      <CommunitiesDetails slug={(await params).id} children={children} />
    </>
  );
}

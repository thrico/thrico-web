// import { gql } from "@apollo/client";
// import { headers } from "next/headers";
// import { getClient } from "@/apollo/apollo-client";

// export const dynamic = "force-dynamic"; // SSR on every request

// const GET_PAGE_BY_DOMAIN_AND_SLUG = gql`
//   query GetPageBySlug($input: PageInput!) {
//     getPageBySlug(input: $input) {
//       slug
//       content
//     }
//   }
// `;

// export default async function Page({ params }: { params: { slug: string[] } }) {
//   const slug = params.slug;

//   // Get the domain from request headers
//   const headerData = headers();
//   const domain = headerData.get("x-forwarded-host");

//   if (!domain) {
//     throw new Error("Missing domain from headers (x-forwarded-host)");
//   }

//   // Fetch the page by domain and slug
//   const { data } = await getClient().query({
//     query: GET_PAGE_BY_DOMAIN_AND_SLUG,
//     variables: {
//       input: {
//         domain,
//         slug,
//       },
//     },
//   });

//   const page = data?.getPageBySlug;

//   if (!page) {
//     return <h2 className="text-red-600">Page not found</h2>;
//   }

//   return (
//     <main className="p-6">
//       <h1 className="text-3xl font-bold mb-4">{page.title}</h1>
//       <article
//         className="prose"
//         dangerouslySetInnerHTML={{ __html: page.content }}
//       />
//     </main>
//   );
// }

import React from "react";

const page = () => {
  return <div>page</div>;
};

export default page;

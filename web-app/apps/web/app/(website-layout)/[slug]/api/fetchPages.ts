import fetch from "node-fetch";

export async function GET() {
  const allPages = [];
  let page = 1;
  let totalPages;

  // Fetch pages until we have all of them
  do {
    const res = await fetch(
      `https://a8d7cf0f-fc13-4662-8063-41ee0b1a7de6.thrico.website/wp-json/wp/v2/pages?page=${page}`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from("admin:password").toString("base64")}`, // Adjust credentials
        },
      }
    );

    if (!res.ok) {
      return new Response("Failed to fetch data", { status: 500 });
    }

    const pages = await res.json();
    totalPages = res.headers.get("X-WP-TotalPages"); // Get the total number of pages

    allPages.push(...pages); // Add the current page results to the allPages array
    page++; // Move to the next page
  } while (page <= totalPages); // Continue until all pages are fetched

  return new Response(JSON.stringify(allPages), { status: 200 });
}

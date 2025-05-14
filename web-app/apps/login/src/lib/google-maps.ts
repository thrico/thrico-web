export const geocodeByPlaceId = async (placeId: string) => {
  if (!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) {
    throw new Error(
      "Google Maps API Key is missing. Please set the NEXT_PUBLIC_GOOGLE_MAPS_API_KEY environment variable."
    );
  }

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?place_id=${placeId}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status === "OK") {
      return data.results;
    } else {
      console.error("Geocoding API Error:", data.status, data.error_message);
      throw new Error(
        `Geocoding API Error: ${data.status} - ${data.error_message}`
      );
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error fetching geocode:", error);
      throw new Error(`Error fetching geocode: ${error.message}`);
    } else {
      console.error("Unexpected error:", error);
      throw new Error("An unexpected error occurred.");
    }
  }
};

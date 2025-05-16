"use server";

export async function fetchCategories(query: string): Promise<string[]> {
  try {
    // Filter suggestions based on the query
    const text = [
      "Sports",
      "News",
      "Technology",
      "Entertainment",
      "Health",
      "Business",
      "Science",
      "Politics",
      "Education",
      "Travel",
      "Food",
      "Finance",
      "Lifestyle",
      "Gaming",
      "Automobile",
      "Fashion",
      "Environment",
      "History",
      "Real Estate",
      "Startup",
    ];

    console.log(query);
    // If query is empty, return all suggestions
    if (!query.trim()) {
      return text;
    }

    const skills = text.filter((skill) =>
      skill.toLowerCase().includes(query.toLowerCase())
    );

    return skills;
  } catch (error) {
    console.error("Error generating skill suggestions:", error);
    // Fallback suggestions if AI fails
    return [
      `${query} Development`,
      `${query} Management`,
      `${query} Analysis`,
      `${query} Design`,
      `${query} Engineering`,
    ];
  }
}

"use server";

export async function fetchSkillSuggestions(query: string): Promise<string[]> {
  try {
    console.log("Fetching skill suggestions for query:", query);
    // Filter suggestions based on the query
    const text = [
      "JavaScript",
      "Python",
      "Java",
      "C++",
      "C#",
      "React.js",
      "Node.js",
      "Angular",
      "Vue.js",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "SQL",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Docker",
      "Kubernetes",
      "AWS",
      "Google Cloud",
      "Azure",
      "Linux",
      "Git",
      "GitHub",
      "CI/CD",
      "REST APIs",
      "GraphQL",
      "TypeScript",
      "Next.js",
      "NestJS",
      "Express.js",
      "Django",
      "Flask",
      "Spring Boot",
      "Ruby on Rails",
      "PHP",
      "Laravel",
      "Firebase",
      "Jenkins",
      "Terraform",
      "Machine Learning",
      "Deep Learning",
      "Data Science",
      "Artificial Intelligence",
      "Cybersecurity",
      "Blockchain",
      "DevOps",
      "Agile Methodologies",
      "Scrum",
      "UI/UX Design",
      "Figma",
      "Adobe XD",
      "Graphic Design",
      "Video Editing",
      "Game Development",
      "Unity",
      "Unreal Engine",
      "Networking",
      "Software Testing",
      "Automation Testing",
      "Selenium",
      "Jest",
      "Mocha",
      "Cypress",
      "Web3",
      "Smart Contracts",
      "Solidity",
      "RabbitMQ",
      "Kafka",
      "Microservices",
      "System Design",
      "Embedded Systems",
      "IoT",
      "Big Data",
      "ETL",
      "Data Engineering",
      "Power BI",
      "Tableau",
    ];

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

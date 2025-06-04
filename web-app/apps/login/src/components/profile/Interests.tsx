"use client";

import type React from "react";
import { useState } from "react";
import { Form, Button, Select, Flex, Space, Card, Checkbox } from "antd";

import { fetchCategories } from "@/lib/api";
import { fetchSkillSuggestions } from "@/lib/skills";
import AgreementDrawer from "./AgreementDrawer";

interface SkillOption {
  value: string;
  category?: string;
}

interface SkillFormProps {
  categories: string[];
  skills: string[];
  setSkills: (skills: string[]) => void;
  setCategories: (categories: string[]) => void;
  setCurrent: (step: number) => void;
  loading: boolean;
  submit: () => void;
  agreement: boolean;
  setAgreement: (agreement: boolean) => void;
}

export const SkillForm: React.FC<SkillFormProps> = ({
  categories,
  skills,
  setCategories,
  setSkills,
  setCurrent,
  loading,
  submit,
  agreement,
  setAgreement,
}) => {
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    await setSkills(values.skills);
    await setCategories(values.categories);
    await submit();
  };

  return (
    <Form
      style={{ width: "100%" }}
      form={form}
      layout="vertical"
      onFinish={onFinish}
    >
      <Card>
        <Form.Item
          initialValue={categories}
          name="categories"
          label="Categories*"
          rules={[
            { required: true, message: "Please select at least one category" },
          ]}
          style={{ marginTop: 16 }}
        >
          <Select
            mode="multiple"
            style={{ width: "100%" }}
            placeholder="Please Select Category"
            showSearch
            options={[
              { value: "sports", label: "Sports" },
              { value: "news", label: "News" },
              { value: "technology", label: "Technology" },
              { value: "entertainment", label: "Entertainment" },
              { value: "health", label: "Health" },
              { value: "business", label: "Business" },
              { value: "science", label: "Science" },
              { value: "politics", label: "Politics" },
              { value: "education", label: "Education" },
              { value: "travel", label: "Travel" },
              { value: "food", label: "Food" },
              { value: "finance", label: "Finance" },
              { value: "lifestyle", label: "Lifestyle" },
              { value: "gaming", label: "Gaming" },
              { value: "automobile", label: "Automobile" },
              { value: "fashion", label: "Fashion" },
              { value: "environment", label: "Environment" },
              { value: "history", label: "History" },
              { value: "real estate", label: "Real Estate" },
              { value: "startup", label: "Startup" },
            ]}
          />
        </Form.Item>

        <Form.Item
          initialValue={skills}
          name="skills"
          label="Skills*"
          rules={[
            { required: true, message: "Please select at least one skill" },
          ]}
          style={{ marginTop: 16 }}
        >
          <Select
            mode="multiple"
            style={{ width: "100%" }}
            placeholder="Please Select Skills"
            options={[
              { value: "javascript", label: "JavaScript" },
              { value: "python", label: "Python" },
              { value: "java", label: "Java" },
              { value: "c++", label: "C++" },
              { value: "c#", label: "C#" },
              { value: "react.js", label: "React.js" },
              { value: "node.js", label: "Node.js" },
              { value: "angular", label: "Angular" },
              { value: "vue.js", label: "Vue.js" },
              { value: "html", label: "HTML" },
              { value: "css", label: "CSS" },
              { value: "tailwind-css", label: "Tailwind CSS" },
              { value: "sql", label: "SQL" },
              { value: "mongodb", label: "MongoDB" },
              { value: "postgresql", label: "PostgreSQL" },
              { value: "mysql", label: "MySQL" },
              { value: "redis", label: "Redis" },
              { value: "docker", label: "Docker" },
              { value: "kubernetes", label: "Kubernetes" },
              { value: "aws", label: "AWS" },
              { value: "google-cloud", label: "Google Cloud" },
              { value: "azure", label: "Azure" },
              { value: "linux", label: "Linux" },
              { value: "git", label: "Git" },
              { value: "github", label: "GitHub" },
              { value: "ci/cd", label: "CI/CD" },
              { value: "rest-apis", label: "REST APIs" },
              { value: "graphql", label: "GraphQL" },
              { value: "typescript", label: "TypeScript" },
              { value: "next.js", label: "Next.js" },
              { value: "nestjs", label: "NestJS" },
              { value: "express.js", label: "Express.js" },
              { value: "django", label: "Django" },
              { value: "flask", label: "Flask" },
              { value: "spring-boot", label: "Spring Boot" },
              { value: "ruby-on-rails", label: "Ruby on Rails" },
              { value: "php", label: "PHP" },
              { value: "laravel", label: "Laravel" },
              { value: "firebase", label: "Firebase" },
              { value: "jenkins", label: "Jenkins" },
              { value: "terraform", label: "Terraform" },
              { value: "machine-learning", label: "Machine Learning" },
              { value: "deep-learning", label: "Deep Learning" },
              { value: "data-science", label: "Data Science" },
              {
                value: "artificial-intelligence",
                label: "Artificial Intelligence",
              },
              { value: "cybersecurity", label: "Cybersecurity" },
              { value: "blockchain", label: "Blockchain" },
              { value: "devops", label: "DevOps" },
              { value: "agile-methodologies", label: "Agile Methodologies" },
              { value: "scrum", label: "Scrum" },
              { value: "ui-ux-design", label: "UI/UX Design" },
              { value: "figma", label: "Figma" },
              { value: "adobe-xd", label: "Adobe XD" },
              { value: "graphic-design", label: "Graphic Design" },
              { value: "video-editing", label: "Video Editing" },
              { value: "game-development", label: "Game Development" },
              { value: "unity", label: "Unity" },
              { value: "unreal-engine", label: "Unreal Engine" },
              { value: "networking", label: "Networking" },
              { value: "software-testing", label: "Software Testing" },
              { value: "automation-testing", label: "Automation Testing" },
              { value: "selenium", label: "Selenium" },
              { value: "jest", label: "Jest" },
              { value: "mocha", label: "Mocha" },
              { value: "cypress", label: "Cypress" },
              { value: "web3", label: "Web3" },
              { value: "smart-contracts", label: "Smart Contracts" },
              { value: "solidity", label: "Solidity" },
              { value: "rabbitmq", label: "RabbitMQ" },
              { value: "kafka", label: "Kafka" },
              { value: "microservices", label: "Microservices" },
              { value: "system-design", label: "System Design" },
              { value: "embedded-systems", label: "Embedded Systems" },
              { value: "iot", label: "IoT" },
              { value: "big-data", label: "Big Data" },
              { value: "etl", label: "ETL" },
              { value: "data-engineering", label: "Data Engineering" },
              { value: "power-bi", label: "Power BI" },
              { value: "tableau", label: "Tableau" },
            ]}
          />
        </Form.Item>

        <Form.Item name="agreement" valuePropName="checked">
          <Checkbox
            value={agreement}
            onChange={(e) => setAgreement(e.target.checked)}
          >
            I have read and accept <AgreementDrawer />
          </Checkbox>
        </Form.Item>
      </Card>
      <Flex
        style={{ width: "100%", marginTop: 29 }}
        justify="center"
        align="center"
      >
        <Space>
          <Button onClick={() => setCurrent(3)}>Previous</Button>

          <Button
            disabled={!agreement}
            loading={loading}
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
        </Space>
      </Flex>
    </Form>
  );
};

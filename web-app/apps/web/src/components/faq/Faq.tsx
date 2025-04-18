"use client";
import React from "react";
import { Typography, Collapse, Button, Tag, ConfigProvider } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const FAQSection: React.FC = () => {
  const faqData = [
    {
      key: "1",
      question: "So, you're a startup?",
      answer:
        "Yes, we're a startup focused on innovation and growth. We provide cutting-edge solutions to help businesses thrive in the digital age.",
    },
    {
      key: "2",
      question: "Is Genie right for me?",
      answer:
        "Genie is perfect for businesses looking to streamline their operations and scale efficiently. Our platform offers flexible solutions that can be customized to your specific needs.",
    },
    {
      key: "3",
      question: "How do I sign up?",
      answer:
        "Signing up is simple and straightforward. Just click the 'Get Started' button and follow our easy registration process. You'll be up and running in minutes.",
    },
    {
      key: "4",
      question: "What's the onboarding like? Do you charge for implementation?",
      answer:
        "Our onboarding process is smooth and user-friendly. We provide comprehensive documentation and support to ensure your success. Implementation is included in our standard pricing - no hidden fees.",
    },
  ];

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "60px 20px" }}>
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <Tag
          style={{
            padding: "4px 12px",
            borderRadius: "16px",
            backgroundColor: "#f5f5f5",
            border: "none",
            fontSize: "14px",
            marginBottom: "24px",
          }}
        >
          Genie FAQ
        </Tag>

        <Title
          style={{
            fontSize: "48px",
            marginBottom: "24px",
            fontWeight: "bold",
          }}
        >
          We're here to answer all your questions.
        </Title>

        <Paragraph
          style={{
            fontSize: "18px",
            color: "rgba(0, 0, 0, 0.6)",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          If you're new to Genie or looking to supercharge your current stack,
          this section will help you learn more about the platform and its
          features.
        </Paragraph>
      </div>

      <Collapse
        bordered={false}
        expandIcon={({ isActive }) => (
          <PlusOutlined
            rotate={isActive ? 45 : 0}
            style={{
              fontSize: "16px",
              color: "#000",
              transition: "all 0.3s",
            }}
          />
        )}
        style={{ background: "none" }}
        items={faqData.map((item) => ({
          key: item.key,
          label: (
            <span
              style={{
                fontSize: "16px",
                fontWeight: 500,
                color: "#000",
              }}
            >
              {item.question}
            </span>
          ),
          children: (
            <div style={{ color: "rgba(0, 0, 0, 0.6)" }}>{item.answer}</div>
          ),
          style: {
            marginBottom: "16px",
            backgroundColor: "#f9f9f9",
            border: "none",
            borderRadius: "8px",
          },
        }))}
      />

      <div
        style={{
          textAlign: "center",
          marginTop: "48px",
        }}
      >
        <Paragraph
          style={{
            color: "rgba(0, 0, 0, 0.6)",
            marginBottom: "24px",
          }}
        >
          Got any more questions?
        </Paragraph>

        <Button
          type="primary"
          style={{
            backgroundColor: "#f0e7fe",
            color: "#6941c6",
            border: "none",
            height: "40px",
            padding: "0 24px",
            borderRadius: "20px",
            fontSize: "16px",
            fontWeight: "500",
            boxShadow: "none",
          }}
        >
          Get in touch
        </Button>
      </div>
    </div>
  );
};

export default FAQSection;

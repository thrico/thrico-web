import React from "react";
import { Row, Col, Card, List, Typography, Tag, Button, Space } from "antd";
import WebSiteContainer from "@/Layout/WebsiteContainer";
import { faker } from "@faker-js/faker";

const { Title, Text, Paragraph } = Typography;

function Stories() {
  const stories = [
    {
      date: "OCTOBER 28, 2024",
      title: "Alumni Honored for Contributions to HAA Clubs and SIGs",
      description:
        "The Harvard Alumni Association (HAA) has announced the 2024 Outstanding Alumni Community Award and Outstanding Volunteer Leadership Award recipients.",
      image: faker.image.urlPicsumPhotos(),
    },
    {
      date: "OCTOBER 24, 2024",
      title: "How Can Higher Ed Make Democracy Better?",
      description:
        "Experts on public policy and civic engagement considered many options during a talk hosted by Harvard Kennedy School and the Harvard Graduate School of Education.",
      image: faker.image.urlPicsumPhotos(),
    },
  ];

  const events = [
    {
      date: "NOV 20",
      type: "LECTURE/READING/TALK",
      title:
        "Climate, Environment, and the Transition to Late Antiquity: Roman Government`s Response to Climate Disasters and Agricultural Resilience in Roman Egypt",
      location: "Harvard Radcliffe Institute",
    },
    {
      date: "NOV 20",
      type: "SOCIAL",
      title:
        "November 20, 2024 - OxBridge vs Harvard/Yale Trivia Challenge Match",
      location: "Harvard Club of San Diego",
    },
    {
      date: "NOV 20",
      type: "SOCIAL",
      title: "South County Luncheon",
      location: "Harvard Club of the Palm Beaches",
      location2: "BOCA RATON, FL",
    },
    {
      date: "NOV 20",
      type: "VIRTUAL",
      title: "ESTATE PLANNING 101 Workshop - a virtual program",
      location: "The Harvard Club of Houston",
    },
  ];

  return (
    <div style={{ padding: "24px", backgroundColor: "#f5f5f5" }}>
      <WebSiteContainer>
        <Row gutter={48}>
          <Col span={12}>
            <Title level={2} style={{ marginBottom: 24 }}>
              Stories
            </Title>
            {stories.map((story, index) => (
              <Card
                key={index}
                style={{
                  marginBottom: "24px",
                  background: "#f8f9fa",
                  border: "none",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <Row>
                  <Col xs={24} sm={8} style={{ padding: 0 }}>
                    <div
                      style={{
                        height: "100%",
                        minHeight: "240px",
                        backgroundImage: `url(${story.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                  </Col>
                  <Col xs={24} sm={16} style={{ padding: "24px" }}>
                    <Text
                      style={{
                        fontSize: "14px",
                        color: "#666",
                        display: "block",
                        marginBottom: "12px",
                      }}
                    >
                      {story.date}
                    </Text>
                    <Title
                      level={5}
                      style={{
                        marginTop: 0,
                        marginBottom: "16px",

                        lineHeight: 1.2,
                      }}
                    >
                      {story.title}
                    </Title>
                    <Paragraph
                      style={{
                        fontSize: "16px",
                        lineHeight: 1.6,
                        color: "#444",
                        margin: 0,
                      }}
                    >
                      {story.description}
                    </Paragraph>
                  </Col>
                </Row>
              </Card>
            ))}

            <Button>View All Stories</Button>
          </Col>

          <Col span={12}>
            <Title level={2} style={{ marginBottom: 24 }}>
              Programs & Events
            </Title>
            <List
              dataSource={events}
              renderItem={(item) => (
                <Card style={{ marginBottom: 16 }}>
                  <Row align="top" gutter={16}>
                    <Col>
                      <div
                        style={{
                          textAlign: "center",
                          minWidth: "60px",
                          marginRight: "16px",
                        }}
                      >
                        <Text strong style={{ fontSize: "16px" }}>
                          {item.date}
                        </Text>
                      </div>
                    </Col>
                    <Col flex="1">
                      <Tag color="blue" style={{ marginBottom: 8 }}>
                        {item.type}
                      </Tag>
                      <Title level={5} style={{ margin: "8px 0" }}>
                        {item.title}
                      </Title>
                      <Text type="secondary">
                        {item.location}
                        {item.location2 && <> | {item.location2}</>}
                      </Text>
                    </Col>
                  </Row>
                </Card>
              )}
            />

            <Row gutter={16} style={{ marginTop: 24 }}>
              <Space>
                <Button type="primary">View All Upcoming Events</Button>

                <Button>View Featured Programs</Button>
              </Space>
            </Row>
          </Col>
        </Row>
      </WebSiteContainer>
    </div>
  );
}

export default Stories;

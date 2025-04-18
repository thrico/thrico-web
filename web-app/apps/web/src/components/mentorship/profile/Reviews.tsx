import { Avatar, Card, Col, Divider, Rate, Space, Typography } from "antd";
import React from "react";

const Reviews = () => {
  const { Text, Paragraph } = Typography;
  return (
    <Col span={16}>
      <Card title="What mentees say" bordered={false}>
        {[1, 2, 3].map((review) => (
          <div key={review} style={{ marginBottom: 24 }}>
            <Space direction="vertical" size="small">
              <Space align="center">
                <Avatar src={`/placeholder.svg?height=40&width=40`} />
                <div>
                  <Text strong>Mentee Name</Text>
                  <br />
                  <Rate disabled defaultValue={5} style={{ fontSize: 12 }} />
                </div>
              </Space>
              <Paragraph>
                Great mentorship experience! Very knowledgeable about front-end
                development and provided excellent guidance for career growth.
              </Paragraph>
            </Space>
            <Divider />
          </div>
        ))}
      </Card>
    </Col>
  );
};

export default Reviews;

"use client";
import React from "react";
import { Typography, Layout, Space } from "antd";

const { Title, Paragraph, Text } = Typography;
const { Content } = Layout;
const Guidelines = () => {
  return (
    <Content className="max-w-3xl mx-auto px-4 py-8">
      <Space direction="vertical" size="large" className="w-full">
        <div>
          <Title level={1} style={{ color: "#424242", marginBottom: 0 }}>
            Guidelines
          </Title>
          <Text type="secondary">Updated April 2020</Text>
        </div>

        <div>
          <Title level={2} style={{ color: "#616161", fontWeight: "normal" }}>
            Accepting the terms
          </Title>
          <Paragraph style={{ color: "#757575" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            volutpat dui libero, eu tempor justo gravida dignissim. Vestibulum
            vel tellus nunc. Curabitur vel sapien nunc. Nullam non ornare lorem,
            nec convallis velit. Morbi sagittis nisi quis eros sollicitudin, sit
            amet scelerisque erat vulputate.
          </Paragraph>

          <Paragraph style={{ color: "#757575" }}>
            Sed sem odio, euismod et velit in, vulputate auctor ante. Nullam sed
            lobortis metus. Sed id facilisis enim. Vivamus vitae arcu pharetra,
            sagittis ex et, commodo odio. Nunc convallis pellentesque metus, nec
            elementum dui aliquet vitae. Quisque felis nisi, vehicula a cursus
            vitae, commodo vitae est.
          </Paragraph>

          <Title
            level={3}
            style={{
              color: "#616161",
              textTransform: "uppercase",
              marginTop: 32,
            }}
          >
            Subheader Lorem Ipsum
          </Title>
          <Paragraph style={{ color: "#757575" }}>
            Mauris pulvinar faucibus nisl, id elementum odio tincidunt ac. Fusce
            bibendum ipsum nec nisl sagittis gravida. Maecenas eu nisi ac velit
            porta lacinia. Curabitur elementum a velit id rhoncus. Sed et sapien
            dui. Nam tempor tristique elit et tincidunt. Sed nec enim ultrices,
            tempus leo a, laoreet mauris.
          </Paragraph>

          <Paragraph style={{ color: "#757575" }}>
            Fusce enim nisl, mollis in ipsum non, posuere malesuada orci. Proin
            ut pellentesque ipsum, et volutpat magna. Quisque vitae tincidunt
            sapien, vel accumsan magna.
          </Paragraph>

          <Paragraph style={{ color: "#757575" }}>
            Nam non dui quam. Nam et nisi in mi blandit rutrum eget ac nisl. In
            vel accumsan nunc. Suspendisse potenti. Sed vehicula vitae sem quis
            feugiat.
          </Paragraph>
        </div>
      </Space>
    </Content>
  );
};

export default Guidelines;

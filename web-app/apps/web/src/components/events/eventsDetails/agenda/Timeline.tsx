import React, { useState } from "react";
import { Button, Space, Timeline, Typography } from "antd";
import { LoremIpsum } from "react-lorem-ipsum";
const AgendaTimeline = () => {
  return (
    <Timeline
      mode="left"
      items={[
        {
          children: (
            <Space direction="vertical">
              <Typography>Title</Typography>
              <Typography.Paragraph>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Massa
                aliquet fusce amet penatibus turpis cras nullam. Ultricies nam
                massa curae eget vehicula
              </Typography.Paragraph>
              <Button>View Doc</Button>
            </Space>
          ),
        },

        {
          children: (
            <Space direction="vertical">
              <Typography>Title</Typography>
              <Typography.Paragraph></Typography.Paragraph>
              <Button>View Doc</Button>
            </Space>
          ),
        },

        {
          children: (
            <Space direction="vertical">
              <Typography>Title</Typography>
              <Typography.Paragraph></Typography.Paragraph>
              <Button>View Doc</Button>
            </Space>
          ),
        },
        {
          children: (
            <Space direction="vertical">
              <Typography>Title</Typography>
              <Typography.Paragraph></Typography.Paragraph>
              <Button>View Doc</Button>
            </Space>
          ),
        },

        {
          children: (
            <Space direction="vertical">
              <Typography>Title</Typography>
              <Typography.Paragraph></Typography.Paragraph>
              <Button>View Doc</Button>
            </Space>
          ),
        },
      ]}
    />
  );
};

export default AgendaTimeline;

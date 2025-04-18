import { Card, Flex, Image, List, Space, Typography } from "antd";
import React from "react";

import { getSpeakersEvents } from "../../../../graphql/actions/events";
import { useParams } from "next/navigation";
const Speakers = () => {
  const { slug } = useParams();
  const { data, loading } = getSpeakersEvents({
    variables: {
      input: {
        slug,
      },
    },
  });
  return (
    <Card title="Speakers">
      <List
        style={{ width: "100%" }}
        locale={{
          emptyText: "No Speakers Founds",
        }}
        grid={{ gutter: 16, column: 3 }}
        loading={loading}
        dataSource={data?.getSpeakersEvents}
        renderItem={(item) => (
          <Card style={{ width: "100%", height: 400 }}>
            <Image
              alt="Mountains"
              src={
                item?.avatar.length < 30
                  ? `https://cdn.thrico.network/${item?.avatar}`
                  : item.avatar
              }
              preview={false}
              style={{
                objectFit: "cover",
              }}
            />
            <Space
              direction="vertical"
              style={{ marginTop: 10, width: "100%" }}
            >
              <Typography>
                <strong>{item?.fullName}</strong>{" "}
              </Typography>
              <Typography>{item?.about}</Typography>
            </Space>
          </Card>
        )}
      />
    </Card>
  );
};

export default Speakers;

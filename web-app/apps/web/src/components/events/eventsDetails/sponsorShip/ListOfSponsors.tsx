import { Avatar, Card, Flex, Image, List, Space, Tabs, Typography } from "antd";
import React from "react";

const ListOfSponsors = ({ data }) => {
  const [active, setActive] = React.useState(data?.eventSponsorship[0]?.id);
  return (
    <>
      {data?.eventSponsorship.length > 0 && (
        <Card title="Event Sponsors">
          <Tabs
            activeKey={active}
            onChange={(key: string) => setActive(key)}
            items={data?.eventSponsorship?.map((t, i) => {
              return {
                key: t?.id,
                label: t?.sponsorType,
              };
            })}
          />

          <List
            locale={{
              emptyText: "No Sponsors",
            }}
            grid={{ gutter: 16, column: 3 }}
            dataSource={data?.eventSponsors.filter(
              (t) => t?.sponsorShip.id === active
            )}
            renderItem={(item) => (
              <Card style={{ width: "100%" }}>
                <Image
                  alt="Mountains"
                  src={`https://cdn.thrico.network/${item?.sponsorLogo}`}
                  preview={false}
                  style={{
                    objectFit: "cover",
                    height: "100%",
                    width: "100%",
                  }}
                />

                <Space
                  direction="vertical"
                  style={{ marginTop: 10, width: "100%" }}
                >
                  <Typography>
                    <strong>{item?.sponsorName}</strong>{" "}
                  </Typography>
                  <Typography>{item?.sponsorUserDesignation}</Typography>
                </Space>
              </Card>
            )}
          />
        </Card>
      )}
    </>
  );
};

export default ListOfSponsors;

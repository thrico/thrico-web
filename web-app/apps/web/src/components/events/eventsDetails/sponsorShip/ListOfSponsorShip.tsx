import React from "react";
import { Button, Card, List } from "antd";
const data = [
  {
    title: "Title 1",
  },
  {
    title: "Title 2",
  },
  {
    title: "Title 3",
  },
  {
    title: "Title 4",
  },
];
const ListOfSponsorShip = ({ data }) => {
  return (
    <Card title="Event Sponsorship">
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Card extra={<Button>Buy Now</Button>} title={item.sponsorType}>
              {item?.content?.map((set) => (
                <List.Item.Meta
                  title={set?.title}
                  description={set?.description}
                />
              ))}
            </Card>
          </List.Item>
        )}
      />
    </Card>
  );
};

export default ListOfSponsorShip;

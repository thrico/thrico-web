import { CalendarOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, List } from "antd";
import React from "react";

const Booking = () => {
  interface BookingItem {
    id: string;
    title: string;
    subtitle: string;
    price: string;
  }

  const bookings: BookingItem[] = [
    { id: "1", title: "New 1:1 Booking", subtitle: "1sddsds", price: "Free" },
    { id: "2", title: "New 1:1 Booking", subtitle: "1sddsds", price: "Free" },
    { id: "3", title: "New 1:1 Booking", subtitle: "1sddsds", price: "₹1" },
    { id: "4", title: "New 1:1 Booking", subtitle: "1sddsds", price: "₹1" },
  ];

  return (
    <Card
      style={{ width: 400 }}
      title="Booking"
      extra={<Button type="link">View All</Button>}
    >
      <List
        itemLayout="horizontal"
        dataSource={bookings}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar
                  icon={<CalendarOutlined />}
                  style={{ backgroundColor: "#f0f0f0", color: "#666" }}
                />
              }
              title={<span style={{ fontWeight: 600 }}>{item.title}</span>}
              description={
                <span>
                  {item.subtitle} <span style={{ margin: "0 4px" }}>·</span>{" "}
                  {item.price}
                </span>
              }
            />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default Booking;

import { Avatar, Card, List } from "antd";
import React from "react";
import { FaConnectdevelop } from "react-icons/fa";
import { fullname } from "react-lorem-ipsum";
const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
];
import { CgProfile } from "react-icons/cg";
const TopProfile = () => {
  return (
    <Card title="Top Profile this week" style={{ width: "100%" }}>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item
            extra={
              <>
                <CgProfile />
              </>
            }
          >
            <List.Item.Meta
              avatar={
                <Avatar
                  src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                />
              }
              title={fullname()}
              //   description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default TopProfile;

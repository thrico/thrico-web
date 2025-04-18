import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Avatar, Card, Divider, List, Skeleton, Tag } from "antd";

interface DataType {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}

const App: React.FC = ({ data, loading }) => {
  return (
    <>
      <Card title="Admin and Moderators">
        <div
          id="scrollableDiv"
          style={{
            padding: "0 16px",
            border: "1px solid rgba(140, 140, 140, 0.35)",
          }}
        >
          <List
            loading={loading}
            dataSource={data?.filter((set) => set?.role === "admin")}
            renderItem={(item, index) => (
              <List.Item key={item?.email}>
                <List.Item.Meta
                  avatar={<Avatar src={item?.user?.avatar} />}
                  title={
                    <a href="https://ant.design">
                      {item?.user?.firstName} {item?.user?.lastName}
                    </a>
                  }
                  description={item?.user?.aboutAlumni?.currentPosition}
                />
                <Tag color="blue">{index === 0 && <>Admin</>}</Tag>
              </List.Item>
            )}
          />
        </div>
      </Card>

      <Card title="User">
        <div
          id="scrollableDiv"
          style={{
            padding: "0 16px",
            border: "1px solid rgba(140, 140, 140, 0.35)",
          }}
        >
          <List
            loading={loading}
            dataSource={data?.filter((set) => set?.role === "user")}
            renderItem={(item, index) => (
              <List.Item key={item?.email}>
                <List.Item.Meta
                  avatar={<Avatar src={item?.user?.avatar} />}
                  title={
                    <a href="https://ant.design">
                      {item?.user?.firstName} {item?.user?.lastName}
                    </a>
                  }
                  description={item?.user?.aboutAlumni?.currentPosition}
                />
                <Tag color="blue">{<>User</>}</Tag>
              </List.Item>
            )}
          />
        </div>
      </Card>
    </>
  );
};

export default App;

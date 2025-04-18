import { UserOutlined } from "@ant-design/icons";
import { Avatar, Image, Segmented } from "antd";

import React from "react";

const Appearance = () => {
  return (
    <>
      <Segmented
        options={[
          {
            label: (
              <div style={{ padding: 4 }}>
                <Image
                  src={`https://cdn.thrico.network/layout/3hSd15WPH.jpeg`}
                  alt="alt"
                  width={"100%"}
                  preview={false}
                  style={{ objectFit: "contain", padding: 10 }}
                  height={100}
                />
                <div>Layout 1</div>
              </div>
            ),
            value: "user1",
          },
          {
            label: (
              <div style={{ padding: 4 }}>
                <Image
                  src={`https://cdn.thrico.network/layout/sZG7g8sBQ.jpeg`}
                  alt="alt"
                  width={"100%"}
                  preview={false}
                  style={{ objectFit: "contain", padding: 10 }}
                  height={100}
                />
                <div>Layout 2</div>
              </div>
            ),
            value: "user2",
          },
          {
            label: (
              <div style={{ padding: 4 }}>
                <Image
                  src={`https://cdn.thrico.network/layout/YLupdhItt.jpeg`}
                  alt="alt"
                  width={"100%"}
                  preview={false}
                  style={{ objectFit: "contain", padding: 10 }}
                  height={100}
                />
                <div>Layout 3</div>
              </div>
            ),
            value: "user3",
          },
        ]}
      />
    </>
  );
};

export default Appearance;

import {
  Card,
  Carousel,
  Divider,
  Flex,
  Image,
  Skeleton,
  Space,
  Typography,
} from "antd";
import React from "react";

const Preview = ({
  fileList,
  title,
  price,
  condition,
  description,
  currency,
}) => {
  const contentStyle: React.CSSProperties = {
    margin: 0,
    width: "100%",
    color: "#fff",
    height: "70vh",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <Card style={{ width: 1000 }} title="Preview">
      <Flex gap={20}>
        {fileList?.length === 0 && (
          <Space style={{ width: 500, height: "70vh" }}>
            <Skeleton.Image style={{ width: 500, height: "70vh" }} />
          </Space>
        )}
        {fileList?.length > 0 && (
          <Carousel style={{ width: 500, height: "70vh" }}>
            {fileList.map((set) => (
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    width: "100%",
                    height: "70vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "70vh",
                      background: "#364d79",
                      backgroundImage: `url(${URL.createObjectURL(
                        set.originFileObj
                      )})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      filter: "blur(8px)",
                      zIndex: -1,
                    }}
                  ></div>

                  <img
                    width={"100%"}
                    height={"auto"}
                    src={URL.createObjectURL(set.originFileObj)}
                  />
                </div>
              </div>
            ))}
          </Carousel>
        )}

        <Flex
          vertical
          style={{
            width: "100%",
            height: "70vh",
          }}
        >
          <Typography.Title level={2}>{title}</Typography.Title>
          <Typography.Title level={4}>
            {price && `${currency} ${price}`}
          </Typography.Title>
          <Typography>{condition}</Typography>
          <Divider />
          <Typography>{description}</Typography>
        </Flex>
      </Flex>
    </Card>
  );
};

export default Preview;

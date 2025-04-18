import { Card, Flex, List } from "antd";
import { useSearchParams } from "next/navigation";
import React from "react";
import { Skeleton } from "antd";
const DiscoverLoading = () => {
  const searchParams = useSearchParams();
  const view = searchParams.get("view");
  return (
    <>
      {view === "list" ? (
        <List
          size="large"
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
          }}
          dataSource={[1, 2, 3, 3, 3, 3]}
          renderItem={(item, index) => (
            <List.Item
              extra={
                <Flex
                  style={{ position: "relative", width: 300, height: 180 }}
                  justify="center"
                >
                  <Skeleton.Image
                    style={{ width: 300, height: 180 }}
                    active={true}
                  />
                </Flex>
              }
            >
              <Skeleton style={{ margin: 25 }} loading={true} active>
                <List.Item.Meta
                  title={<a href={""}>{""}</a>}
                  description={""}
                />
              </Skeleton>
            </List.Item>
          )}
        />
      ) : (
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 3,
            md: 3,
            lg: 3,
            xl: 3,
            xxl: 3,
          }}
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 9,
          }}
          dataSource={[1, 2, 3, 3, 3, 3]}
          renderItem={(item, index) => (
            <List.Item>
              <Card
                actions={[
                  <>
                    <Skeleton.Button style={{ width: 200 }} active={true} />
                  </>,
                ]}
              >
                <Flex
                  style={{
                    position: "relative",
                    width: "100%",
                    height: 200,
                  }}
                  justify="center"
                >
                  <Skeleton.Image
                    style={{ width: 300, height: "100%" }}
                    active={true}
                  />
                </Flex>

                <Skeleton style={{ marginTop: 25 }} loading={true} active>
                  <List.Item.Meta
                    title={<a href={""}>{""}</a>}
                    description={""}
                  />
                </Skeleton>
              </Card>
            </List.Item>
          )}
        />
      )}
    </>
  );
};

export default DiscoverLoading;

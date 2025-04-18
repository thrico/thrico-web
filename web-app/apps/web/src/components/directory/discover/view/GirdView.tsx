import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  HeartOutlined,
  LikeOutlined,
  MessageOutlined,
  StarOutlined,
  TagsOutlined,
  UserAddOutlined,
  UserOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import React from "react";
import { Avatar, Button, Flex, List, Space } from "antd";

import { Card } from "antd";
import Link from "next/link";
import { allUser } from "../type";
import { connectToUser } from "../../../../graphql/actions/directory";
import AcceptRequest from "./AcceptRequest";

const GirdView = ({ data, loading }: allUser) => {
  const [connect, { loading: load }] = connectToUser({});
  const [active, setActive] = React.useState("");
  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 2,
        lg: 3,
        xl: 3,
        xxl: 3,
      }}
      pagination={{
        pageSize: 9,
      }}
      loading={loading}
      dataSource={data}
      renderItem={(item, index) => (
        <List.Item>
          <Card
            actions={[
              <>
                {item?.isFollowing ? (
                  <Button type="primary"> Accept</Button>
                ) : (
                  <>
                    {item.isRequestedUser.isRequested ? (
                      <AcceptRequest id={item.id} />
                    ) : (
                      <>
                        {item?.isConnectIonRequested.isConnection && (
                          <>
                            {item?.isConnectIonRequested.isFollower && (
                              <Button
                                disabled={true}
                                icon={<MessageOutlined />}
                                type="primary"
                              >
                                Message
                              </Button>
                            )}
                            {!item?.isConnectIonRequested.isFollower && (
                              <Button
                                disabled={true}
                                icon={<ClockCircleOutlined />}
                                type="primary"
                              >
                                Pending
                              </Button>
                            )}
                          </>
                        )}
                        {!item.isConnectIonRequested.isConnection && (
                          <Button
                            loading={active === item.id && load}
                            onClick={() => {
                              setActive(item.id);
                              connect({
                                variables: {
                                  input: {
                                    id: item.id,
                                  },
                                },
                              });
                            }}
                            icon={<UserAddOutlined />}
                            type="primary"
                          >
                            Connect
                          </Button>
                        )}
                      </>
                    )}
                  </>
                )}
              </>,
              <Button>View Profile</Button>,
            ]}
          >
            <Flex justify="center">
              <img
                width={"100%"}
                alt="logo"
                style={{ objectFit: "cover" }}
                height={220}
                src={`${item?.avatar}`}
              />
            </Flex>
            <List.Item.Meta
              style={{ marginTop: 10 }}
              title={`${item.firstName} ${item.lastName}`}
              description={item?.aboutAlumni?.currentPosition}
            />
          </Card>
        </List.Item>
      )}
    />
  );
};
export default GirdView;

import React from "react";
import { Card, Avatar, Button, Typography, theme } from "antd";
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  MessageFilled,
  MessageOutlined,
  SendOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import {
  acceptConnection,
  connectAsConnection,
} from "@/graphql/actions/network";
import { startChat } from "@/graphql/actions/chat";
import { IoChatbox } from "react-icons/io5";
import Image from "next/image";
import UserCover from "../avatar/UserCover";
import UserAvatar from "../avatar/Avatar";

const { Text } = Typography;

export default function ProfileCard({ item }) {
  const fullName = `${item?.firstName} ${item?.lastName}`;
  const [send, { loading }] = connectAsConnection({});

  const [accept, { loading: acceptLoading }] = acceptConnection({});
  const [start, { loading: chatLoading, data }] = startChat({
    onCompleted(data) {},
  });
  return (
    <>
      <Card
        style={{ width: "90%", marginBottom: 20 }}
        cover={
          <div
            style={{
              height: 80,
              backgroundColor: "#f0f2f5",
              position: "relative",
            }}
          >
            <UserCover cover={item.cover} />
          </div>
        }
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            display: "flex",
            justifyContent: "center",

            left: "0",
            top: 30,
          }}
        >
          {item?.avatar ? (
            <Avatar
              size={80}
              src={`https://cdn.thrico.network/${item?.avatar}`}
            ></Avatar>
          ) : (
            <UserAvatar size={80}>{item?.fistName}</UserAvatar>
          )}
        </div>

        <h2
          style={{
            marginTop: 16,
            marginBottom: 4,
            fontSize: 18,
            fontWeight: 600,
          }}
        >
          {fullName}
        </h2>
        <p style={{ color: "rgba(0, 0, 0, 0.45)", marginBottom: 16 }}>
          {item?.designation}
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 16,
          }}
        >
          <UserAvatar size={20} src={item?.avatar} />
          <span
            style={{
              marginLeft: 8,
              color: "rgba(0, 0, 0, 0.45)",
              textAlign: "left",
            }}
          >
            94 mutual connections
          </span>
        </div>
        {item?.status === "NO_CONNECTION" && (
          <Button
            style={{ width: "100%" }}
            onClick={() => {
              send({
                variables: {
                  input: {
                    id: item.id,
                  },
                },
              });
            }}
            loading={loading}
            type="primary"
            icon={<SendOutlined />}
          >
            Connect
          </Button>
        )}

        {item?.status === "CONNECTED" && (
          <Button
            style={{ width: "100%" }}
            onClick={() => {
              start({
                variables: {
                  input: {
                    userID: item.id,
                  },
                },
              });
            }}
            loading={chatLoading}
            icon={<IoChatbox />}
            block
          >
            Message
          </Button>
        )}
        {item?.status === "REQUEST_SEND" && (
          <Button
            disabled
            style={{ width: "100%" }}
            type="default"
            loading={loading}
            icon={<ClockCircleOutlined />}
          >
            Pending
          </Button>
        )}

        {item?.status === "REQUEST_RECEIVED" && (
          <>
            <Button
              style={{ width: "100%" }}
              type="default"
              loading={acceptLoading}
              icon={<CheckCircleOutlined />}
              onClick={() => {
                accept({
                  variables: {
                    input: {
                      id: item.id,
                    },
                  },
                });
              }}
            >
              Accept
            </Button>
          </>
        )}
      </Card>
    </>
  );
}

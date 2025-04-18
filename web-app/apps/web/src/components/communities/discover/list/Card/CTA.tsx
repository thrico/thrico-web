import { joinCommunity } from "@/graphql/actions/communities";
import { ClockCircleOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";

import React from "react";

interface join {
  isGroupMember?: boolean;
  isJoinRequest?: boolean;
  id: string;
  slug?: string;
  status: "NO_MEMBER" | "MEMBER" | "REQUEST_SEND";
}
const CTA = ({ id, status }: join) => {
  const [join, { loading }] = joinCommunity({});

  return (
    <Space>
      {status === "NO_MEMBER" && (
        <Button
          loading={loading}
          onClick={() =>
            join({
              variables: {
                input: {
                  id: id,
                },
              },
            })
          }
          type="primary"
        >
          Join
        </Button>
      )}

      {status === "MEMBER" && (
        <Button href={`/communities/${id}`} type="primary">
          View
        </Button>
      )}
      {status === "REQUEST_SEND" && (
        <Button disabled icon={<ClockCircleOutlined />} type="default">
          Pending
        </Button>
      )}
      {/* {isGroupMember && <Button href={`/communities/${slug}`}>View</Button>}
      {!isGroupMember && (
        <>
          {isJoinRequest ? (
            <>
              <Button disabled icon={<ClockCircleOutlined />} type="primary">
                Pending
              </Button>
            </>
          ) : (
            <>
            >
            </>
          )}
        </>
      )} */}
    </Space>
  );
};

export default CTA;

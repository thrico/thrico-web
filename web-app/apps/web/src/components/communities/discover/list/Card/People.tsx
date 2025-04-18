import UserAvatar from "@/components/avatar/Avatar";
import { getCommunitiesMember } from "@/graphql/actions/communities";
import { Avatar, theme } from "antd";
import React from "react";

interface PeopleProps {
  id: string;
}


const People = ({ id }: PeopleProps) => {
  // const height = size ? size : 25;
  // const marginRight = size ? -size / 2 : -12;
  const { data } = getCommunitiesMember({
    variables: {
      input: {
        id: id,
      },
    },
  });
  const {
    token: { colorPrimary},
  } = theme.useToken();
  return (
    <>
      <Avatar.Group
        max={{
          count: 10,
          style: { color: "#f56a00", backgroundColor: "#fde3cf" },
        }}
      >
        {data?.getCommunitiesMember?.member?.map((set: string, key: number) => (
          <>
            <UserAvatar key={key} src={set}></UserAvatar>
          </>
        ))}

        <Avatar style={{backgroundColor:colorPrimary}} >{data?.getCommunitiesMember?.total}+</Avatar>
      </Avatar.Group>
    </>
  );
};

export default People;

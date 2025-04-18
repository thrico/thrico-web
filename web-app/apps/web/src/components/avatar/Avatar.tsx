import { useGetUser } from "@/graphql/actions";
import { Avatar } from "antd";
import React from "react";

interface UserAvatarProps {
  src?: string;
}

const UserAvatar = (props: UserAvatarProps) => {
  const {
    data: { getUser },
  } = useGetUser();
  const avatar = props.src
    ? `https://cdn.thrico.network/${props?.src}`
    : `https://cdn.thrico.network/${getUser?.avatar}`;

  return <Avatar {...props} src={`https://cdn.thrico.network/${avatar}`} />;
};

export default UserAvatar;

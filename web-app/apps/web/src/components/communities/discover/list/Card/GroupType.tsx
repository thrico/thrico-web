import { Flex, Space, Tooltip, theme } from "antd";
import React from "react";
import { MdPublic } from "react-icons/md";
import { RiGitRepositoryPrivateLine } from "react-icons/ri";

const GroupType = ({ groupType }: { groupType: string }) => {
  const {
    token: { colorPrimary, borderRadius },
  } = theme.useToken();
  return (
    <Tooltip title={groupType?.toUpperCase()}>
      <Flex
        align="center"
        justify="center"
        style={{
     
          height: 30,
          width: 30,
          borderRadius,
          backgroundColor: "#ffffff80",
        }}
      >
        {groupType === "public" && <MdPublic size={18} color={colorPrimary} />}

        {groupType !== "public" && (
          <RiGitRepositoryPrivateLine size={18} color={colorPrimary} />
        )}
      </Flex>
    </Tooltip>
  );
};

export default GroupType;

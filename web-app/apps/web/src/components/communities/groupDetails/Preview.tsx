import { Alert, Space } from "antd";

import React from "react";


import Intro from "./basic/Basic";
import { groupProps } from "./ts-type";

const Preview = (props: groupProps) => {


  return (
    <Space style={{ width: "100%" }} direction="vertical">
      {props.data.isJoinRequest && !props.data.isGroupMember && (
        <Alert
          showIcon={true}
          message="Your group join request has been sent. You will receive a notification when it is approved."
        />
      )}

      <Intro {...props} />
    </Space>
  );
};

export default Preview;

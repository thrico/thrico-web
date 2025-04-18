import { CheckCircleOutlined } from "@ant-design/icons";
import { Button, Popconfirm } from "antd";
import React, { useState } from "react";
import { acceptConnectionRequest } from "../../../../graphql/actions/directory";

interface props {
  id: String;
}
const AcceptRequest = ({ id }: props) => {
  const [accept, { loading }] = acceptConnectionRequest({});
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showPopconfirm = () => {
    setOpen(true);
  };

  const handleOk = () => {
    accept({
      variables: {
        input: {
          id: id,
          accept: true,
        },
      },
    });
    // setConfirmLoading(true);
  };

  const handleCancel = () => {
    accept({
      variables: {
        input: {
          id: id,
          accept: false,
        },
      },
    });
    // console.log("Clicked cancel button");
    // setOpen(false);
  };

  return (
    <Popconfirm
      title="Connection Request"
      description="Do yo want to Accept Request"
      open={open}
      okText={"Accept"}
      cancelText={"Reject"}
      onConfirm={handleOk}
      okButtonProps={{ loading }}
      onCancel={handleCancel}
      cancelButtonProps={{ loading }}
    >
      <Button
        onClick={showPopconfirm}
        icon={<CheckCircleOutlined />}
        type="primary"
      >
        Accept
      </Button>
    </Popconfirm>
  );
};

export default AcceptRequest;

import React, { useState } from "react";
import { Button, Popconfirm, Space } from "antd";
import DeleteButton from "@repo/ui/DeleteButton";
import { Tooltip } from "antd/es";
import { MdOutlineNoEncryptionGmailerrorred } from "react-icons/md";
import { removeHost } from "../../../../../../graphql/actions/events";
import { useParams } from "next/navigation";

const Delete = ({ role, refresh, id }) => {
  const { slug } = useParams();
  const [remove, { loading }] = removeHost({
    onCompleted: () => {
      refresh();
      setOpen(false);
    },
  });
  const [open, setOpen] = useState(false);

  const showPopconfirm = () => {
    setOpen(true);
  };

  const handleOk = () => {
    remove({
      variables: {
        input: {
          id: id,
          event: slug,
        },
      },
    });
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  return (
    <Popconfirm
      title="Remove User"
      description="Do You want to remove user ?"
      open={open}
      onConfirm={handleOk}
      okButtonProps={{ loading }}
      onCancel={handleCancel}
    >
      {role ? (
        <Space style={{ cursor: "no-drop" }}>
          <Tooltip title="you can delete  organizer">
            <MdOutlineNoEncryptionGmailerrorred fontSize={30} />
          </Tooltip>
        </Space>
      ) : (
        <Space onClick={showPopconfirm}>
          <DeleteButton />
        </Space>
      )}
    </Popconfirm>
  );
};

export default Delete;

import React, { useState } from "react";
import { Button, Popconfirm, Space } from "antd";
import DeleteButton from "@repo/ui/DeleteButton";
import { useDeleteSponsorShip } from "../../../../../../../graphql/actions/events";
import { useParams } from "next/navigation";

const Delete = ({ id }) => {
  const { slug } = useParams();
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const onCompleted = () => {
    setOpen(false);
  };
  const [delSponsorShip, { loading }] = useDeleteSponsorShip({
    onCompleted,
    slug,
  });

  const showPopconfirm = () => {
    setOpen(true);
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
      onConfirm={() => {
        delSponsorShip({
          variables: {
            input: {
              id,
            },
          },
        });
      }}
      okButtonProps={{ loading: loading }}
      cancelButtonProps={{ loading: loading }}
      onCancel={handleCancel}
    >
      <Space onClick={showPopconfirm}>
        <DeleteButton />
      </Space>
    </Popconfirm>
  );
};

export default Delete;

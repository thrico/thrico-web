import { Button, Drawer, theme } from "antd";
import React, { useState } from "react";
import Create from "./Create";
import { CloseCircleTwoTone, PlusCircleOutlined } from "@ant-design/icons";

const Add = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const {
    token: { colorPrimary },
  } = theme.useToken();
  return (
    <>
      <Button type="default" icon={<PlusCircleOutlined />} onClick={showDrawer}>
        Create Community
      </Button>
      <Drawer
        closeIcon={
          <CloseCircleTwoTone
            twoToneColor={colorPrimary}
            style={{ fontSize: 20 }}
          />
        }
        height={"100vh"}
        placement="bottom"
        style={{ height: "100vh" }}
        title="Create Community"
        onClose={onClose}
        open={open}
      >
        <Create onClose={onClose} />
      </Drawer>
    </>
  );
};

export default Add;

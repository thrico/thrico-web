import { Button, Drawer, theme } from "antd";
import React, { useState } from "react";
import Create from "./Create";
import { CloseCircleTwoTone } from "@ant-design/icons";

const EditCommunities = () => {
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
            <Button type="primary" onClick={showDrawer}>
                Edit
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
                title="Edit"
                onClose={onClose}
                open={open}
            >
                <Create onClose={onClose} />
            </Drawer>
        </>
    );
};

export default EditCommunities;

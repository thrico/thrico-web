import React, { useState } from "react";
import { PlusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Drawer,
  Form,
  GetProp,
  Input,
  Row,
  Select,
  Space,
  Upload,
  UploadFile,
  UploadProps,
} from "antd";
import EditButton from "@repo/ui/EditButton";
import TextArea from "antd/es/input/TextArea";
import ImgCrop from "antd-img-crop";
import Editor from "../../../../editor/Editor";

const { Option } = Select;

const EditSponsorship = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const [childrenDrawer, setChildrenDrawer] = useState(false);
  const showChildrenDrawer = () => {
    setChildrenDrawer(true);
  };
  const onChildrenDrawerClose = () => {
    setChildrenDrawer(false);
  };

  return (
    <>
      <Space onClick={showDrawer}>
        <EditButton />
      </Space>
      <Drawer
        title="Edit Sponsorship"
        width={720}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button
              icon={<PlusCircleOutlined />}
              onClick={showChildrenDrawer}
              type="primary"
            >
              Add Sponsorship
            </Button>
            <Button onClick={onClose} type="primary">
              Update
            </Button>
          </Space>
        }
      >
        <Drawer
          title="Add"
          width={500}
          closable={false}
          onClose={onChildrenDrawerClose}
          open={childrenDrawer}
        >
          <AddSponsorship />
        </Drawer>
      </Drawer>
    </>
  );
};

const AddSponsorship = () => {
  return (
    <div>
      <Editor />
    </div>
  );
};

export default EditSponsorship;

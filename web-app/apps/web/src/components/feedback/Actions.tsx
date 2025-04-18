import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown, message, Space } from "antd";
import { BsThreeDots } from "react-icons/bs";
import Rename from "./Rename";
import Delete from "./Delete";
import Link from "next/link";
import {
  addFeedBackForm,
  duplicateFeedBackForm,
} from "../../graphql/actions/feedback";

const Actions = ({ type, record }) => {
  const [messageApi, contextHolder] = message.useMessage();

  const onCompleted = () => {
    messageApi.open({
      key,
      type: "success",
      content: "Created",
      duration: 10,
    });
  };
  const [add, { loading, error }] = duplicateFeedBackForm({
    onCompleted,
    type,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [isModalDelete, setIsModalDelete] = useState(false);

  const handleOkDelete = () => {
    setIsModalDelete(false);
  };

  const handleCancelDelete = () => {
    setIsModalDelete(false);
  };
  const showModalDelete = () => {
    setIsModalDelete(true);
  };

  const items: MenuProps["items"] = [
    {
      label: <Link href={`feedback/${record.id}`}>Open</Link>,
      key: "0",
    },
    {
      label: <a href="https://www.aliyun.com">Copy link</a>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "Share",
      key: "3",
    },
    {
      label: "Results",
      key: "4",
    },
    {
      type: "divider",
    },
    {
      label: "Duplicate",
      key: "5",
      onClick: () =>
        add({
          variables: {
            input: {
              id: record.id,
            },
          },
        }),
    },
    {
      label: "Rename",
      key: "7",
      onClick: () => showModal(),
    },
    {
      type: "divider",
    },
    {
      label: "Delete",
      key: "8",
      onClick: () => showModalDelete(),
      danger: true,
    },
  ];
  const key = "updatable";

  return (
    <>
      {contextHolder}
      <Dropdown
        overlayStyle={{ width: 200 }}
        menu={{ items }}
        trigger={["click"]}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <Button type="text">
              <BsThreeDots />
            </Button>
          </Space>
        </a>
      </Dropdown>
      {loading &&
        messageApi.open({
          key,
          type: "loading",
          content: "Duplicating Form",
        })}
      <Rename
        record={record}
        type={type}
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
      <Delete
        isModalOpen={isModalDelete}
        handleOk={handleOkDelete}
        handleCancel={handleCancelDelete}
      />
    </>
  );
};

export default Actions;

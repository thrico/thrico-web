import React, { useState } from "react";
import { Avatar, Button, List, Modal, Skeleton } from "antd";
import {
  acceptRequestGroup,
  getAllGroupRequest,
} from "../../../../graphql/actions/communities";
import { CheckCircleOutlined, CloseOutlined } from "@ant-design/icons";

const GroupRequest = ({ id, refresh }) => {
  const { data, loading } = getAllGroupRequest({
    variables: {
      input: {
        id,
      },
    },
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
  const onCompleted = () => {
    handleCancel();
    refresh();
  };
  const [accept, { data: s, loading: load }] = acceptRequestGroup({
    id,
    onCompleted,
  });

  console.log(id);
  return (
    <>
      <Button type="primary" onClick={showModal}>
        View All Request
      </Button>
      <Modal
        title="All Request"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
        <List
          className="demo-loadmore-list"
          loading={loading}
          itemLayout="horizontal"
          dataSource={data?.getAllGroupRequest}
          renderItem={(item) => (
            <List.Item
              actions={[
                <Button
                  loading={load}
                  onClick={() => {
                    accept({
                      variables: {
                        input: {
                          alumniId: item?.id,
                          groupID: id,
                          accept: true,
                        },
                      },
                    });
                  }}
                  icon={<CheckCircleOutlined />}
                  type="primary"
                >
                  Accept
                </Button>,
                <Button
                  loading={load}
                  onClick={() => {
                    accept({
                      variables: {
                        input: {
                          alumniId: item?.id,
                          groupID: id,
                          accept: false,
                        },
                      },
                    });
                  }}
                  icon={<CloseOutlined />}
                >
                  Reject
                </Button>,
              ]}
            >
              <List.Item.Meta
                avatar={<Avatar src={item?.user?.avatar} />}
                title={
                  <>
                    {item?.user?.firstName} {item?.user?.lastName}
                  </>
                }
                description={item?.user?.aboutAlumni?.currentPosition}
              />
            </List.Item>
          )}
        />
      </Modal>
    </>
  );
};

export default GroupRequest;

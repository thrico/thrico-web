import React, { useState } from "react";
import { Button, Card, Modal, Space } from "antd";
import AddButton from "@repo/ui/AddButton";
import { getAllConnection } from "../../../../../../graphql/actions/alumni";
import { useParams } from "next/navigation";
import { Avatar, List } from "antd/es";
import { addHost } from "../../../../../../graphql/actions/events";

const Add = ({ refresh }) => {
  const { slug } = useParams();
  const [modal1Open, setModal1Open] = useState(false);

  const { data, loading, refetch } = getAllConnection({
    variables: {
      input: {
        id: slug,
      },
    },
  });

  const [add, { loading: lo }] = addHost({
    onCompleted: () => {
      refresh();
      refetch();
    },
  });
  const [active, setActive] = useState("");

  return (
    <>
      <Space onClick={() => setModal1Open(true)}>
        <AddButton />
      </Space>
      <Modal
        footer={[]}
        open={modal1Open}
        onOk={() => setModal1Open(false)}
        onCancel={() => setModal1Open(false)}
      >
        <Card
          title="Add User as Co-Host"
          extra={[
            <>
              {/* <Space>
                <Button type="primary">Add</Button>
                <Button>Cancel</Button>
              </Space> */}
            </>,
          ]}
        >
          <List
            loading={loading}
            itemLayout="horizontal"
            dataSource={data?.getAllConnection}
            renderItem={(item, index) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar shape={"square"} src={`${item?.avatar}`} />}
                  title={
                    <a href="https://ant.design">
                      {item?.firstName} {item?.lastName}
                    </a>
                  }
                  description={`${item?.aboutAlumni?.currentPosition}`}
                />
                <div>
                  {item?.isAdded && (
                    <Button disabled type="primary">
                      Add
                    </Button>
                  )}
                  {!item?.isAdded && (
                    <Button
                      onClick={() => {
                        setActive(item.id);
                        add({
                          variables: {
                            input: {
                              id: item.id,
                              event: slug,
                            },
                          },
                        });
                      }}
                      loading={lo && active === item.id}
                      type="primary"
                    >
                      Add
                    </Button>
                  )}
                </div>
              </List.Item>
            )}
          />
        </Card>
      </Modal>
    </>
  );
};

export default Add;

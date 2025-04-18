import { Button, Card, Flex, Space, Typography } from "antd";
import React from "react";
import IconText from "../../../../common/IconText";
import { UsergroupAddOutlined } from "@ant-design/icons";
import { Avatar, fullname } from "react-lorem-ipsum";

const EventOrganizer = () => {
  return (
    <Card title="Event Organizer">
      <Flex wrap="wrap" gap={20}>
        {[1, 2, 3].map((set) => (
          <Card
            style={{ width: "30%" }}
            actions={[
              <IconText icon={UsergroupAddOutlined} text={`15 Followers`} />,
              <IconText icon={UsergroupAddOutlined} text={`15 Following`} />,
            ]}
          >
            <Avatar style={{ width: "100%" }} />
            <Space
              direction="vertical"
              style={{ marginTop: 10, width: "100%" }}
            >
              <Typography>
                <strong>{fullname()}</strong>{" "}
              </Typography>
              <Typography>Senior Marking Manager , Merino</Typography>
              <Button type="primary">Connect</Button>
            </Space>
          </Card>
        ))}
      </Flex>
    </Card>
  );
};

export default EventOrganizer;

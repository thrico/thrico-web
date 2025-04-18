import { Card, Flex, Space, Tabs } from "antd";
import React from "react";
import AgendaTimeline from "./Timeline";
import Edit from "./Edit";

const tabBar = [
  {
    label: "Day 1",
  },
  {
    label: "Day 2",
  },

  {
    label: "Day 3",
  },
];
const Agenda = () => {
  const [active, setActive] = React.useState("Day 1");

  return (
    <Card
      extra={
        <>
          <Edit />
        </>
      }
      title={
        <>
          <Tabs
            style={{ marginTop: 30 }}
            activeKey={active}
            onChange={(key: string) => setActive(key)}
            items={tabBar.map((t, i) => {
              const id = String(i + 1);
              return {
                key: t.label,
                label: t.label,
              };
            })}
          />
        </>
      }
    >
      <Flex style={{ width: "100%" }}>
        <Space style={{ width: "50%" }}>
          <AgendaTimeline />
        </Space>
      </Flex>
    </Card>
  );
};

export default Agenda;

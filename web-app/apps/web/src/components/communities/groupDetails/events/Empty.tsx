import React from "react";
import { Button, Card, Empty } from "antd";
import AddEvent from "./add/AddEvent";

const EmptyView = ({ id, isAdmin }) => (
  <Card>
    <Empty
      image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
      imageStyle={{ height: 60 }}
      description={<span> No Event Found</span>}
    >
      {isAdmin && <AddEvent id={id} />}
    </Empty>
  </Card>
);

export default EmptyView;

import React from "react";
import { Button, Result } from "antd";
import Link from "next/link";

const Message: React.FC = () => (
  <Result
    status="warning"
    title="Please add sponsorship to add Sponsors"
    extra={
      <Link href="sponsorship">
        <Button type="primary" key="console">
          Add Sponsorship
        </Button>
      </Link>
    }
  />
);

export default Message;

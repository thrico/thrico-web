import { checkMentorShip } from "@/graphql/actions/mentorship";
import { Button, Space } from "antd";
import Link from "next/link";
import React from "react";

const RegisterButton = () => {
  const { data, loading } = checkMentorShip();
  return (
    <>
      <>
        {!data?.checkMentorShip?.isRequested && (
          <Link href={"/mentorship/register"}>
            <Space>
              <Button type="primary">Register as mentor</Button>
            </Space>
          </Link>
        )}
        {data?.checkMentorShip?.isRequested && (
          <Link href={"/mentorship/dashboard"}>
            <Space>
              <Button type="primary">Dashboard</Button>
            </Space>
          </Link>
        )}
      </>
    </>
  );
};

export default RegisterButton;

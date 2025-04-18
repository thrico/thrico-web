import React from "react";
import Profile from "../Profile";
import { Button, Space } from "antd";
import LoginButton from "@/components/common/button/LoginButton";
import { useGetUser } from "@/graphql/actions";

const LoginAuth = () => {
  const { data: { getUser } = {}, loading } = useGetUser();
  return (
    <>
      {!loading && (
        <>
          {getUser ? (
            <Profile getUser={getUser} />
          ) : (
            <Space>
              <LoginButton>
                <Button> Login </Button>
              </LoginButton>
            </Space>
          )}
        </>
      )}
    </>
  );
};

export default LoginAuth;

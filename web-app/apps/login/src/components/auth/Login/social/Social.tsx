import { Button, Flex, Space } from "antd";
import React from "react";
import GoogleLogin from "./GoogleLogin";
import LinkedinLogin from "./Linkedin";
import AppleLogin from "./AppleLogin";
import { GoogleOAuthProvider } from "@react-oauth/google";
import LoginWithGoogle from "./LoginWithGoogle";
import LoginWithGithub from "./LoginWithGithub";

const Social = () => {
  return (
    <Space
      direction="vertical"
      align="center"
      style={{ width: "100%", gap: 20 }}
    >
      <GoogleOAuthProvider clientId="6481733217-g1110u3pt0v90eakm8s7ih63aosqf8p7.apps.googleusercontent.com">
        <LoginWithGoogle />
      </GoogleOAuthProvider>
      {/* <LinkedinLogin />
      <LoginWithGithub /> */}
    </Space>
  );
};

export default Social;

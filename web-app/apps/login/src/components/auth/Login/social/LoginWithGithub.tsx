"use client";

import {
  GithubOutlined,
  GoogleCircleFilled,
  GoogleOutlined,
} from "@ant-design/icons";
import { Button, Flex, Typography } from "antd";
import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../../../utils/firebase";
import { loginByGoogle } from "../../../../graphql/actions";
import { useTokenOrganization, useTokenStore } from "../../../../store/store";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { decryptToken } from "@repo/ui/encryption";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import GoogleSvg from "./GoogleSvg";
const LoginWithGithub = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const orgToken = useTokenOrganization.getState().token;
  const [loginWithGoogle, { data, loading }] = loginByGoogle({
    async onCompleted(data: any) {
      storeToken(data?.loginByGoogle?.token);
      router.push(`${process.env.NEXT_PUBLIC_LOGIN_URL}/profile`);
    },
  });
  const storeToken = useTokenStore((state) => state.storeToken);

  const responseMessage = async (response) => {
    const domain = await decryptToken(orgToken);

    const userInfo = await axios
      .get("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: { Authorization: `Bearer ${response.access_token}` },
      })
      .then((res) => res.data);

    const set = {
      name: userInfo.name,
      avatar: userInfo.picture,
      googleId: userInfo.sub,
      email: userInfo.email,
      domain: domain.origin,
    };
    loginWithGoogle({
      variables: {
        input: set,
      },
    });
  };
  const errorMessage = (error) => {
    console.log(error, "sddssd");
  };

  return (
    <>
      <Button
        style={{ width: 300, height: 40 }}
        href="https://github.com/login/oauth/authorize?client_id=Ov23liy8e9urAiJLIPCo"
      >
        {!loading && (
          <Flex style={{ gap: 30 }}>
            <GithubOutlined style={{ fontSize: 20 }} />
            <Typography> Continue with Github</Typography>
          </Flex>
        )}
      </Button>
    </>
  );
};

export default LoginWithGithub;

import { Button, Flex, Typography } from "antd";
import React from "react";
import { loginByGoogle } from "../../../../graphql/actions";
import { useTokenOrganization, useTokenStore } from "../../../../store/store";
import { useRouter } from "next/navigation";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import GoogleSvg from "./GoogleSvg";
import { decryptToken } from "@/utils/encryption";
const LoginWithGoogle = () => {
  const router = useRouter();


  const orgToken = useTokenOrganization.getState().token;
  const [loginWithGoogle, { loading }] = loginByGoogle({
    async onCompleted(data: { loginByGoogle?: { token?: string } }) {
      if (data?.loginByGoogle?.token)
        storeToken(data?.loginByGoogle?.token);

      router.push(`${process.env.NEXT_PUBLIC_LOGIN_URL}/profile`);

    },
  });
  const storeToken = useTokenStore((state) => state.storeToken);

  const responseMessage = async (response: { access_token: string }) => {
    const domain = await decryptToken(orgToken);

    const userInfo = await axios
      .get("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: { Authorization: `Bearer ${response?.access_token}` },
      })
      .then((res) => res.data);



    await loginWithGoogle({
      variables: {
        input: {
          firstName: userInfo.given_name ? userInfo.given_name : userInfo.name,
          lastName: userInfo.family_name ? userInfo.family_name : "",
          avatar: userInfo.picture,
          googleId: userInfo.sub,
          email: userInfo.email,
          domain: domain.origin,
        }
      },
    });
  };
  const errorMessage = (error: unknown) => {
    console.log(error, "sddssd");
  };

  const login = useGoogleLogin({
    onSuccess: responseMessage,
    onError: errorMessage,
  });
  return (
    <>
      <Button
        loading={loading}
        style={{ width: 300, height: 40 }}
        onClick={() => login()}
      >
        {!loading && (
          <Flex style={{ gap: 30 }}>
            <GoogleSvg />
            <Typography> Continue with Google</Typography>
          </Flex>
        )}
      </Button>
    </>
  );
};

export default LoginWithGoogle;

import { Button, Flex, Space, Typography } from "antd";
import React, { useEffect } from "react";

import { useLinkedIn } from "react-linkedin-login-oauth2";

import { FaLinkedin } from "react-icons/fa";
import LinkedinSvg from "./LinkedinSvg";
import axios from "axios";

const LinkedinLogin = () => {
  const call = async () => {
    try {
      let data = JSON.stringify({
        password: "sdsd",
        username: "sdsd",
      });
      const userInfo = await axios
        .post("https://www.linkedin.com/oauth/v2/accessToken", data, {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        })
        .then((res) => res.data);
      console.log(userInfo);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    call();
  }, []);

  return (
    <>
      <Button
        target="_blank"
        href="https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=78iloq5ftme06t&redirect_uri=http://localhost:4001/linkedin/callback?&scope=openid,profile,email"
        style={{ width: 300, height: 40 }}
      >
        <Flex style={{ gap: 30, marginTop: 5 }}>
          <LinkedinSvg />
          <Typography> Continue with Linkedin</Typography>
        </Flex>
      </Button>
    </>
  );
};

export default LinkedinLogin;

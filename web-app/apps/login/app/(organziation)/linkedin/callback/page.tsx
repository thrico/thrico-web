"use client";

import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";

// import { LinkedInCallback } from "react-linkedin-login-oauth2";
// import qs from "qs";
const Page = () => {
  const searchParams = useSearchParams();

  const code = searchParams?.get("code");

  const call = async () => {
    try {
      const data = await fetch(
        "https://www.linkedin.com/oauth/v2/accessToken",
        {
          method: "POST",
          body: JSON.stringify({
            grant_type: "authorization_code",
            code,
            redirect_uri: "http://localhost:4001/linkedin/callback",
            client_id: "78iloq5ftme06t",
            client_secret: "sdsd",
          }),
        }
      ).then((response) => response.json());
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    call();
  }, []);

  // useEffect(() => {
  //   var data = qs.stringify({
  //     client_id: "78iloq5ftme06t",
  //     client_secret: "WPL_AP0.R1ahr8Z6wCHlOkiz.MTA5Mzk4MzkzMA==",
  //     grant_type: "authorization_code",
  //     code: code,
  //   });
  //   var config = {
  //     method: "post",
  //     url: "https://www.linkedin.com/oauth/v2/accessToken",
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     data: data,
  //   };

  //   axios(config)
  //     .then(function (response) {
  //       console.log(JSON.stringify(response.data));
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  //   // axios({
  //   //   // Endpoint to send files
  //   //   url: "https://www.linkedin.com/oauth/v2/accessToken",
  //   //   method: "POST",
  //   //   withCredentials: true,
  //   //   headers: {
  //   //     "Access-Control-Allow-Origin": "*",
  //   //     "Access-Control-Allow-Headers": "*",
  //   //     "Access-Control-Allow-Credentials": true,
  //   //     "Content-Type": "application/x-www-form-urlencoded",
  //   //   },
  //   //   data: {
  //   //     grant_type: "authorization_code",
  //   //     code: code,
  //   //     client_id: "78iloq5ftme06t",
  //   //     client_secret: "WPL_AP0.R1ahr8Z6wCHlOkiz.MTA5Mzk4MzkzMA==",
  //   //     redirect_uri: "http://localhost:8080/linkedin/callback",
  //   //   },
  //   // })
  //   //   // Handle the response from backend here
  //   //   .then((res) => {
  //   //     console.log(res);
  //   //   })
  //   //   // Catch errors if any
  //   //   .catch((err) => {});
  // }, [code]);

  return <>sdsd</>;
};

export default Page;

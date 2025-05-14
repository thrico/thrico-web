import React from "react";

import { Button, ConfigProvider, Space } from "antd";
import AnimationSvg from "../profile/AnimationSvg";

import { checkEntity } from "../../graphql/actions";
import AuthLayout from "../auth/AuthLayout/AuthLayout";
interface CheckOrganizationProps {
  token: string;
  children: React.ReactNode;
}

const CheckOrganization: React.FC<CheckOrganizationProps> = ({
  token,
  children,
}) => {
  const { data, loading } = checkEntity({
    variables: {
      token: token,
    },
  });
  console.log(data);
  return (
    <>
      {!loading && (
        <ConfigProvider
          theme={{
            token: {
              ...data?.checkEntity.theme,
            },
          }}
        >
          <div
            style={{
              backgroundColor: data?.checkEntity.theme?.colorPrimary,
              height: "100vh",
              backgroundImage: `url("https://cdn.thrico.network/l@3000x3000@1x.webp")`,
              backgroundPosition: "center",
              backgroundRepeat: "repeat",
            }}
          >
            <AuthLayout
              name={data?.checkEntity?.organizationName}
              logo={`https://cdn.thrico.network/${data?.checkEntity?.logo}`}
              svg={<AnimationSvg />}
            >
              {children}
            </AuthLayout>
          </div>
        </ConfigProvider>
      )}
    </>
  );
};

export default CheckOrganization;

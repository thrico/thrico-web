import React from "react";

import {
  Button,
  ConfigProvider,
  Progress,
  Space,
  Spin,
  Typography,
} from "antd";
import AnimationSvg from "../profile/AnimationSvg";

import { checkEntity } from "../../graphql/actions";
import AuthLayout from "../auth/AuthLayout/AuthLayout";
import RegistrationClosed from "../auth/AuthLayout/RegistrationClosed";
import { OrganizationContext } from "./context/OrganizationContext";
import { LoadingOutlined } from "@ant-design/icons";

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
  const { Title, Text } = Typography;
  return (
    <>
      {loading && (
        <div style={{ textAlign: "center", padding: "24px" }}>
          <Spin
            indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />}
            size="large"
          />
          <div style={{ marginTop: 24, marginBottom: 16 }}>
            <Title level={3}>Authenticating</Title>
            <Text type="secondary">
              Please wait while we verify your credentials
            </Text>
          </div>
        </div>
      )}
      {!loading && (
        <ConfigProvider
          theme={{
            token: {
              ...data?.checkEntity.theme,
            },
          }}
        >
          <OrganizationContext.Provider
            value={{
              organizationName: data?.checkEntity?.organizationName,
              logo: data?.checkEntity?.logo,
              settings: data?.checkEntity?.settings,
              theme: data?.checkEntity.theme,
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
                {data?.checkEntity?.settings?.allowNewUser && children}
                {!data?.checkEntity?.settings?.allowNewUser && (
                  <RegistrationClosed
                    name={data?.checkEntity?.organizationName}
                    logo={`https://cdn.thrico.network/${data?.checkEntity?.logo}`}
                  />
                )}
              </AuthLayout>
            </div>
          </OrganizationContext.Provider>
        </ConfigProvider>
      )}
    </>
  );
};

export default CheckOrganization;

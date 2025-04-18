"use client";
import MessageBox from "@/components/message/MessageBox";
import Kyc from "../components/kyc/Kyc";
import { useGetUser } from "../graphql/actions";
import { usePathname } from "next/navigation";
import ProfilePage from "@/components/profile/Profile";
import { Alert, Space } from "antd";
export default (WrappedComponent: any, options = { ssr: false }) => {
  function WithAuth(props: any) {
    const pathname = usePathname();
    const { data: { getUser } = {}, loading, error } = useGetUser();

    if (loading) {
      return <></>;
    }
    if (!loading && (!getUser || error) && typeof window !== "undefined") {
      localStorage.removeItem("key");
      return <>{/* <Redirect to="/auth/login" /> */}</>;
    }

    if (!getUser?.isRequested) {
      return <Kyc />;
    }

    if (getUser?.isRequested && !getUser?.isApproved) {
      return (
        <>
          <Space style={{ marginBottom: 10 }}>
            <Alert
              message="Profile Under Review"
              description="Your profile is currently under review. You will gain access to all features once it is approved by the admin."
              type="info"
              banner

            />
          </Space>
          <ProfilePage />
        </>
      );
    }

    if (getUser?.isRequested && getUser?.isApproved) {
      return (
        <>
          <MessageBox />
          <WrappedComponent {...props} />
        </>
      );
    }
  }

  return WithAuth;
};

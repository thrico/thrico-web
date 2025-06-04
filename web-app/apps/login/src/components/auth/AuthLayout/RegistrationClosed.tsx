import {
  Card,
  Typography,
  Button,
  Space,
  Alert,
  Divider,
  Result,
  Image,
  Flex,
} from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import Link from "next/link";
import Actions from "./Actions";

const { Title, Paragraph, Text } = Typography;

export default function RegistrationClosed({
  name,
  logo,
}: {
  name: string;
  logo: string;
}) {
  return (
    <>
      <Result
        status="warning"
        title="Registration Temporarily Unavailable"
        subTitle="We're currently not accepting new user registrations at this time."
        icon={<ExclamationCircleOutlined />}
      />

      <div style={{ padding: "0 24px 24px" }}>
        {/* <Alert
            message="System Maintenance"
            description="Our team is working on system improvements to enhance your experience."
            type="info"
            showIcon
            style={{ marginBottom: "24px" }}
          /> */}

        {/* <Paragraph>
            If you need immediate access or have any questions, please contact
            our administration team directly using the button below.
          </Paragraph> */}

        {/* <Divider /> */}
        {/* 
          <Space direction="vertical" style={{ width: "100%" }}>
            <Button type="primary" block>
              Contact Administration
            </Button>
            <div style={{ textAlign: "center", marginTop: "12px" }}>
              <Link href="/">
                <Text type="secondary" style={{ cursor: "pointer" }}>
                  Return to Homepage
                </Text>
              </Link>
            </div>
          </Space> */}
      </div>
    </>
  );
}

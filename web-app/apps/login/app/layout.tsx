import { AntdRegistry } from "@ant-design/nextjs-registry";

import "antd/dist/reset.css";
import { workSans } from "./font";
import { ConfigProvider } from "antd";

import theme from "@/theme/theme";
import { ApolloWrapper } from "@/utils/apollo-provider";

async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <ApolloWrapper>
        <html lang="en">
          <AntdRegistry>
            <ConfigProvider theme={theme}>
              <body className={workSans.className}> {children}</body>
            </ConfigProvider>
          </AntdRegistry>
        </html>
      </ApolloWrapper>
    </html>
  );
}

export default RootLayout;

import React from "react";
import { Button, Image, Layout, Menu, Space, theme } from "antd";

const { Header } = Layout;
interface props {
  logo: String;
}
const Navbar = ({ logo }: props) => {
  const {
    token: { colorPrimary },
  } = theme.useToken();

  return (
    <Header
      style={{
        backgroundColor: colorPrimary,
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      {logo}
      <Image
        alt="logo"
        src={`https://cdn.thrico.network/${logo}`}
        preview={false}
        style={{
          objectFit: "contain",
          height: "3rem",
          width: "3rem",
        }}
      />

      <Menu
        mode="horizontal"
        items={items}
        style={{
          backgroundColor: colorPrimary,
          width: "50%",
          display: "flex",
          justifyContent: "center",
        }}
      />
      <Space>
        <Button> Login </Button>
      </Space>
    </Header>
  );
};

export default Navbar;

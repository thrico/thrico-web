import { CopyOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
const Copy = () => {
  const [copied, setCopied] = React.useState(false);
  const onClick = React.useCallback(({ target: { innerText } }: any) => {
    console.log(`Clicked on "${innerText}"!`);
  }, []);
  const onCopy = React.useCallback(() => {
    setCopied(true);
  }, []);
  const [value, setValue] = React.useState("some\ntext");
  return (
    <CopyToClipboard
      onCopy={onCopy}
      options={{ message: "Whoa!" }}
      text={value}
    >
      <Button onClick={onClick}>
        <CopyOutlined />
      </Button>
    </CopyToClipboard>
  );
};

export default Copy;

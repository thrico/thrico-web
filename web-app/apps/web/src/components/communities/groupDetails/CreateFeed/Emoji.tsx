import Picker from "emoji-picker-react";
import React, { useState } from "react";
import { Button, Popover } from "antd";
const Emoji = ({ onEmojiClick, open, handleOpenChange }) => {
  return (
    <Popover
      content={<Picker onEmojiClick={onEmojiClick} />}
      title="Title"
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
    >
      <Button>😀</Button>
    </Popover>
  );
};

export default Emoji;

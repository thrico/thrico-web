import { Avatar, Button, Form, Input, List } from "antd";
import moment from "moment";
import React, { useState } from "react";
import { Comment } from "@ant-design/compatible";
import { addFeedComment } from "@/graphql/actions/feed";
import { addIssueComment } from "@/graphql/actions/issues";

import Editor from "../../common/editor/Editor";
const { TextArea } = Input;

interface CommentItem {
  author: string;
  avatar: string;
  content: React.ReactNode;
  datetime: string;
}

interface EditorProps {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: () => void;
  loading: boolean;
  value: string;
}

const AddComment = ({ id }: { id: string }) => {
  const [add, { loading }] = addIssueComment({
    id,
  });

  const [value, setValue] = useState(null);

  const handleSubmit = () => {
    if (!value) return;

    add({
      variables: {
        input: {
          feedId: id,
          content: value,
        },
      },
    });

    setValue(null);
  };

  return (
    <>
      <Comment
        style={{ padding: 20 }}
        // avatar={
        //   <Avatar
        //     src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        //     alt="Han Solo"
        //   />
        // }
        content={
          <>
            <Form.Item>
              <Editor description={value} setDescription={setValue} />
            </Form.Item>
            <Form.Item>
              <Button
                disabled={!value ? true : false}
                htmlType="submit"
                loading={loading}
                onClick={handleSubmit}
                type="primary"
              >
                Add Comment
              </Button>
            </Form.Item>
          </>
        }
      />
    </>
  );
};

export default AddComment;

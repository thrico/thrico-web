interface CommentItem {
  author: string;
  avatar: string;
  content: React.ReactNode;
  datetime: string;
}
import { Comment } from "@ant-design/compatible";
import { LikeFilled } from "@ant-design/icons";
import { List, Tooltip } from "antd";

const actions = [
  <Tooltip key="comment-basic-like" title="Like">
    <span>
      <LikeFilled />
    </span>
  </Tooltip>,

  // <span key="comment-basic-reply-to">Reply </span>,
];
const CommentList = ({
  comments,
  loading,
}: {
  comments: CommentItem[];
  loading: boolean;
}) => (
  <>
    {comments?.length !== 0 && (
      <List
        locale={{
          emptyText: "No",
        }}
        loading={loading}
        dataSource={comments}
        itemLayout="horizontal"
        renderItem={(props) => (
          <Comment style={{ padding: 20 }} {...props} actions={actions} />
        )}
      />
    )}
  </>
);

export default CommentList;

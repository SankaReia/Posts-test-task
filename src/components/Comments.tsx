import { FC, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { fetchComments } from "../store/http";

export interface CommentI {
  postId: string;
  id: string;
  name: string;
  email: string;
  body: string;
}

interface CommentsProp {
  postId: string;
}

const Comments: FC<CommentsProp> = ({ postId }) => {
  const [comments, setComments] = useState<CommentI[]>([]);

  useEffect(() => {
    fetchComments(postId).then((comments) => setComments(comments));
  }, []);

  return (
    <>
      {comments.map((comment) => (
        <div style={{ padding: "0 20px" }}>
          <hr style={{ margin: " 5px 0" }} />
          <Card.Title>{comment.email}</Card.Title>
          <Card.Text style={{ marginLeft: 20 }}>{comment.body}</Card.Text>
        </div>
      ))}
    </>
  );
};

export default Comments;

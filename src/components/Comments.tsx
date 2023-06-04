import { FC, useEffect, useState } from "react";
import { Card, Spinner } from "react-bootstrap";
import { fetchComments } from "../store/http";
import { CommentI } from "../utils/postConsts";

interface CommentsProp {
  postId: string;
}

const Comments: FC<CommentsProp> = ({ postId }) => {
  const [comments, setComments] = useState<CommentI[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      fetchComments(postId).then((comments) => setComments(comments));
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {isLoading ? (
        <div style={{ textAlign: "center" }}>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        comments.map((comment) => (
          <div style={{ padding: "0 20px" }}>
            <hr style={{ margin: " 5px 0" }} />
            <Card.Title>{comment.email}</Card.Title>
            <Card.Text style={{ marginLeft: 20 }}>{comment.body}</Card.Text>
          </div>
        ))
      )}
    </>
  );
};

export default Comments;

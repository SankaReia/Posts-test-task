import { FC } from "react";
import { Card, Spinner } from "react-bootstrap";
import { useTypedSelector } from "../hooks/useRedux";

const Comments: FC = () => {
  const { comments } = useTypedSelector((state) => state.commentReducer);
  const { isLoadingComm } = useTypedSelector((state) => state.loadReducer);

  return (
    <>
      {isLoadingComm ? (
        <div style={{ textAlign: "center" }}>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        comments.map((comment) => (
          <div style={{ padding: "0 20px" }} key={comment.id}>
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

import { FC, useState } from "react";
import { Card, Image, Stack } from "react-bootstrap";
import userLogo from "../img/userLogo.png";
import Comments from "./Comments";
import { useNavigate } from "react-router-dom";
import { PostI } from "../utils/postConsts";
import { useDispatch } from "react-redux";
import { getComments } from "../store/reducers/commentReducer";

interface PostItemProp {
  post: PostI;
}

const PostItem: FC<PostItemProp> = ({ post }) => {
  const dispatch = useDispatch();
  const [onComment, setOnComment] = useState(false);
  const navigate = useNavigate();

  const commentHandler = () => {
    setOnComment((prev) => !prev);
    dispatch(getComments(post.id));
  };

  return (
    <Card style={{ maxWidth: "800px", width: "100%" }} className="mt-3 mx-auto">
      <Stack direction="horizontal" gap={2} className="mt-2">
        <Image
          src={userLogo}
          width="80"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/user/" + post.userId)}
        />
        <Card.Title>
          {post.id}.{post.title}
        </Card.Title>
      </Stack>
      <Card.Body>
        <Card.Text>{post.body}</Card.Text>
        <span
          className="material-symbols-outlined"
          style={{ cursor: "pointer" }}
          onClick={commentHandler}
        >
          comment
        </span>
      </Card.Body>
      {onComment && <Comments />}
    </Card>
  );
};

export default PostItem;

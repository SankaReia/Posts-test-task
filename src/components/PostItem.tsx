import { FC, useState } from "react";
import { Card, Image, Stack } from "react-bootstrap";
import userLogo from "../userLogo.png";
import Comments from "./Comments";
import { useNavigate } from "react-router-dom";
import { PostI } from "../utils/postConsts";

interface PostItemProp {
  post: PostI;
}

const PostItem: FC<PostItemProp> = ({ post }) => {
  const [onComment, setOnComment] = useState(false);
  const navigate = useNavigate();

  return (
    <Card style={{ maxWidth: "800px", width: "100%" }} className="mt-3 mx-auto">
      <Stack direction="horizontal" gap={2} className="mt-2">
        <Image
          src={userLogo}
          width="80"
          onClick={() => navigate("/user/" + post.userId)}
        />
        <Card.Title>{post.title}</Card.Title>
      </Stack>
      <Card.Body>
        <Card.Text>{post.body}</Card.Text>
        <span
          className="material-symbols-outlined"
          style={{ cursor: "pointer" }}
          onClick={() => setOnComment((prev) => !prev)}
        >
          comment
        </span>
      </Card.Body>
      {onComment && <Comments postId={post.id} />}
    </Card>
  );
};

export default PostItem;

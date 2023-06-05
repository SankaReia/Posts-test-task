import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useRedux";
import { Card, Spinner, Stack, Image } from "react-bootstrap";
import PostItem from "../components/PostItem";
import { getUser } from "../store/reducers/userReducer";
import { useParams } from "react-router-dom";
import userLogo from "../userLogo.png";

const UserPage: FC = () => {
  const dispatch = useDispatch();
  const { userPosts, user } = useTypedSelector((state) => state.userReducer);
  const { isLoadingPost } = useTypedSelector((state) => state.loadReducer);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getUser(id));
  }, []);

  return (
    <>
      {isLoadingPost ? (
        <div style={{ textAlign: "center", marginTop: 100 }}>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <>
          <Card
            style={{ maxWidth: "800px", width: "100%" }}
            className="p-2 mx-auto"
          >
            <Stack direction="horizontal" gap={2}>
              <Image src={userLogo} width="200" />
              <Stack gap={2}>
                <Card.Title>email: {user.email}</Card.Title>
                <Card.Body>
                  <Card.Text>name: {user.name}</Card.Text>
                  <Card.Text>username: {user.username}</Card.Text>
                </Card.Body>
              </Stack>
            </Stack>
          </Card>

          <h2 style={{ textAlign: "center" }}>{user.name} posts:</h2>

          <div>
            {userPosts.map((post) => (
              <PostItem key={post.id} post={post} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default UserPage;

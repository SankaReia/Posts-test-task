import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useRedux";
import { Card, Spinner, Stack, Image, Button, Alert } from "react-bootstrap";
import PostItem from "../components/PostItem";
import { getUser } from "../store/reducers/userReducer";
import { useNavigate, useParams } from "react-router-dom";
import userLogo from "../img/userLogo.png";

const UserPage: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userPosts, user } = useTypedSelector((state) => state.userReducer);
  const { isLoadingPost } = useTypedSelector((state) => state.loadReducer);
  const { errorUser } = useTypedSelector((state) => state.errorReducer);

  const { id } = useParams();

  useEffect(() => {
    id && dispatch(getUser(id));
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
            className="p-2 mx-auto position-relative"
          >
            <Stack direction="horizontal" gap={2}>
              <Image src={userLogo} width="200" />
              <Stack>
                <Card.Title>email: {user.email}</Card.Title>
                <Card.Title>name: {user.name}</Card.Title>
                <Card.Title>username: {user.username}</Card.Title>
              </Stack>
            </Stack>
            <Button
              variant="secondary"
              className="position-absolute end-0 "
              onClick={() => navigate("/")}
            >
              Back
            </Button>
          </Card>

          <h2 style={{ textAlign: "center" }}>{user.name} posts:</h2>

          <div>
            {userPosts.map((post) => (
              <PostItem key={post.id} post={post} />
            ))}
          </div>
        </>
      )}

      {errorUser !== "" && (
        <Alert className="alert alert-danger" role="alert">
          {errorUser}
        </Alert>
      )}
    </>
  );
};

export default UserPage;

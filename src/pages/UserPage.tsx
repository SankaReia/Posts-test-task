import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useRedux";
import { Spinner } from "react-bootstrap";
import PostItem from "../components/PostItem";
import { getUserPosts } from "../store/reducers/userPostsReducer";
import { useParams } from "react-router-dom";

const UserPage: FC = () => {
  const dispatch = useDispatch();
  const { userPosts } = useTypedSelector((state) => state.userPostsReducer);
  const { isLoadingPost } = useTypedSelector((state) => state.loadReducer);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getUserPosts(id));
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
        <div>
          {userPosts.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </div>
      )}
    </>
  );
};

export default UserPage;

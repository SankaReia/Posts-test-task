import { FC, useEffect, useState } from "react";
import { usePosts } from "../hooks/usePosts";
import PostItem from "../components/PostItem";
import { fetchPosts } from "../store/http";
import PostFilter from "../components/PostFilter";
import { FilterI, PostI } from "../utils/postConsts";
import { Spinner } from "react-bootstrap";

const PostsPage: FC = () => {
  const [posts, setPosts] = useState<PostI[]>([]);
  const [filter, setFilter] = useState<FilterI>({
    sort: "",
    query: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      fetchPosts().then((posts) => setPosts(posts));
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <PostFilter filter={filter} setFilter={setFilter} />

      {isLoading ? (
        <div style={{ textAlign: "center", marginTop: 100 }}>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        sortedAndSearchedPosts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))
      )}
    </>
  );
};

export default PostsPage;

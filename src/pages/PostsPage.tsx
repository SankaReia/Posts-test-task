import { FC, useEffect, useMemo, useState } from "react";
import PostItem from "../components/PostItem";
import { fetchPosts } from "../store/http";
import PostFilter, { FilterI } from "../components/PostFilter";
import { usePosts } from "../hooks/usePosts";
import { PostI } from "../utils/postConsts";

const PostsPage: FC = () => {
  const [posts, setPosts] = useState<PostI[]>([]);
  const [filter, setFilter] = useState<FilterI>({
    sort: "",
    query: "",
  });

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  useEffect(() => {
    fetchPosts().then((posts) => setPosts(posts));
  }, []);

  return (
    <div>
      <PostFilter filter={filter} setFilter={setFilter} />
      {sortedAndSearchedPosts.length ? (
        sortedAndSearchedPosts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))
      ) : (
        <h2 style={{ textAlign: "center", marginTop: 50 }}>Posts not found!</h2>
      )}
    </div>
  );
};

export default PostsPage;

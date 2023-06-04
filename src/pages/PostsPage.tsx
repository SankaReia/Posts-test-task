import { FC, useEffect, useState } from "react";
import { usePosts } from "../hooks/usePosts";
import PostItem from "../components/PostItem";
import { fetchPosts } from "../store/http";
import PostFilter from "../components/PostFilter";
import { FilterI, PostI } from "../utils/postConsts";
import { Pagination, Spinner } from "react-bootstrap";
import { getPageCount, getPagesArray } from "../utils/pages";
import { useFetching } from "../hooks/useFetching";

const PostsPage: FC = () => {
  const [posts, setPosts] = useState<PostI[]>([]);
  const [filter, setFilter] = useState<FilterI>({
    sort: "",
    query: "",
  });

  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  let pagesArr = getPagesArray(totalPages);

  const [getPosts, isLoading, error] = useFetching(
    async (limit: number, page: number) => {
      const response = await fetchPosts(limit, page);
      setPosts(response?.data);
      const totalCount = response?.headers["x-total-count"];
      setTotalPages(getPageCount(totalCount, limit));
    }
  );

  useEffect(() => {
    getPosts(limit, page);
  }, []);

  const changePage = (page: number) => {
    setPage(page);
    getPosts(limit, page);
  };

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
        <div>
          {sortedAndSearchedPosts.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}

          <Pagination
            style={{ marginTop: 20, display: "flex", justifyContent: "center" }}
          >
            {pagesArr.map((page) => (
              <Pagination.Item key={page} onClick={() => changePage(page)}>
                {page}
              </Pagination.Item>
            ))}
          </Pagination>
        </div>
      )}
    </>
  );
};

export default PostsPage;

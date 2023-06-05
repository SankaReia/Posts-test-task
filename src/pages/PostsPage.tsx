import { FC, useEffect, useState } from "react";
import { usePosts } from "../hooks/usePosts";
import PostItem from "../components/PostItem";
import { fetchPosts } from "../api/http";
import PostFilter from "../components/PostFilter";
import { FilterI, PostI } from "../utils/postConsts";
import { Button, Pagination, Spinner } from "react-bootstrap";
import { getPageCount, getPagesArray } from "../utils/pages";
import { useFetching } from "../hooks/useFetching";
import { useTypedSelector } from "../hooks/useRedux";
import { useDispatch } from "react-redux";
import { fetchPostsCreator } from "../store/reducers/postReducer";

const limit = 10;

const PostsPage: FC = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useTypedSelector((state) => state.postReducer);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [filter, setFilter] = useState<FilterI>({
    sort: "",
    query: "",
  });

  const sortedAndSearchedPosts = usePosts(
    posts.data,
    filter.sort,
    filter.query
  );

  const totalCount = posts.headers["x-total-count"];
  let pagesArr = getPagesArray(totalPages);

  useEffect(() => {
    dispatch(fetchPostsCreator({ limit, page }));
    setTotalPages(getPageCount(totalCount, limit));
  }, []);

  const changePage = (page: number) => {
    dispatch(fetchPostsCreator({ limit, page }));
    setPage(page);
  };

  return (
    <>
      <PostFilter filter={filter} setFilter={setFilter} />

      {loading ? (
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

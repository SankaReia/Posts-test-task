import { FC, useEffect, useState } from "react";
import { usePosts } from "../hooks/usePosts";
import PostItem from "../components/PostItem";
import PostFilter from "../components/PostFilter";
import { FilterI } from "../utils/postConsts";
import { Pagination, Spinner } from "react-bootstrap";
import { getPageCount, getPagesArray } from "../utils/pages";
import { useTypedSelector } from "../hooks/useRedux";
import { useDispatch } from "react-redux";
import { gethPosts } from "../store/reducers/postReducer";

const limit = 10;

const PostsPage: FC = () => {
  const dispatch = useDispatch();
  const { posts } = useTypedSelector((state) => state.postReducer);
  const { isLoading } = useTypedSelector((state) => state.loadReducer);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [filter, setFilter] = useState<FilterI>({
    sort: "",
    query: "",
  });

  useEffect(() => {
    dispatch(gethPosts({ limit, page }));
    setTotalPages(getPageCount(totalCount, limit));
  }, []);

  const sortedAndSearchedPosts = usePosts(
    posts.data,
    filter.sort,
    filter.query
  );

  const totalCount = posts.headers["x-total-count"];
  let pagesArr = getPagesArray(totalPages);

  const changePage = (page: number) => {
    dispatch(gethPosts({ limit, page }));
    setPage(page);
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

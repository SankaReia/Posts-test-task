import { FC, useEffect, useState } from "react";
import { usePosts } from "../hooks/usePosts";
import PostItem from "../components/PostItem";
import PostFilter from "../components/PostFilter";
import { FilterI } from "../utils/postConsts";
import { Pagination, Spinner } from "react-bootstrap";
import { getPageCount, getPagesArray } from "../utils/pages";
import { useTypedSelector } from "../hooks/useRedux";
import { useDispatch } from "react-redux";
import { getPosts } from "../store/reducers/postReducer";

const limit = 10;

const PostsPage: FC = () => {
  const dispatch = useDispatch();
  const { posts } = useTypedSelector((state) => state.postReducer);
  const { isLoadingPost } = useTypedSelector((state) => state.loadReducer);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalCount, setTotalCount] = useState(100);
  const [filter, setFilter] = useState<FilterI>({
    sort: "",
    query: "",
  });

  useEffect(() => {
    dispatch(getPosts({ limit, page }));

    setTotalCount(posts.headers["x-total-count"]);
    setTotalPages(getPageCount(totalCount, limit));
  }, []);

  const sortedAndSearchedPosts = usePosts(
    posts.data,
    filter.sort,
    filter.query
  );

  let pagesArr = getPagesArray(totalPages);

  const changePage = (page: number) => {
    dispatch(getPosts({ limit, page }));
    setPage(page);
  };

  return (
    <>
      <PostFilter filter={filter} setFilter={setFilter} />

      {isLoadingPost ? (
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

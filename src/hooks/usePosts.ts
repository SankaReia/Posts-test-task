import { useMemo } from "react";
import { PostI } from "../utils/postConsts";


export const useSortedPosts = (posts: PostI[], sort: string): PostI[] => {
    const sortedPosts = useMemo(() => {
        if (sort) {
          return [...posts].sort((a, b) =>
            a[sort].localeCompare(b[sort])
          );
        }
    
        return posts;
      }, [sort, posts]);

      return sortedPosts
}

export const usePosts = (posts: PostI[], sort: string, query: string):  PostI[] => {
    const sortedPosts = useSortedPosts(posts, sort)

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter((post) =>
          post.title.toLowerCase().includes(query)
        );
      }, [query, sortedPosts]);

      return sortedAndSearchedPosts
}
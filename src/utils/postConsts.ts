export interface PostI {
    [key: string]: string;
    id: string;
    title: string;
    body: string;
    userId: string;
  }

export interface CommentI {
    postId: string;
    id: string;
    name: string;
    email: string;
    body: string;
}


export interface FilterI {
    sort: string;
    query: string;
}
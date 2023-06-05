export enum ActionType {
    GET_POSTS = 'GET_POSTS',
   SET_POSTS = 'SET_POSTS',
   GET_COMMENTS = 'GET_COMMENTS',
   SET_COMMENTS = 'SET_COMMENTS',
   SET_LOADING_POSTS = 'SET_LOADING_POSTS',
   SET_LOADING_COMMENTS = 'SET_LOADING_COMMENTS',
   SET_USER_POSTS = 'SET_USER_POSTS',
   GET_USER = 'GET_USER',
   SET_USER = 'SET_USER',
}

export interface ActionI {
    type: string;
    payload?: any
}
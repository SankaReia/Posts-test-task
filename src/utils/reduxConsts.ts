export enum ActionType {
    GET_POSTS = 'GET_POSTS',
   SET_POSTS = 'SET_POSTS',
   GET_COMMENTS = 'GET_COMMENTS',
   SET_COMMENTS = 'SET_COMMENTS',
   SET_LOADING_POSTS = 'SET_LOADING_POSTS',
   SET_LOADING_COMMENTS = 'SET_LOADING_COMMENTS',
}

export interface ActionI {
    type: string;
    payload?: any
}
export const GET_POSTS = 'GET_POSTS'
export const SET_POSTS = 'SET_POSTS'
export const SET_POSTS_ERROR = 'SET_POSTS_ERROR'
export const SET_LOADING = 'SET_LOADING'

export interface ActionI {
    type: string;
    payload?: any
}
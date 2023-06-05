import { PostI } from "../../utils/postConsts"

export const FETCH_POSTS = 'FETCH_POSTS'
export const SET_POSTS = 'SET_POSTS'
export const FETCH_POSTS_SUCCESS = 'SET_POSTS_SUCCESS'
export const FETCH_POSTS_ERROR = 'SET_POSTS_ERROR'

interface PostStateI {
    posts: {
        data: PostI[],
        headers: any,
    }
    loading: boolean;
    error: null | string
}

interface PostAction {
    type: string;
    payload?: any
}


const initialState: PostStateI = {
    posts: {
        data: [],
        headers: {}
    },
    loading: false,
    error: null

}



export default function postReducer(state = initialState, action: PostAction): PostStateI {
    switch (action.type) {
        
        case SET_POSTS:
            return {...state, posts: action.payload}
        default: 
            return state
}
}


export const setPostsCreator = (payload: any) =>  ({type:SET_POSTS, payload})
export const fetchPostsCreator = (payload: any) =>  ({type:FETCH_POSTS, payload})
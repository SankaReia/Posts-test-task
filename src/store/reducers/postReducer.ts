import { ActionI, GET_POSTS, SET_POSTS } from "../../utils/reduxConsts"
import { PostI } from "../../utils/postConsts"

interface PostStateI {
    posts: {
        data: PostI[],
        headers: any,
    }}

const initialState: PostStateI = {
    posts: {
        data: [],
        headers: {}
    }}

export default function postReducer(state = initialState, action: ActionI): PostStateI {
    switch (action.type) {
        
        case SET_POSTS:
            return {...state, posts: action.payload}
        default: 
            return state
}
}

export const setPosts = (payload: any) =>  ({type:SET_POSTS, payload})
export const gethPosts = (payload: any) =>  ({type:GET_POSTS, payload})
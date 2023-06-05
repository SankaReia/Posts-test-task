import { ActionI,ActionType } from "../../utils/reduxConsts"
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
        
        case ActionType.SET_POSTS:
            return {...state, posts: action.payload}
        default: 
            return state
}
}

export const setPosts = (payload: any) =>  ({type:ActionType.SET_POSTS, payload})
export const getPosts = (payload: any) =>  ({type:ActionType.GET_POSTS, payload})
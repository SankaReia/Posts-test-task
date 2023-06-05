import { ActionI, ActionType } from "../../utils/reduxConsts"
import { PostI } from "../../utils/postConsts"

interface userPostsStateI {
    userPosts: PostI[]
}

const initialState: userPostsStateI = {
    userPosts: []
}

export default function userPostsReducer(state = initialState, action: ActionI): userPostsStateI {
    switch (action.type) {
        
        case ActionType.SET_USER_POSTS:
            return {...state, userPosts: action.payload}
        default: 
            return state
}
}

export const setUserPosts = (payload: any) =>  ({type: ActionType.SET_USER_POSTS, payload})
export const getUserPosts = (payload: any) =>  ({type: ActionType.GET_USER_POSTS, payload})
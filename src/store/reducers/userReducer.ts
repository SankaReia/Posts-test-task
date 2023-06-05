import { ActionI, ActionType } from "../../utils/reduxConsts"
import { PostI, UserI } from "../../utils/postConsts"

interface userStateI {
    user: UserI
    userPosts: PostI[]
}

const initialState: userStateI = {
    user: {},
    userPosts: []
}

export default function userReducer(state = initialState, action: ActionI): userStateI {
    switch (action.type) {
        
        case ActionType.SET_USER_POSTS:
            return {...state, userPosts: action.payload}
        case ActionType.SET_USER:
            return {...state, user: action.payload}
        default: 
            return state
}
}

export const getUser = (payload: string) =>  ({type: ActionType.GET_USER, payload})
export const setUser = (payload: any) =>  ({type: ActionType.SET_USER, payload})
export const setUserPosts = (payload: any) =>  ({type: ActionType.SET_USER_POSTS, payload})

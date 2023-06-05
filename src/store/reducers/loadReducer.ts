import { ActionI, ActionType } from "../../utils/reduxConsts"

interface LoadI {
    isLoadingPost: boolean
    isLoadingComm: boolean
}

const initialState: LoadI = {
    isLoadingPost: false,
    isLoadingComm: false
}

export default function loadReducer (state = initialState, action: ActionI): LoadI {
    switch (action.type) {
        
        case ActionType.SET_LOADING_POSTS:
            return {...state, isLoadingPost: action.payload}
        case ActionType.SET_LOADING_COMMENTS:
            return {...state, isLoadingComm: action.payload}
        default: 
            return state
}
}

export const setLoadingPost = (payload: any) =>  ({type:ActionType.SET_LOADING_POSTS, payload})
export const setLoadingComm = (payload: any) =>  ({type:ActionType.SET_LOADING_COMMENTS, payload})

import { ActionI, ActionType } from "../../utils/reduxConsts"
import { CommentI } from "../../utils/postConsts"

interface CommentStateI {
    comments: CommentI[]
}

const initialState: CommentStateI = {
    comments: []
}

export default function commentReducer(state = initialState, action: ActionI): CommentStateI {
    switch (action.type) {
        
        case ActionType.SET_COMMENTS:
            return {...state, comments: action.payload}
        default: 
            return state
}
}

export const setComments = (payload: any) =>  ({type:ActionType.SET_COMMENTS, payload})
export const getComments = (payload: any) =>  ({type:ActionType.GET_COMMENTS, payload})
import { ActionI, ActionType } from "../../utils/reduxConsts"

interface ErrorI {
errorPost: string
errorUser: string
}

const initialState: ErrorI = {
    errorPost: '',
    errorUser: ''
}

export default function errorReducer (state = initialState, action: ActionI): ErrorI {
    switch (action.type) {
        
        case ActionType.SET_ERROR_POST:
            return {...state, errorPost: action.payload}
        case ActionType.SET_ERROR_USER:
            return {...state, errorUser: action.payload}
        default: 
            return state
}
}

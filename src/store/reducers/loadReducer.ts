import { ActionI, SET_LOADING } from "../../utils/reduxConsts"

interface LoadI {
    isLoading: boolean
}

const initialState: LoadI = {
    isLoading: false
}

export default function loadReducer (state = initialState, action: ActionI): LoadI {
    switch (action.type) {
        
        case SET_LOADING:
            return {...state, isLoading: action.payload}
        default: 
            return state
}
}

export const setLoading = (payload: any) =>  ({type:SET_LOADING, payload})

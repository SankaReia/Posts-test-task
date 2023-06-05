import {createStore, combineReducers, applyMiddleware} from 'redux'
import { rootWatcher } from '../saga'
import createSagaMiddleware from 'redux-saga'

import postReducer from './reducers/postReducer'
import loadReducer from './reducers/loadReducer'
import commentReducer from './reducers/commentReducer'
import userReducer from './reducers/userReducer'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    postReducer,
    commentReducer,
    loadReducer,
    userReducer,
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootWatcher)

export type RootState = ReturnType<typeof rootReducer>

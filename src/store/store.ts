
import {createStore, combineReducers, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'

import postReducer from './reducers/postReducer'
import { rootWatcher } from '../saga'



const sagaMiddleware = createSagaMiddleware()


const rootReducer = combineReducers({
    postReducer,
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootWatcher)

export type RootState = ReturnType<typeof rootReducer>

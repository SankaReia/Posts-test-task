import {put, call } from 'redux-saga/effects'
import { setPosts} from '../store/reducers/postReducer'
import { fetchPosts } from '../api/http'
import * as Eff from 'redux-saga/effects'
import { setLoadingPost } from '../store/reducers/loadReducer';
import { ActionType } from '../utils/reduxConsts';

const takeEvery: any = Eff.takeEvery;

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))


function* getPostWorker (action: any) {

    try {
        yield put (setLoadingPost(true))
        yield delay(500)
        const response: Promise<any> = yield call(fetchPosts, action.payload)
        yield put(setPosts(response))
        yield put (setLoadingPost(false))
        
    } catch (e) {
        yield put({type: ActionType.SET_ERROR_POST, payload: "Error fetching posts"})

    }
}

export function* postWatcher () {
    yield takeEvery(ActionType.GET_POSTS, getPostWorker)
}
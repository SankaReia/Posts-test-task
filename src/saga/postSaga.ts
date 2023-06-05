import {put, call } from 'redux-saga/effects'
import { setPosts} from '../store/reducers/postReducer'
import { fetchPosts } from '../api/http'
import * as Eff from 'redux-saga/effects'
import { setLoading } from '../store/reducers/loadReducer';
import { GET_POSTS } from '../utils/reduxConsts';

const takeEvery: any = Eff.takeEvery;

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))


function* fetchPostWorker (action: any) {
    yield put (setLoading(true))
    yield delay(500)
    const response: Promise<any> = yield call(fetchPosts, action.payload)
    yield put(setPosts(response))
    yield put (setLoading(false))
}

export function* postWatcher () {
    yield takeEvery(GET_POSTS, fetchPostWorker)
}
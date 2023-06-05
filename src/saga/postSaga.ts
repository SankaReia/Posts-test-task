import {put, call } from 'redux-saga/effects'
import { setPostsCreator, FETCH_POSTS } from '../store/reducers/postReducer'
import { fetchPosts } from '../api/http'
import * as Eff from 'redux-saga/effects'

const takeEvery: any = Eff.takeEvery;

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))


function* fetchPostWorker (action: any) {
    // console.log(action.payload)
    // yield delay(500)
    const response: Promise<any> = yield call(fetchPosts, action.payload)
    yield put(setPostsCreator(response))
}

export function* postWatcher () {
    yield takeEvery(FETCH_POSTS, fetchPostWorker)
}
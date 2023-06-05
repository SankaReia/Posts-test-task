import {put, call } from 'redux-saga/effects'
import { setUserPosts} from '../store/reducers/userPostsReducer'
import { fetchUserPosts } from '../api/http'
import * as Eff from 'redux-saga/effects'
import { setLoadingPost } from '../store/reducers/loadReducer';
import { ActionType } from '../utils/reduxConsts';

const takeEvery: any = Eff.takeEvery;

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))


function* getUserPostWorker (action: any) {
    yield put (setLoadingPost(true))
    yield delay(500)
    const response: Promise<any> = yield call(fetchUserPosts, action.payload)
    yield put(setUserPosts(response))
    yield put (setLoadingPost(false))
}

export function* userPostWatcher () {
    yield takeEvery(ActionType.GET_USER_POSTS, getUserPostWorker)
}
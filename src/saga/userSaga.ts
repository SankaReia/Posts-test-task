import {put, call } from 'redux-saga/effects'
import { setUser, setUserPosts} from '../store/reducers/userReducer'
import { fetchUser, fetchUserPosts } from '../api/http'
import * as Eff from 'redux-saga/effects'
import { setLoadingPost } from '../store/reducers/loadReducer';
import { ActionType } from '../utils/reduxConsts';

const takeEvery: any = Eff.takeEvery;

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))


function* getUserWorker (action: any) {
    yield put (setLoadingPost(true))
    yield delay(500)

    const user: Promise<any> = yield call(fetchUser, action.payload)
    yield put(setUser(user))

    const userPosts: Promise<any> = yield call(fetchUserPosts, action.payload)
    yield put(setUserPosts(userPosts))
    yield put (setLoadingPost(false))
}

export function* userWatcher () {
    yield takeEvery(ActionType.GET_USER, getUserWorker)
}
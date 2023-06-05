import {put, call } from 'redux-saga/effects'
import { setComments} from '../store/reducers/commentReducer'
import { fetchComments } from '../api/http'
import * as Eff from 'redux-saga/effects'
import { setLoadingComm } from '../store/reducers/loadReducer'
import { ActionType } from '../utils/reduxConsts';
import { CommentI } from '../utils/postConsts';

const takeEvery: any = Eff.takeEvery;

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))


function* getCommentWorker (action: any) {
    yield put (setLoadingComm(true))
    yield delay(500)
    const data: CommentI[] = yield call(fetchComments, action.payload)
    yield put(setComments(data))
    yield put (setLoadingComm(false))
}

export function* commentWatcher () {
    yield takeEvery(ActionType.GET_COMMENTS, getCommentWorker)
}
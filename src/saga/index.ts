import { all } from "redux-saga/effects"
import { postWatcher } from "./postSaga"
import { commentWatcher } from "./commentSaga"
import { userPostWatcher } from "./userPostSaga"


export function* rootWatcher () {
    yield all([postWatcher(), commentWatcher(), userPostWatcher()])
}
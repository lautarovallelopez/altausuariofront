import {all, takeEvery} from 'redux-saga/effects';
import {
    FETCH_USER_REQUESTED,
    SUBMIT_USER_REQUESTED,
    FETCH_ONE_USER_REQUESTED,
    DELETE_USER_REQUESTED
} from '../actions/user';
import {SAVE_FILE_REQUESTED} from '../actions/file';
import {save} from './file';
import {fetchUser, sumbitUser, fetchOne, deleteOne} from './user';

export default function* root(){
    yield all([
        takeEvery(FETCH_USER_REQUESTED, fetchUser),
        takeEvery(SUBMIT_USER_REQUESTED, sumbitUser),
        takeEvery(FETCH_ONE_USER_REQUESTED, fetchOne),
        takeEvery(DELETE_USER_REQUESTED, deleteOne)
        //takeEvery(SAVE_FILE_REQUESTED, save)
    ]);
}
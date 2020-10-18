import {call, put, select} from 'redux-saga/effects';
import User from '../services/user';
import {
    fetchUserSucceeded,
    submitUserSucceeded,
    fetcheOneUserSucceeded,
    deleteUserSucceeded
} from '../actions/user';



export function* fetchUser({filter}){
    const users = yield call(User.apiCall, filter);
    yield put(fetchUserSucceeded(users));
}

export function* sumbitUser(){
    const {currentUser} = yield select(state=>state.user);
    const {status, data} = yield call(User.apiSave, currentUser);
    yield put(submitUserSucceeded(status,data));
}

export function* fetchOne ({id}){
    const user = yield call(User.apiCallOne, id);
    yield put(fetcheOneUserSucceeded(user));
}

export function* deleteOne({id}){
    yield call(User.apiDelete, id);
    yield put(deleteUserSucceeded());
    yield call(fetchUser, {});
}
import {call, put, select} from 'redux-saga/effects';
import File from '../services/file';
import {saveFileSucceeded} from '../actions/file';
export function* save(){
    const {selectedFile} = yield select(state=>state.file);
    const {id} = yield select(state=>state.user.currentUser);
    const result = yield call(File.saveFile, id, selectedFile);
    yield put(saveFileSucceeded(result));
}
import {combineReducers} from 'redux';
import user from './user.js';
import file from './file';
export default combineReducers({
    user,
    file
});
import {UPDATE_FILE} from '../actions/file';
const initialSate = {
    selectedFiles : new FormData()
}

export default (state=initialSate, action)=>{
    switch(action.type){
        case UPDATE_FILE:
            return {...state};
        default:
            return {...state};
    }
}
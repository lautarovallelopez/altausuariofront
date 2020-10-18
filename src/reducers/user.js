import {
    FETCH_USER_REQUESTED,
    FETCH_USER_SUCCEEDED,
    UPDATE_USER,
    FETCH_ONE_USER_REQUESTED,
    FETCH_ONE_USER_SUCCEEDED
}from '../actions/user';

const initialState = {
    users: [],
    currentUser:{
        name: '',
        surname: '',
        email: '',
        gender: '',
        avatar: '',
        birthdate: ''
    },
    headers: [
        {
            label:'NOMBRE',
            key: 'name'
        },
        {
            label:'APELLIDO',
            key: 'surname'
        },
        {
            label:'EMAIL',
            key: 'email'
        },
        {
            label: 'GENERO',
            key: 'gender'
        },
        {
            label:'AVATAR',
            key: 'avatar'
        },
        {
            label:'CUMPLEAÑOS',
            key: 'birthdate'
        }
    ]
}

export default (state=initialState, action)=>{
    switch(action.type){
        case FETCH_USER_REQUESTED:
            return {...state, users:[], currentUser:initialState.currentUser};
        case FETCH_USER_SUCCEEDED:
            return {...state, users: action.users}
        case UPDATE_USER:
            return {...state, currentUser:action.currentUser};
        case FETCH_ONE_USER_REQUESTED:
            return {...state, currentUser: initialState.currentUser}
        case FETCH_ONE_USER_SUCCEEDED:
            return {...state, currentUser: action.user}
        default:
            return {...state};
    }
}
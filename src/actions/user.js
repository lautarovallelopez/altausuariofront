export const FETCH_USER_REQUESTED = 'FETCH_USER_REQUESTED';
export const FETCH_USER_SUCCEEDED = 'FETCH_USER_SUCCEEDED';

export const fetchUserRequested = () =>({type:FETCH_USER_REQUESTED});
export const fetchUserSucceeded = (users)=>({type:FETCH_USER_SUCCEEDED, users});

export const UPDATE_USER = 'UPDATE_USER';
export const updateUser = (currentUser) => ({type:UPDATE_USER, currentUser});

export const SUBMIT_USER_REQUESTED = 'SUBMIT_USER_REQUESTED';
export const submitUserRequested = ()=>({type:SUBMIT_USER_REQUESTED});

export const SUBMIT_USER_SUCCEEDED = 'SUBMIT_USER_SUCCEEDED';
export const submitUserSucceeded = (status, data) => ({type: SUBMIT_USER_SUCCEEDED, status, data});

export const FETCH_ONE_USER_REQUESTED = 'FETCH_ONE_USER_REQUESTED';
export const fetcheOneUserResquested = id => ({type:FETCH_ONE_USER_REQUESTED, id});

export const FETCH_ONE_USER_SUCCEEDED = 'FETCH_ONE_USER_SUCCEEDED';
export const fetcheOneUserSucceeded = (user) => ({type:FETCH_ONE_USER_SUCCEEDED, user});

export const DELETE_USER_REQUESTED = 'DELETE_USER_REQUESTED';
export const deleteUserRequested = (id)=>({type: DELETE_USER_REQUESTED, id})

export const DELETE_USER_SUCCEEDED = 'DELETE_USER_SUCCEEDED';
export const deleteUserSucceeded = ()=>({type: DELETE_USER_SUCCEEDED})
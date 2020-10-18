export const UPDATE_FILE = 'UPDATE_FILE';
export const updateFile = ()=>({type:UPDATE_FILE});

export const SAVE_FILE_REQUESTED = 'SAVE_FILE_REQUESTED';
export const saveFileRequested = ()=>({type:SAVE_FILE_REQUESTED});

export const SAVE_FILE_SUCCEEDED = 'SAVE_FILE_SUCCEEDED';
export const saveFileSucceeded = (result)=>({type:SAVE_FILE_SUCCEEDED, result});

// ACTION TYPE GET_USER
export const GET_USER = 'GET_USER';

// ACTION CREATOR getUser
export const getUser = () => ({
  type: GET_USER,
});

// ACTION TYPE LOAD_USERS
export const LOAD_USERS = 'LOAD_USERS';

// ACTION CREATOR loadUsers
export const loadUsers = (value) => ({
  type: LOAD_USERS,
  value,
});

// ACTION TYPE SAVE_TRIBE_NAME
export const SAVE_TRIBE_NAME = 'SAVE_TRIBE_NAME';

// ACTION CREATOR saveTribeName
export const saveTribeName = (name) => ({
  type: SAVE_TRIBE_NAME,
  name,
});

// ACTION TYPE POST_TRIBE_NAME
export const POST_TRIBE_NAME = 'POST_TRIBE_NAME';

// ACTION CREATOR postTribeName
export const postTribeName = () => ({
  type: POST_TRIBE_NAME,
});

// ACTION TYPE GET_TRIBES
export const GET_TRIBES = 'GET_TRIBES';

// ACTION CREATOR getTribes
export const getTribes = () => ({
  type: GET_TRIBES,
});

// ACTION TYPE SAVE_TRIBES
export const SAVE_TRIBES = 'SAVE_TRIBES';

// ACTION CREATOR saveTribes
export const saveTribes = (tribes) => ({
  type: SAVE_TRIBES,
  tribes,
});

// ACTION TYPE CLEAN_TRIBE_INPUT
export const CLEAN_TRIBE_INPUT = 'CLEAN_TRIBE_INPUT';

// ACTION CREATOR cleanTribeInput
export const cleanTribeInput = () => ({
  type: CLEAN_TRIBE_INPUT,
});

// ACTION TYPE SAVE_USER_NAME
export const SAVE_USER_NAME = 'SAVE_USER_NAME';

// ACTION CREATOR saveUserName
export const saveUserName = (value) => ({
  type: SAVE_USER_NAME,
  value,
});
// ACTION TYPE SAVE_USER_EMAIL
export const SAVE_USER_EMAIL = 'SAVE_USER_EMAIL';

// ACTION CREATOR saveUserEmail
export const saveUserEmail = (value) => ({
  type: SAVE_USER_EMAIL,
  value,
});
// ACTION TYPE SAVE_USER_PASSWORD
export const SAVE_USER_PASSWORD = 'SAVE_USER_PASSWORD';

// ACTION CREATOR saveUserPassword
export const saveUserPassword = (value) => ({
  type: SAVE_USER_PASSWORD,
  value,
});

// ACTION TYPE SAVE_CURRENT_USER
export const SAVE_CURRENT_USER = 'SAVE_CURRENT_USER';

// ACTION CREATOR saveCurrentUser
export const saveCurrentUser = () => ({
  type: SAVE_CURRENT_USER,
});

// / ACTION TYPE CLEAN_CURRENT_USER
export const CLEAN_CURRENT_USER = 'CLEAN_CURRENT_USER';

// ACTION CREATOR cleanCurrentUser
export const cleanCurrentUser = () => ({
  type: CLEAN_CURRENT_USER,
});



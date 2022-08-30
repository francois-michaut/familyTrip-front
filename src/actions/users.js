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

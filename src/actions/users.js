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

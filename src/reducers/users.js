import {
  LOAD_USERS, SAVE_USER_EMAIL, SAVE_USER_NAME, SAVE_USER_PASSWORD,
} from '../actions/users';

export const initialState = {
  users: '',
  userName:'',
  userEmail: '',
  userPassword: '',
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_USERS:
      return {
        ...state,
        users: action.value,
      };
    case SAVE_USER_NAME:
      return{
        ...state,
        userName: action.value,
      };
    case SAVE_USER_EMAIL:
      return{
        ...state,
        userEmail: action.value,
      } ;
    case SAVE_USER_PASSWORD:
      return{
        ...state,
        userPassword: action.value,
      } ;
    default:
      return state;
  }
}
export default reducer;

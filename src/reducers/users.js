import {
  CLEAN_CURRENT_USER,
  LOAD_USERS,
  SAVE_FORM_USER,
  SAVE_USER_EMAIL,
  SAVE_USER_NAME,
  SAVE_USER_PASSWORD,
} from '../actions/users';

export const initialState = {
  users: '',
  userName: '',
  userEmail: '',
  userPassword: '',
  userNameAccount: '',
  userFirstnameAccount: '',
  userMailAccount: '',
  userPseudoAccount: '',
  userPasswordAccount: '',
  userPasswordVerifyAccount: '',
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_USERS:
      return {
        ...state,
        users: action.value,
      };
    case SAVE_USER_NAME:
      return {
        ...state,
        userName: action.value,
      };
    case SAVE_USER_EMAIL:
      return {
        ...state,
        userEmail: action.value,
      };
    case SAVE_USER_PASSWORD:
      return {
        ...state,
        userPassword: action.value,
      };
    case CLEAN_CURRENT_USER:
      return {
        ...state,
        userEmail: '',
        userName: '',
        userPassword: '',
      };
    case SAVE_FORM_USER:
      return {
        ...state,
        userNameAccount: action.value.userName,
        userFirstnameAccount: action.value.userFirstname,
        userMailAccount: action.value.userMail,
        userPseudoAccount: action.value.userPseudo,
        userPasswordAccount: action.value.userPassword,
      };
    default:
      return state;
  }
}
export default reducer;

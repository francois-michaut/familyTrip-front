import {
  CLEAN_CURRENT_USER,
  LOAD_USERS,
  SAVE_USER_EMAIL,
  SAVE_USER_FIRSTNAME_ACCOUNT,
  SAVE_USER_MAIL_ACCOUNT,
  SAVE_USER_NAME,
  SAVE_USER_NAME_ACCOUNT,
  SAVE_USER_PASSWORD,
  SAVE_USER_PASSWORD_ACCOUNT,
  SAVE_USER_PASSWORD_VERIFY_ACCOUNT,
  SAVE_USER_PSEUDO_ACCOUNT,
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
    case SAVE_USER_NAME_ACCOUNT:
      return {
        ...state,
        userNameAccount: action.value,
      };
    case SAVE_USER_FIRSTNAME_ACCOUNT:
      return {
        ...state,
        userFirstnameAccount: action.value,
      };
    case SAVE_USER_MAIL_ACCOUNT:
      return {
        ...state,
        userMailAccount: action.value,
      };
    case SAVE_USER_PSEUDO_ACCOUNT:
      return {
        ...state,
        userPseudoAccount: action.value,
      };
    case SAVE_USER_PASSWORD_ACCOUNT:
      return {
        ...state,
        userPasswordAccount: action.value,
      };
    case SAVE_USER_PASSWORD_VERIFY_ACCOUNT:
      return {
        ...state,
        userPasswordVerifyAccount: action.value,
      };
    default:
      return state;
  }
}
export default reducer;

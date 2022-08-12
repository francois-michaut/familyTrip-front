import {
  LOAD_USERS,
} from '../actions/users';

export const initialState = {
  users: '',
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_USERS:
      return {
        ...state,
        users: action.value,
      };
    default:
      return state;
  }
}
export default reducer;

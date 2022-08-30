import { SAVE_TRIBES, SAVE_TRIBE_NAME } from '../actions/users';

export const initialState = {
  tribeName: '',
  tribesList: '',
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_TRIBE_NAME:
      return {
        ...state,
        tribeName: action.name,
      };
    case SAVE_TRIBES:
      return {
        ...state,
        tribesList: action.tribes,
      };
    default:
      return state;
  }
}
export default reducer;

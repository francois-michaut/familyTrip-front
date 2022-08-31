import {
  CLEAN_INPUT_FORM_REMEMBER,
  SAVE_DATE_REMEMBER,
  SAVE_LOCATION_REMEMBER,
  SAVE_MEMBERS_REMEMBER,
  SAVE_NAME_REMEMBER,
} from '../actions/remember';

export const initialState = {
  dateRemember: '',
  locationRemember: '',
  membersRemember: '',
  nameRemember: '',
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_DATE_REMEMBER:
      return {
        ...state,
        dateRemember: action.value,
      };
    case SAVE_LOCATION_REMEMBER:
      return {
        ...state,
        locationRemember: action.value,
      };
    case SAVE_MEMBERS_REMEMBER:
      return {
        ...state,
        membersRemember: action.value,
      };
    case SAVE_NAME_REMEMBER:
      return {
        ...state,
        nameRemember: action.value,
      };
    case CLEAN_INPUT_FORM_REMEMBER:
      return {
        ...state,
        dateRemember: '',
        locationRemember: '',
        membersRemember: '',
        nameRemember: '',
      };
    default:
      return state;
  }
}

export default reducer;

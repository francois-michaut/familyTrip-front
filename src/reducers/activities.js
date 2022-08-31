import {
  CLEAN_INPUT_FORM_ACTIVITIES,
  SAVE_DATE_ACTIVITY,
  SAVE_DURATION_ACTIVITY,
  SAVE_HOURLY_ACTIVITY,
  SAVE_LOCATION_ACTIVITY,
  SAVE_MEMBERS_ACTIVITY,
  SAVE_MORE_ACTIVITY,
  SAVE_TYPE_ACTIVITY,
} from '../actions/activity';

export const initialState = {
  typeActivity: '',
  dateActivity: '',
  durationActivity: '',
  hourlyActivity: '',
  locationActivity: '',
  membersActivity: '',
  moreActivity: '',
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_TYPE_ACTIVITY:
      return {
        ...state,
        typeActivity: action.value,
      };
    case SAVE_DATE_ACTIVITY:
      return {
        ...state,
        dateActivity: action.date,
      };
    case SAVE_DURATION_ACTIVITY:
      return {
        ...state,
        durationActivity: action.value,
      };
    case SAVE_HOURLY_ACTIVITY:
      return {
        ...state,
        hourlyActivity: action.value,
      };
    case SAVE_LOCATION_ACTIVITY:
      return {
        ...state,
        locationActivity: action.value,
      };
    case SAVE_MEMBERS_ACTIVITY:
      return {
        ...state,
        membersActivity: action.value,
      };
    case SAVE_MORE_ACTIVITY:
      return {
        ...state,
        moreActivity: action.value,
      };
    case CLEAN_INPUT_FORM_ACTIVITIES:
      return {
        ...state,
        moreActivity: '',
        membersActivity: '',
        locationActivity: '',
        durationActivity: '',
        typeActivity: '',
        dateActivity: '',
        hourlyActivity: '',
      };
    default:
      return state;
  }
}

export default reducer;

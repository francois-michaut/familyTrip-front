import { combineReducers } from 'redux';

import activitiesReducer from './activities';
import usersReducer from './users';

const rootReducer = combineReducers({
  activities: activitiesReducer,
  users: usersReducer,
});

export default rootReducer;

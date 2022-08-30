import { combineReducers } from 'redux';

import activitiesReducer from './activities';
import usersReducer from './users';
import tribeReducer from './tribe';

const rootReducer = combineReducers({
  activities: activitiesReducer,
  users: usersReducer,
  tribe: tribeReducer,
});

export default rootReducer;

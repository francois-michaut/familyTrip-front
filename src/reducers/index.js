import { combineReducers } from 'redux';

import activitiesReducer from './activities';
import usersReducer from './users';
import tribeReducer from './tribe';
import rememberReducer from './remember';
import shoppingListReducer from './shoppingList';

const rootReducer = combineReducers({
  activities: activitiesReducer,
  users: usersReducer,
  tribe: tribeReducer,
  remember: rememberReducer,
  shoppingList: shoppingListReducer,
});

export default rootReducer;

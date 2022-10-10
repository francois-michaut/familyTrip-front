import axios from 'axios';
import { useDispatch } from 'react-redux';
import { POST_ACTIVITY, cleanInputFormActivities } from '../actions/activity';
import { cleanInputFormRemember, POST_REMEMBER } from '../actions/remember';
import { emptyShoppingList, POST_SHOPPING_LIST } from '../actions/shoppingList';

import {
  cleanCurrentUser,
  cleanTribeInput,
  GET_TRIBES,
  GET_USER,
  loadUsers,
  POST_TRIBE_NAME,
  saveTribes,
  SAVE_CURRENT_USER,
} from '../actions/users';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/',
});

// const headerSend = header: "Content-Type: application/json" ;
const apiMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_USER: {
      axiosInstance
        .get('Api/members')
        .then(
          (response) => {
            store.dispatch(loadUsers(response.data));
          },
        )
        .catch(
          (error) => console.log(error),
        );
      next(action);
      break;
    }

    case GET_TRIBES: {
      axiosInstance
        .get('Api/tribes')
        .then(
          (response) => {
            store.dispatch(saveTribes(response.data));
          },
        )
        .catch(
          (error) => console.log(error),
        );
      next(action);
      break;
    }

    case POST_TRIBE_NAME: {
      const state = store.getState();
      const { tribeName } = state.tribe;
      console.log(tribeName);
      axiosInstance
        .post(
          'Api/createTribePost',
          // {
          //   headers: { 'Content-Type': 'application/json' },
          // },
          JSON.stringify({
            tribeName: tribeName,
          }),
        )
        .then((response) => {
          const tribe = response.config.data;
          store.dispatch(cleanTribeInput());
          console.log(tribe);
        })
        .catch((error) => {
          console.log('erreur API');
          console.log(error);
        });
      next(action);
      break;
    }
    case POST_SHOPPING_LIST: {
      const state = store.getState();
      const ingredientArray = state.shoppingList;
      console.log(ingredientArray);
      axiosInstance
        .post(
          'Api/createShoppingListPost',
          JSON.stringify({
            list: ingredientArray,
          }),
        )
        .then((response) => {
          console.log(response.config.data);
          store.dispatch(emptyShoppingList());
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case POST_ACTIVITY: {
      const state = store.getState();
      const {
        typeActivity,
        dateActivity,
        durationActivity,
        hourlyActivity,
        locationActivity,
        membersActivity,
        moreActivity,
      } = state.activities;
      axiosInstance
        .post(
          'Api/createActivityPost',
          JSON.stringify({
            typeActivity: typeActivity,
            dateActivity: dateActivity,
            durationActivity: durationActivity,
            hourlyActivity: hourlyActivity,
            locationActivity: locationActivity,
            membersActivity: membersActivity,
            moreActivity: moreActivity,
          }),
        )
        .then((response) => {
          console.log(response.config.data);
          store.dispatch(cleanInputFormActivities());
        })
        .catch(() => {
          console.log('erreur Api');
        });
      next(action);
      break;
    }
    case SAVE_CURRENT_USER: {
      const state = store.getState();
      const { userName, userEmail, userPassword } = state.users;
      console.log(userName, userEmail, userPassword);
      axiosInstance
        .post(
          'Api/userPost',
          JSON.stringify({
            userName: userName,
            userEmail: userEmail,
            userPassword: userPassword,
          }),
        )
        .then((response) => {
          console.log(response.config.data);
          store.dispatch(cleanCurrentUser());
        })
        .catch(() => {
          console.log('erreur API');
        });
      next(action);
      break;
    }
    case POST_REMEMBER: {
      const state = store.getState();
      const {
        dateRemember,
        locationRemember,
        membersRemember,
        nameRemember,
      } = state.remember;
      console.log(dateRemember);
      axiosInstance
        .post(
          'Api/createRememberPost',
          JSON.stringify({
            locationRemember: locationRemember,
            dateRemember: dateRemember,
            membersRemember: membersRemember,
            nameRemember: nameRemember,
          }),
        )
        .then((response) => {
          console.log(response.config);
          store.dispatch(cleanInputFormRemember());
        })
        .catch(() => {
          console.log('erreur Api');
        });
      next(action);
      break;
    }
    default: next(action);
  }
};

export default apiMiddleware;

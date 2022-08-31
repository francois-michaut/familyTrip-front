import axios from 'axios';
import { POST_ACTIVITY, cleanInputFormActivities } from '../actions/activity';
import { cleanInputFormRemember, POST_REMEMBER } from '../actions/remember';

import {
  GET_TRIBES,
  GET_USER,
  loadUsers,
  POST_TRIBE_NAME,
  saveTribes,
} from '../actions/users';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/',
});

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
          {
            tribeName: tribeName,
          },
        )
        .then((response) => {
          const tribe = response.config.data;

          console.log(tribe);
        })
        .catch(() => {
          console.log('erreur API');
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
          {
            typeActivity: typeActivity,
            dateActivity: dateActivity,
            durationActivity: durationActivity,
            hourlyActivity: hourlyActivity,
            locationActivity: locationActivity,
            membersActivity: membersActivity,
            moreActivity: moreActivity,
          },
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
    case POST_REMEMBER: {
      const state = store.getState();
      const {
        dateRemember,
        locationRemember,
        membersRemember,
        storiesRemember,
      } = state.activities;
      axiosInstance
        .post(
          'Api/createRememberPost',
          {
            dateRemember: dateRemember,
            locationRemember: locationRemember,
            membersRemember: membersRemember,
            storiesRemember: storiesRemember,
          },
        )
        .then((response) => {
          console.log(response.config.data);
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

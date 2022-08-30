import axios from 'axios';

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
          // {
          //   'Content-Type': 'application/json',
          // },
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
    default: next(action);
  }
};

export default apiMiddleware;

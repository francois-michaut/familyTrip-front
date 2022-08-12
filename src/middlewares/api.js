import axios from 'axios';

import {
  GET_USER,
  loadUsers,
} from '../actions/users';

const axiosInstance = axios.create({
  baseURL: 'http://localhost/Family-Trip/familyTrip-back/user',
});

const apiMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_USER: {
      axiosInstance
        .get('roadworks')
        .then(
          (response) => {
            console.log(response.data);
            store.dispatch(loadUsers(response.data));
          },
        )
        .catch(
          () => console.log('erreur api'),
        );
      next(action);
      break;
    }
    default: next(action);
  }
};

export default apiMiddleware;

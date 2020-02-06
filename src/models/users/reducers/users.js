import { LOGOUT, SET_USER_NAME, SET_USER } from 'models/constants/index';

const initialState = JSON.parse(localStorage.getItem('testUser')) || {
  userName: 'LogIn',
  users: [],
};

export const users = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGOUT:
      return {
        ...state,
        userName: 'LogIn',
        users: [],
      };

    case SET_USER_NAME:
      return {
        ...state,
        userName: payload.name,
      };

    case SET_USER:
      return {
        ...state,
        users: payload.result,
      };

    default:
      return state;
  }
};

export default users;

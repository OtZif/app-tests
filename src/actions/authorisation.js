import {
  LOGOUT,
  ADMIN_LOGIN,
  AUTHORIZED,
  SET_USER_NAME,
} from "../constants/index";

export const logoutAction = () => {
  return {
    type: LOGOUT
  };
};

export const adminAction = () => {
  return {
    type: ADMIN_LOGIN
  };
};

export const authorizedAction = () => {
  return {
    type: AUTHORIZED
  };
};

export const setUserNameAction = name => {
  return {
    type: SET_USER_NAME,
    name: name
  };
};
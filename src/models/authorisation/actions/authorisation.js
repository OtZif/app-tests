import {
  LOGOUT,
  ADMIN_LOGIN,
  AUTHORIZED,
  SET_USER_NAME
} from "constants/index";

export const logoutAction = () => ({ type: LOGOUT });

export const adminAction = () => ({ type: ADMIN_LOGIN });

export const authorizedAction = () => ({ type: AUTHORIZED });

export const setUserNameAction = name => {
  return {
    type: SET_USER_NAME,
    name: name
  };
};

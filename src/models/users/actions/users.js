import { FETCH_USER, SET_USER } from "constants/index";

export const fetchUserAction = (login, pass) => {
  return {
    type: FETCH_USER,
    login,
    pass
  };
};

export const setUserAction = result => {
  return {
    type: SET_USER,
    result
  };
};

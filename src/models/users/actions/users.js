import { FETCH_USER, SET_USER, SET_USER_NAME } from "models/constants/index";

export const fetchUserAction = (login, pass) => ({
  type: FETCH_USER,
  login,
  pass
});

export const setUserAction = result => ({
  type: SET_USER,
  result
});

export const setUserNameAction = name => ({ type: SET_USER_NAME, name });

import { LOGOUT, SET_USER_NAME, SET_USER } from "../constants/index";

const initialState = JSON.parse(localStorage.getItem("testUser")) || {
  userName: "LogIn",
  users: []
};

export const users = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
        userName: "LogIn",
        users: []
      };

    case SET_USER_NAME:
      return {
        ...state,
        userName: action.name
      };

    case SET_USER:
      return {
        ...state,
        users: action.result
      };

    default:
      return state;
  }
};

export default users;

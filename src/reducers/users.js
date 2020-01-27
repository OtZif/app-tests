import { LOGOUT, SET_USER_NAME } from "../constants/index";

const initialState = {
  userName: "LogIn",
  users: [
    {
      name: "Капитан Админ",
      login: "admin",
      pass: "admin"
    },
    {
      name: "Вася Пупкин",
      login: "user",
      pass: "userpass"
    },
    {
      name: "Валера Долгий",
      login: "user",
      pass: "user"
    }
  ]
};

export const users = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
        userName: "LogIn"
      };

    case SET_USER_NAME:
      return {
        ...state,
        userName: action.name
      };

    default:
      return state;
  }
};

export default users;

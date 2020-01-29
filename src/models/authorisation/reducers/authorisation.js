import {
  CLOSE_MODAL,
  OPEN_MODAL_TO_LOGIN,
  LOGOUT,
  ADMIN_LOGIN,
  AUTHORIZED
} from "constants/index";

const initialState = JSON.parse(localStorage.getItem("testAuthorisation")) || {
  isAdmin: false,
  isAuthorized: false,
  autorisation: false
};

export const authorisation = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL_TO_LOGIN:
      return {
        ...state,
        autorisation: true
      };

    case CLOSE_MODAL:
      return {
        ...state,
        autorisation: false
      };

    case LOGOUT:
      return {
        ...state,
        isAdmin: false,
        isAuthorized: false
      };

    case ADMIN_LOGIN:
      return {
        ...state,
        isAdmin: true
      };

    case AUTHORIZED:
      return {
        ...state,
        isAuthorized: true
      };

    default:
      return state;
  }
};

export default authorisation;

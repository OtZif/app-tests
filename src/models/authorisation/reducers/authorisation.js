import { LOGOUT, ADMIN_LOGED_IN, IS_AUTHORIZED } from "models/constants/index";

const initialState = JSON.parse(localStorage.getItem("testAuthorisation")) || {
  isAdmin: false,
  isAuthorized: false,
};

export const authorisation = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
        isAdmin: false,
        isAuthorized: false
      };

    case ADMIN_LOGED_IN:
      return {
        ...state,
        isAdmin: true
      };

    case IS_AUTHORIZED:
      return {
        ...state,
        isAuthorized: true
      };

    default:
      return state;
  }
};

export default authorisation;

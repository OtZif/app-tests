import {
  LOGOUT,
  ADMIN_LOGED_IN,
  IS_AUTHORIZED,
} from "models/constants/index";

export const logoutAction = () => ({ type: LOGOUT });

export const adminAction = () => ({ type: ADMIN_LOGED_IN });

export const authorizedAction = () => ({ type: IS_AUTHORIZED });
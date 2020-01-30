import rootSelector from "models/selectors/root";
import { createSelector } from "reselect";

export const usersRootSelector = createSelector(
  rootSelector,
  ({ users }) => users
);

export const userNameSelector = createSelector(
  usersRootSelector,
  ({ userName }) => userName
);

export const userSelector = createSelector(
  usersRootSelector,
  ({ users }) => users
);

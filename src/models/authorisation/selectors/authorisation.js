import rootSelector from "selectors/root";
import { createSelector } from "reselect";

export const authorisationRootSelector = createSelector(
  rootSelector,
  ({ authorisation }) => authorisation
);

export const isAdminSelector = createSelector(
  authorisationRootSelector,
  ({ isAdmin }) => isAdmin
);

export const autorisationSelector = createSelector(
  authorisationRootSelector,
  ({ autorisation }) => autorisation
);

export const isAuthorizedSelector = createSelector(
  authorisationRootSelector,
  ({ isAuthorized }) => isAuthorized
);

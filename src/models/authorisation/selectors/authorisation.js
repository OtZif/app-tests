import rootSelector from "models/selectors/root";
import { createSelector } from "reselect";

export const authorisationRootSelector = createSelector(
  rootSelector,
  ({ authorisation }) => authorisation
);

export const isAdminSelector = createSelector(
  authorisationRootSelector,
  ({ isAdmin }) => isAdmin
);

export const isAutorisationSelector = createSelector(
  authorisationRootSelector,
  ({ isAutorisation }) => isAutorisation
);

export const isAuthorizedSelector = createSelector(
  authorisationRootSelector,
  ({ isAuthorized }) => isAuthorized
);

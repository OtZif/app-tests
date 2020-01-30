import rootSelector from "models/selectors/root";
import { createSelector } from "reselect";

export const modalRootSelector = createSelector(
  rootSelector,
  ({ modal }) => modal
);

export const isModalSelector = createSelector(
  modalRootSelector,
  ({ isModal }) => isModal
);

export const modalTypeSelector = createSelector(
  modalRootSelector,
  ({ modalType }) => modalType
);

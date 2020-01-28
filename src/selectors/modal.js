import rootSelector from "./root";
import { createSelector } from "reselect";

export const modalRootSelector = createSelector(
  rootSelector,
  ({ modal }) => modal
);

export const isModalSelector = createSelector(
  modalRootSelector,
  ({ isModal }) => isModal
);

export const isModalAddQuestionSelector = createSelector(
  modalRootSelector,
  ({ isModalAddQuestion }) => isModalAddQuestion
);

export const isCalculationSelector = createSelector(
  modalRootSelector,
  ({isCalculation}) => isCalculation
)

export const isRemovingSelector = createSelector(
  modalRootSelector,
  ({isRemoving}) => isRemoving
)
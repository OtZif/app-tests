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

export const modalAddQuestionSelector = createSelector(
  modalRootSelector,
  ({ modalAddQuestion }) => modalAddQuestion
);

export const isCalculationSelector = createSelector(
  modalRootSelector,
  ({isCalculation}) => isCalculation
)
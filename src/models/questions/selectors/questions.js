import rootSelector from 'models/selectors/root';
import { createSelector } from 'reselect';

export const questionsRootSelector = createSelector(
  rootSelector,
  ({ questions }) => questions,
);

export const questionsSelector = createSelector(
  questionsRootSelector,
  ({ questions }) => questions,
);

export const isQuestionEditSelector = createSelector(
  questionsRootSelector,
  ({ isQuestionEdit }) => isQuestionEdit,
);

export const currentEditSelector = createSelector(
  questionsRootSelector,
  ({ currentEdit }) => currentEdit,
);

export const questionIdSelector = createSelector(
  questionsRootSelector,
  ({ questionId }) => questionId,
);

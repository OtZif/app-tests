import rootSelector from 'models/selectors/root';
import { createSelector } from 'reselect';

export const testsRootSelector = createSelector(
  rootSelector,
  ({ tests }) => tests,
);

export const testsSelector = createSelector(
  testsRootSelector,
  ({ tests }) => tests,
);


export const idTestSelector = createSelector(
  testsRootSelector,
  ({ idTest }) => idTest,
);

export const isTestingSelector = createSelector(
  testsRootSelector,
  ({ isTesting }) => isTesting,
);

export const testResultSelector = createSelector(
  testsRootSelector,
  ({ testResult }) => testResult,
);

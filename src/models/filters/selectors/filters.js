import rootSelector from "models/selectors/root";
import { createSelector } from "reselect";

import { testsSelector } from "models/tests/selectors/tests";

export const filtersRootSelector = createSelector(
  rootSelector,
  ({ filters }) => filters
);

export const searchLineTextSelector = createSelector(
  filtersRootSelector,
  ({ searchLineText }) => searchLineText
);

export const isFilteredSelector = createSelector(
  testsSelector,
  searchLineTextSelector,
  (tests, track) =>
    tests.filter(el => el.testTitle.toLowerCase().includes(track.toLowerCase()))
);

export const filterSelector = createSelector(
  filtersRootSelector,
  ({ isFiltered }) => isFiltered
);

import rootSelector from "models/selectors/root";
import { createSelector } from "reselect";

import { testsSelector } from "models/tests/selectors/tests";

export const filtersRootSelector = createSelector(
  rootSelector,
  ({ filters }) => filters,
);

export const searchLineTextSelector = createSelector(
  filtersRootSelector,
  ({ searchLineText }) => searchLineText,
);

export const filterSelector = createSelector(
  filtersRootSelector,
  ({ isFiltered }) => isFiltered,
);

export const isFilteredSelector = createSelector(
  testsSelector,
  searchLineTextSelector,
  filterSelector,
  (tests, track, filk) =>
    [...tests]
      .filter((el) => el.testTitle.toLowerCase().includes(track.toLowerCase()))
      // eslint-disable-next-line array-callback-return
      .sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        if (filk && tests.length > 1) {
          return dateB - dateA;
        }
      }),
);

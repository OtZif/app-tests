import rootSelector from "./root";
import { createSelector } from "reselect";

import { testsSelector } from "./tests";

export const filtersRootSelector = createSelector(
  rootSelector,
  ({ filters }) => filters
);

export const filterTrackSelector = createSelector(
  filtersRootSelector,
  ({ filterTrack }) => filterTrack
);

export const isFilteredSelector = createSelector(
  testsSelector,
  filterTrackSelector,
  (tests, track) =>
    tests.filter(el => el.testTitle.toLowerCase().includes(track.toLowerCase()))
);

export const filterSelector = createSelector(
  filtersRootSelector,
  ({ isFiltered }) => isFiltered
);

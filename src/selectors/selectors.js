import rootSelector from './root';
import { createSelector } from 'reselect';

export const tasksRootSelector = createSelector(
  rootSelector,
  ({ tests }) => tests
);

export const authorizedSelector = createSelector(
  rootSelector,
  ({authorized}) => authorized
)

export const userNameSelector = createSelector(
  rootSelector,
  ({userName}) => userName
)

export const filterTrackSelector = createSelector(
  rootSelector,
  ({filterTrack}) => filterTrack
)
export const testsFilteredSelector = createSelector(
  tasksRootSelector,
  filterTrackSelector,
  (item, track) => item.filter(el => el.testTitle.toLowerCase().includes(track.toLowerCase()))
);



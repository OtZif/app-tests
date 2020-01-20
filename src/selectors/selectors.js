import rootSelector from "./root";
import { createSelector } from "reselect";

export const tasksRootSelector = createSelector(
  rootSelector,
  ({ tests }) => tests
);

export const authorizedSelector = createSelector(
  rootSelector,
  ({ authorized }) => authorized
);

export const userNameSelector = createSelector(
  rootSelector,
  ({ userName }) => userName
);

export const filterTrackSelector = createSelector(
  rootSelector,
  ({ filterTrack }) => filterTrack
);

export const testsFilteredSelector = createSelector(
  tasksRootSelector,
  filterTrackSelector,
  (item, track) =>
    item.filter(el => el.testTitle.toLowerCase().includes(track.toLowerCase()))
);

export const adminSelector = createSelector(rootSelector, ({ admin }) => admin);

export const modalSelector = createSelector(rootSelector, ({ modal }) => modal);

export const autorisationSelector = createSelector(
  rootSelector,
  ({ autorisation }) => autorisation
);

export const addTitleSelector = createSelector(
  rootSelector,
  ({ addTitle }) => addTitle
);

export const userSelector = createSelector(rootSelector, ({ users }) => users);

export const filterSelector = createSelector(
  rootSelector,
  ({ filter }) => filter
);

export const modalAddQuestionSelector = createSelector(
  rootSelector,
  ({ modalAddQuestion }) => modalAddQuestion
);

export const idTestSelector = createSelector(
  rootSelector,
  ({ idTest }) => idTest
);

export const currentEditSelector = createSelector(
  rootSelector,
  ({ currentEdit }) => currentEdit
);

export const questionEditSelector = createSelector(
  rootSelector,
  ({ questionEdit }) => questionEdit
);

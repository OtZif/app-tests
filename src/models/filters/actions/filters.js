import {
  SORT_BY_DATE,
  SEARCH_TEST,
  RESET_FILTER_TRACK
} from "constants/index";

export const sortByDateAction = () => ({ type: SORT_BY_DATE });

export const searchTestAction = text => {
  return {
    type: SEARCH_TEST,
    text
  };
};

export const resetFilterTrackAction = () => ({ type: RESET_FILTER_TRACK });

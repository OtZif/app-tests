import {
  SORT_BY_DATE,
  SEARCH_TEST,
  RESET_FILTER_TRACK,
} from "../constants/index";

export const sortByDateAction = () => {
  return {
    type: SORT_BY_DATE
  };
};

export const searchTestAction = text => {
  return {
    type: SEARCH_TEST,
    text
  };
};

export const resetFilterTrackAction = () => {
  return {
    type: RESET_FILTER_TRACK
  };
};
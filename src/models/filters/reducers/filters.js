import {
  SORT_BY_DATE,
  SEARCH_TEST,
  RESET_FILTER_TRACK
} from "constants/index";

const initialState = {
  isFiltered: false,
  filterTrack: ""
};

export const filters = (state = initialState, action) => {
  switch (action.type) {
    case SORT_BY_DATE:
      return {
        ...state,
        isFiltered: !state.isFiltered
      };

    case SEARCH_TEST:
      return {
        ...state,
        filterTrack: action.text
      };

    case RESET_FILTER_TRACK:
      return {
        ...state,
        filterTrack: ""
      };

    default:
      return state;
  }
};

export default filters;

import {
  SORT_BY_DATE,
  SEARCH_TEST,
  RESET_FILTER_TRACK
} from "models/constants/index";

const initialState = {
  isFiltered: false,
  searchLineText: ""
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
        searchLineText: action.text
      };

    case RESET_FILTER_TRACK:
      return {
        ...state,
        searchLineText: ""
      };

    default:
      return state;
  }
};

export default filters;

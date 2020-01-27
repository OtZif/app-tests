import { combineReducers } from "redux";

import tests from "./tests";
import questions from "./questions";
import users from "./users";
import filters from "./filters";
import authorisation from "./authorisation";
import modal from "./modal";

export default combineReducers({
  tests,
  questions,
  users,
  authorisation,
  modal,
  filters
});

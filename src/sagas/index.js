import { all } from "redux-saga/effects";

import tests from "./tests";
import questions from "./questions";
import users from "./users";

export default function* RootSaga() {
  yield all([tests(), questions(), users()]);
}

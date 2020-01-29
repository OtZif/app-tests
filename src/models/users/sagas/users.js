import { takeEvery, call, put, all } from "redux-saga/effects";

import { FETCH_USER } from "constants/index";

import { setUserAction } from "actions/index";

import { fetchUser as fetchUserApi } from "api/index";

export function* fetchUserSaga(action) {
  try {
    const { login, pass } = action;
    const response = yield call(fetchUserApi, login, pass);

    yield put(setUserAction(response.data));
  } catch (err) {
    console.error(err);
  }
}

export default function*() {
  yield all([takeEvery(FETCH_USER, fetchUserSaga)]);
}

import { takeLatest, call, put, all } from "redux-saga/effects";

import { FETCH_USER } from "models/constants/index";

import { setUserAction } from "models/actions/index";

import { fetchUser as fetchUserApi } from "api/index";

export function* fetchUserSaga(action) {
  try {
    const { login, pass } = action.payload;
    const response = yield call(fetchUserApi, login, pass);

    yield put(setUserAction(response.data));
  } catch (err) {
    console.error(err);
  }
}

export default function*() {
  yield all([takeLatest(FETCH_USER, fetchUserSaga)]);
}

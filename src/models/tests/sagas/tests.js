import { takeLatest, call, put, all, select } from "redux-saga/effects";

import {
  FETCH_TESTS,
  ADD_TEST,
  REMOVE_TEST,
  SAVE_TEST_NAME
} from "models/constants/index";

import {
  setTestsAction,
  addTestSuccsessAction,
  removeTestSuccsessAction,
  saveTestNameSuccsessAction
} from "models/actions/index";

import {
  fetchTests as fetchTestsApi,
  addTest as addTestApi,
  removeTest as removeTestApi,
  editTestName as editTestNameApi
} from "api/index";

import { testsSelector } from "models/selectors/index";

export function* fetchTestsSaga() {
  try {
    const response = yield call(fetchTestsApi);

    yield put(setTestsAction(response.data));
  } catch (err) {
    console.error(err);
  }
}

export function* addNewTestSaga(action) {
  try {
    const { title } = action.payload;
    const newDate = new Date();
    const response = yield call(addTestApi, newDate, title);
    yield put(addTestSuccsessAction(response));
  } catch (err) {
    console.error(err);
  }
}

export function* removeTestSaga(action) {
  try {
    const { id } = action.payload;
    yield call(removeTestApi, id);
    yield put(removeTestSuccsessAction(id));
  } catch (err) {
    console.error(err);
  }
}

export function* editTestNameSaga(action) {
  try {
    const { id, title } = action.payload;
    const tests = yield select(testsSelector);
    const current = yield tests.find(el => el.id === id);
    const { date, questions } = current;

    yield call(editTestNameApi, id, title, date, questions);
    yield put(saveTestNameSuccsessAction(id, title));
  } catch (err) {
    console.error(err);
  }
}

export default function*() {
  yield all([
    takeLatest(FETCH_TESTS, fetchTestsSaga),
    takeLatest(ADD_TEST, addNewTestSaga),
    takeLatest(REMOVE_TEST, removeTestSaga),
    takeLatest(SAVE_TEST_NAME, editTestNameSaga)
  ]);
}

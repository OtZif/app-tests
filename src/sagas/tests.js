import { takeEvery, call, put, all, select } from "redux-saga/effects";

import {
  FETCH_TESTS,
  ADD_TEST,
  REMOVE_TEST,
  SAVE_TEST_NAME_SUCCSESS,
} from "../constants/index";

import {
  setTestsAction,
  addTestSuccsessAction,
  removeTestSuccsessAction,
  saveTestNameSuccsessAction,
} from "../actions/index";

import {
  fetchTests as fetchTestsApi,
  addTest as addTestApi,
  removeTest as removeTestApi,
  editTestName as editTestNameApi,
} from "../api/index";

import { testsSelector } from "../selectors/index";

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
    const newId = Date.now();
    const newDate = new Date();
    const questions = [];
    yield call(addTestApi, newId, newDate, action.title, questions);
    yield put(addTestSuccsessAction(newId, newDate, action.title, questions));
  } catch (err) {
    console.error(err);
  }
}

export function* removeTestSaga(action) {
  try {
    yield call(removeTestApi, action.id);
    yield put(removeTestSuccsessAction(action.id));
  } catch (err) {
    console.error(err);
  }
}

export function* editTestNameSaga(action) {
  try {
    const { id, title } = action;
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
    takeEvery(FETCH_TESTS, fetchTestsSaga),
    takeEvery(ADD_TEST, addNewTestSaga),
    takeEvery(REMOVE_TEST, removeTestSaga),
    takeEvery(SAVE_TEST_NAME_SUCCSESS, editTestNameSaga),
  ]);
}
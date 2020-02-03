import { takeLatest, call, put, all } from "redux-saga/effects";

import {
  FETCH_TEST_QUESTIONS,
  REMOVE_QUESTION,
  ADD_QUESTION,
  EDIT_QUESTON_SERV
} from "models/constants/index";

import {
  addQuestionSuccsessAction,
  setTestQuestionsAction,
  removeQuestionSuccsessAction,
  saveEditedQuestionAction
} from "models/actions/index";

import {
  removeQuestion as removeQuestionApi,
  addNewQuestion as addNewQuestionApi,
  fetchTestQuestion as fetchTestQuestionApi,
  edditQuestion as edditQuestionApi
} from "api/index";

export function* fetchTestQuestionSaga(action) {
  try {
    const { id } = action.payload;
    const response = yield call(fetchTestQuestionApi, id);

    yield put(setTestQuestionsAction(response.data));
  } catch (err) {
    console.error(err);
  }
}

export function* removeQuestionSaga(action) {
  try {
    const { testId, questionId } = action.payload;
    yield call(removeQuestionApi, testId, questionId);
    yield put(removeQuestionSuccsessAction(questionId));
  } catch (err) {
    console.error(err);
  }
}

export function* editQuestionSaga(action) {
  try {
    const { id, questionId, question, answerType, answers } = action.payload;
    yield call(edditQuestionApi, id, questionId, question, answerType, answers);
    yield put(
      saveEditedQuestionAction(questionId, question, answerType, answers)
    );
  } catch (err) {
    console.error(err);
  }
}

export function* addNewQuestionSaga(action) {
  try {
    const { payload } = action;
    const response = yield call(addNewQuestionApi, payload);
    yield put(addQuestionSuccsessAction(response.data));
  } catch (err) {
    console.error(err);
  }
}

export default function*() {
  yield all([
    takeLatest(FETCH_TEST_QUESTIONS, fetchTestQuestionSaga),
    takeLatest(REMOVE_QUESTION, removeQuestionSaga),
    takeLatest(EDIT_QUESTON_SERV, editQuestionSaga),
    takeLatest(ADD_QUESTION, addNewQuestionSaga)
  ]);
}

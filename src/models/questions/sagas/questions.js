import { takeEvery, call, put, all } from "redux-saga/effects";

import {
  FETCH_TEST_QUESTIONS,
  REMOVE_QUESTION,
  ADD_QUESTION,
  EDIT_QUESTON_SERV
} from "constants/index";

import {
  addQuestionSuccsessAction,
  setTestQuestionsAction,
  removeQuestionSuccsessAction,
  saveEditedQuestionAction
} from "actions/index";

import {
  removeQuestion as removeQuestionApi,
  addNewQuestion as addNewQuestionApi,
  fetchTestQuestion as fetchTestQuestionApi,
  edditQuestion as edditQuestionApi
} from "api/index";

export function* fetchTestQuestionSaga(action) {
  try {
    const response = yield call(fetchTestQuestionApi, action.id);

    yield put(setTestQuestionsAction(response.data));
  } catch (err) {
    console.error(err);
  }
}

export function* removeQuestionSaga(action) {
  try {
    yield call(removeQuestionApi, action.testId, action.questionId);
    yield put(removeQuestionSuccsessAction(action.testId, action.questionId));
  } catch (err) {
    console.error(err);
  }
}

export function* editQuestionSaga(action) {
  try {
    const { id, questionId, question, answerType, answers } = action;
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
    const { testId, question, answerType, answers } = action;
    const newId = Date.now();

    yield call(addNewQuestionApi, testId, newId, question, answerType, answers);
    yield put(
      addQuestionSuccsessAction(testId, newId, question, answerType, answers)
    );
  } catch (err) {
    console.error(err);
  }
}



export default function*() {
  yield all([
    takeEvery(FETCH_TEST_QUESTIONS, fetchTestQuestionSaga),
    takeEvery(REMOVE_QUESTION, removeQuestionSaga),
    takeEvery(EDIT_QUESTON_SERV, editQuestionSaga),
    takeEvery(ADD_QUESTION, addNewQuestionSaga)
  ]);
}
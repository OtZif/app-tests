import {
  ADD_TEST,
  ADD_TEST_SUCCSESS,
  REMOVE_TEST_SUCCSESS,
  EDIT_TEST_NAME,
  SAVE_TEST_NAME,
  FETCH_TESTS,
  SET_TESTS,
  REMOVE_TEST,
  SAVE_TEST_NAME_SUCCSESS,
  START_TEST,
  TEST_RESULT
} from "models/constants/index";

export const fetchTestsAction = () => ({ type: FETCH_TESTS });

export const setTestsAction = tests => ({
  type: SET_TESTS,
  payload: { tests }
});

export const addTestAction = title => ({
  type: ADD_TEST,
  payload: { title }
});

export const addTestSuccsessAction = (id, date, testTitle) => ({
  type: ADD_TEST_SUCCSESS,
  payload: { id, date, testTitle }
});

export const removeTestAction = id => ({
  type: REMOVE_TEST,
  payload: { id }
});

export const removeTestSuccsessAction = id => ({
  type: REMOVE_TEST_SUCCSESS,
  payload: { id }
});

export const editTestNameAction = (text, id) => ({
  type: EDIT_TEST_NAME,
  payload: { text, id }
});

export const saveTestNameAction = (id, title) => ({
  type: SAVE_TEST_NAME,
  payload: { id, title }
});

export const saveTestNameSuccsessAction = (id, title) => ({
  type: SAVE_TEST_NAME_SUCCSESS,
  payload: { id, title }
});

export const startTestingAction = () => ({ type: START_TEST });

export const testResultAction = result => ({
  type: TEST_RESULT,
  payload: { result }
});

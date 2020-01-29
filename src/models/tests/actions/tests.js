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
  FINISH_TESTING,
  TEST_RESULT
} from "constants/index";

export const fetchTestsAction = () => ({ type: FETCH_TESTS });

export const setTestsAction = tests => {
  return {
    type: SET_TESTS,
    tests
  };
};

export const addTestAction = title => {
  return {
    type: ADD_TEST,
    title
  };
};

export const addTestSuccsessAction = (id, date, testTitle) => {
  return {
    type: ADD_TEST_SUCCSESS,
    id,
    date,
    testTitle
  };
};

export const removeTestAction = id => {
  return {
    type: REMOVE_TEST,
    id
  };
};

export const removeTestSuccsessAction = id => {
  return {
    type: REMOVE_TEST_SUCCSESS,
    id
  };
};

export const editTestNameAction = id => {
  return {
    type: EDIT_TEST_NAME,
    id
  };
};

export const saveTestNameAction = (id, title) => {
  return {
    type: SAVE_TEST_NAME,
    id,
    title
  };
};

export const saveTestNameSuccsessAction = (id, title) => {
  return {
    type: SAVE_TEST_NAME_SUCCSESS,
    id,
    title
  };
};

export const startTestingAction = () => ({ type: START_TEST });

export const finishTestingAction = () => ({ type: FINISH_TESTING });

export const testResultAction = result => {
  return {
    type: TEST_RESULT,
    result
  };
};

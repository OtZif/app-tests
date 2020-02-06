import {
  SET_TESTS,
  REMOVE_TEST_SUCCSESS,
  OPEN_MODAL,
  CLOSE_MODAL,
  ADD_QUESTION_SUCCSESS,
  SAVE_EDITED_QUESTION,
  ADD_TEST_SUCCSESS,
  RESET_FILTER_TRACK,
  START_TEST,
  TEST_RESULT,
  SAVE_TEST_NAME_SUCCSESS,
  REMOVE_QUESTION_SUCCSESS,
  GET_TEST_ID,
} from 'models/constants/index';

const initialState = {
  idTest: -1,
  isTesting: false,
  tests: [],
  testResult: 0,
};

export const tests = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_TESTS:
      return {
        ...state,
        tests: payload.tests,
      };

    case ADD_TEST_SUCCSESS:
      return {
        ...state,
        tests: [
          ...state.tests,
          payload,
        ],
      };

    case REMOVE_TEST_SUCCSESS:
      return {
        ...state,
        tests: state.tests.filter((el) => el.id !== payload.id),
        idTest: -1,
      };

    case SAVE_TEST_NAME_SUCCSESS:
      return {
        ...state,
        tests: state.tests.map((el) => {
          if (el.id === payload.id) {
            return {
              ...el,
              testTitle: payload.title,
            };
          }

          return el;
        }),
      };

    case CLOSE_MODAL:
    case REMOVE_QUESTION_SUCCSESS:
    case ADD_QUESTION_SUCCSESS:
    case SAVE_EDITED_QUESTION:
      return {
        ...state,
        idTest: -1,
        testResult: 0,
      };

    case OPEN_MODAL:
      return {
        ...state,
        idTest: payload.testId,
        isTesting: false,
      };

    case START_TEST:
      return {
        ...state,
        isTesting: true,
      };

    case RESET_FILTER_TRACK:
      return {
        ...state,
        isTesting: false,
        testResult: 0,
        idTest: -1,
      };
    case TEST_RESULT:
      return {
        ...state,
        testResult: payload.result,
      };

    case GET_TEST_ID:
      return {
        ...state,
        idTest: payload.id,
      };

    default:
      return state;
  }
};

export default tests;

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
  REMOVE_QUESTION_SUCCSESS
} from "models/constants/index";

const initialState = {
  idTest: "",
  isTesting: false,
  tests: [],
  testResult: 0
};

export const tests = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case SET_TESTS:
      return {
        ...state,
        tests: action.tests
      };

    case ADD_TEST_SUCCSESS:
      return Object.assign({}, state, {
        tests: [
          ...state.tests,
          {
            id: action.id,
            testTitle: action.testTitle,
            date: action.date
          }
        ]
      });

    case REMOVE_TEST_SUCCSESS:
      return {
        ...state,
        tests: state.tests.filter(el => el.id !== action.id),
        idTest: ""
      };

    case SAVE_TEST_NAME_SUCCSESS:
      return {
        ...state,
        tests: state.tests.map(el => {
          if (el.id === action.id) {
            return {
              ...el,
              testTitle: action.title
            };
          }

          return el;
        })
      };

    case CLOSE_MODAL:
    case REMOVE_QUESTION_SUCCSESS:
    case ADD_QUESTION_SUCCSESS:
    case SAVE_EDITED_QUESTION:
      return {
        ...state,
        idTest: ""
      };

    case OPEN_MODAL:
      const { testId } = payload;
      return {
        ...state,
        idTest: testId,
        isTesting: false
      };

    case START_TEST:
      return {
        ...state,
        isTesting: true
      };

    case RESET_FILTER_TRACK:
      return {
        ...state,
        isTesting: false,
        testResult: 0
      };
    case TEST_RESULT:
      return {
        ...state,
        testResult: action.result
      };

    default:
      return state;
  }
};

export default tests;

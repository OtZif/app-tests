import {
  SET_TESTS,
  REMOVE_TEST_SUCCSESS,
  // EDIT_TEST_NAME,
  CLOSE_MODAL,
  OPEN_MODAL_TO_ADD_TEST,
  OPEN_MODAL_TO_ADD_QUESTION,
  ADD_QUESTION_SUCCSESS,
  SAVE_EDITED_QUESTION,
  ADD_TEST_SUCCSESS,
  RESET_FILTER_TRACK,
  START_TEST,
  FINISH_TESTING,
  TEST_RESULT,
  SAVE_TEST_NAME_SUCCSESS,
  OPEN_CONFIRMATION
} from "constants/index";

const initialState = {
  idTest: "",
  isTesting: false,
  isAddingTitle: false,
  tests: [],
  testResult: 0
};

export const tests = (state = initialState, action) => {
  switch (action.type) {
    case SET_TESTS:
      return {
        ...state,
        tests: action.tests
      };

    case ADD_TEST_SUCCSESS:
      return Object.assign({}, state, {
        isAddingTitle: false,
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
      return {
        ...state,
        isAddingTitle: false,
        idTest: ""
      };

    case OPEN_MODAL_TO_ADD_TEST:
      return {
        ...state,
        isAddingTitle: true
      };

    case OPEN_MODAL_TO_ADD_QUESTION:
      return {
        ...state,
        idTest: action.idTest
      };
    case ADD_QUESTION_SUCCSESS:
    case SAVE_EDITED_QUESTION:
      return {
        ...state,
        idTest: ""
      };

    case START_TEST:
      return {
        ...state,
        isTesting: true
      };

    case FINISH_TESTING:
      return {
        ...state,
        isTesting: false
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

    case OPEN_CONFIRMATION:
      return {
        ...state,
        idTest: action.id
      };

    default:
      return state;
  }
};

export default tests;

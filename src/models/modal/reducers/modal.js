import {
  CLOSE_MODAL,
  OPEN_MODAL_TO_ADD_TEST,
  OPEN_MODAL_TO_LOGIN,
  ADD_QUESTION_SUCCSESS,
  OPEN_MODAL_TO_ADD_QUESTION,
  EDITING_QUESTION,
  SAVE_EDITED_QUESTION,
  ADD_TEST_SUCCSESS,
  FINISH_TESTING,
  OPEN_CONFIRMATION,
  REMOVE_TEST_SUCCSESS,
  REMOVE_QUESTION_SUCCSESS
} from "models/constants/index";

const initialState = {
  isModal: false,
  isCalculation: false,
  isModalAddQuestion: false,
  isRemoving: false
};

export const modal = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TEST_SUCCSESS:
      return {
        ...state,
        isModal: false
      };

    case CLOSE_MODAL:
      return {
        ...state,
        isModal: false,
        isModalAddQuestion: false,
        isCalculation: false,
        isRemoving: false
      };

    case OPEN_MODAL_TO_LOGIN:
    case OPEN_MODAL_TO_ADD_TEST:
      return {
        ...state,
        isModal: true
      };

    case OPEN_MODAL_TO_ADD_QUESTION:
    case EDITING_QUESTION:
      return {
        ...state,
        isModal: true,
        isModalAddQuestion: true
      };

    case ADD_QUESTION_SUCCSESS:
      return {
        ...state,
        isModal: false,
        isModalAddQuestion: false
      };

    case SAVE_EDITED_QUESTION:
      return {
        ...state,
        isModal: false,
        isModalAddQuestion: false
      };

    case FINISH_TESTING:
      return {
        ...state,
        isModal: true,
        isCalculation: true
      };

    case OPEN_CONFIRMATION:
      return {
        ...state,
        isRemoving: true,
        isModal: true
      };

    case REMOVE_TEST_SUCCSESS:
    case REMOVE_QUESTION_SUCCSESS:
      return {
        ...state,
        isRemoving: false,
        isModal: false
      };

    default:
      return state;
  }
};

export default modal;

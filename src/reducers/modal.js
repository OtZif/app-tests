import {
  CLOSE_MODAL,
  OPEN_MODAL_TO_ADD_TEST,
  OPEN_MODAL_TO_LOGIN,
  ADD_QUESTION_SUCCSESS,
  OPEN_MODAL_TO_ADD_QUESTION,
  EDITING_QUESTION,
  SAVE_EDITED_QUESTION,
  ADD_TEST_SUCCSESS,
  FINISH_TESTING
} from "../constants/index";

const initialState = {
  isModal: false,
  isCalculation: false
};

export const modal = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL_TO_LOGIN:
      return {
        ...state,
        isModal: true
      };

    case ADD_TEST_SUCCSESS:
      return {
        ...state,
        isModal: false
      };

    case CLOSE_MODAL:
      return {
        ...state,
        isModal: false,
        modalAddQuestion: false,
        isCalculation: false
      };

    case OPEN_MODAL_TO_ADD_TEST:
      return {
        ...state,
        isModal: true
      };

    case OPEN_MODAL_TO_ADD_QUESTION:
      return {
        ...state,
        isModal: true,
        modalAddQuestion: true
      };

    case ADD_QUESTION_SUCCSESS:
      return {
        ...state,
        isModal: false,
        modalAddQuestion: false
      };

    case EDITING_QUESTION:
      return {
        ...state,
        isModal: true,
        modalAddQuestion: true
      };

    case SAVE_EDITED_QUESTION:
      return {
        ...state,
        isModal: false,
        modalAddQuestion: false
      };

    case FINISH_TESTING:
      return{
        ...state,
        isModal: true,
        isCalculation: true
      }

    default:
      return state;
  }
};

export default modal;

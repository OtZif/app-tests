import {
  OPEN_MODAL,
  CLOSE_MODAL,
  ADD_QUESTION_SUCCSESS,
  EDITING_QUESTION,
  SAVE_EDITED_QUESTION,
  ADD_TEST_SUCCSESS,
  REMOVE_TEST_SUCCSESS,
  REMOVE_QUESTION_SUCCSESS
} from "models/constants/index";

const initialState = {
  isModal: false,
  modalType: ""
};

export const modal = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TEST_SUCCSESS:
    case ADD_QUESTION_SUCCSESS:
    case SAVE_EDITED_QUESTION:
    case REMOVE_TEST_SUCCSESS:
    case REMOVE_QUESTION_SUCCSESS:
      return {
        ...state,
        isModal: false
      };

    case OPEN_MODAL:
    case EDITING_QUESTION:
      return {
        ...state,
        isModal: true,
        modalType: payload.modalType
      };

    case CLOSE_MODAL:
      return {
        ...state,
        modalType: "",
        isModal: false
      };

    default:
      return state;
  }
};

export default modal;

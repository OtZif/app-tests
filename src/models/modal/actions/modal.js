import {
  CLOSE_MODAL,
  OPEN_MODAL_TO_ADD_TEST,
  OPEN_MODAL_TO_LOGIN,
  OPEN_MODAL_TO_ADD_QUESTION,
  OPEN_CONFIRMATION
} from "constants/index";

export const addingNewTestAction = () => ({ type: OPEN_MODAL_TO_ADD_TEST });

export const closeModalAction = () => ({ type: CLOSE_MODAL });

export const loginAction = () => ({ type: OPEN_MODAL_TO_LOGIN });

export const modalAddQuestionAction = idTest => {
  return {
    type: OPEN_MODAL_TO_ADD_QUESTION,
    idTest: idTest
  };
};

export const openConfirmationAction = (name, id, questionId) => {
  return {
    type: OPEN_CONFIRMATION,
    name,
    id,
    questionId
  };
};

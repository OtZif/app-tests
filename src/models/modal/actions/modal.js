import {
  CLOSE_MODAL,
  OPEN_MODAL_TO_ADD_TEST,
  OPEN_MODAL_TO_LOGIN,
  OPEN_MODAL_TO_ADD_QUESTION,
  OPEN_CONFIRMATION
} from "models/constants/index";

export const addingNewTestAction = () => ({ type: OPEN_MODAL_TO_ADD_TEST });

export const closeModalAction = () => ({ type: CLOSE_MODAL });

export const loginAction = () => ({ type: OPEN_MODAL_TO_LOGIN });

export const modalAddQuestionAction = idTest => ({
  type: OPEN_MODAL_TO_ADD_QUESTION,
  idTest
});

export const openConfirmationAction = (name, id, questionId) => ({
  type: OPEN_CONFIRMATION,
  name,
  id,
  questionId
});

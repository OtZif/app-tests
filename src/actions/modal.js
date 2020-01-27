import {
  CLOSE_MODAL,
  OPEN_MODAL_TO_ADD_TEST,
  OPEN_MODAL_TO_LOGIN,
  OPEN_MODAL_TO_ADD_QUESTION,
} from "../constants/index";

export const addingNewTestAction = () => {
  return {
    type: OPEN_MODAL_TO_ADD_TEST
  };
};

export const closeModalAction = () => {
  return {
    type: CLOSE_MODAL
  };
};

export const loginAction = () => {
  return {
    type: OPEN_MODAL_TO_LOGIN
  };
};

export const modalAddQuestionAction = idTest => {
  return {
    type: OPEN_MODAL_TO_ADD_QUESTION,
    idTest: idTest
  };
};
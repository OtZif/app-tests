import {
  OPEN_MODAL,
  CLOSE_MODAL,
} from "models/constants/index";


export const closeModalAction = () => ({ type: CLOSE_MODAL });

export const openModalAction = (modalType, testId, name, questionId) => ({
  type: OPEN_MODAL,
  payload: {modalType, testId, name, questionId}
})
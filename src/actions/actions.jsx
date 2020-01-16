import {
  ADD_QUESTION,
  ADD_TEST,
  DELETE_TEST,
  CLOSE_MODAL,
  ADDING_NEW_TEST,
  LOGIN,
  LOGOUT,
  ADMIN_LOGIN,
  AUTHORIZED,
  SET_USER_NAME,
  DELETE_QUESTION,
  SORT_BY_DATE,
  SEARCH_TEST,
  RESET_FILTER_TRACK,
  MODAL_ADD_QUESTION,
} from "../constants/actionConstants";

export const addTest = testTitle => {
  const id = Date.now();
  const date = new Date();
  return {
    type: ADD_TEST,
    id,
    testTitle,
    date
  };
};
export const addingNewTest = () => {
  return {
    type: ADDING_NEW_TEST
  };
};

export const addQuestionAction = (id, question, answerType, answers) => {
  // console.log('id in new ', answers);
  return {
    type: ADD_QUESTION,
    id,
    question,
    answerType,
    answers
  };
};

export const deleteTest = id => {
  return {
    type: DELETE_TEST,
    id
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};

export const loginAction = () => {
  return {
    type: LOGIN
  };
};

export const logoutAction = () => {
  return {
    type: LOGOUT,
  };
};

export const adminAction = () => {
  return {
    type: ADMIN_LOGIN
  };
};

export const authorizedAction = () => {
  return {
    type: AUTHORIZED,
  };
};

export const setUserNameAction = (name) => {
  return {
    type: SET_USER_NAME,
    name: name,
  };
};

export const deleteQuestionAction = (testId, questionId) => {
  return {
    type: DELETE_QUESTION,
    testId: testId,
    questionId: questionId,
  }
}

export const sortByDateAction = () => {
  return {
    type: SORT_BY_DATE,
  }
}

export const searchTest = text => {
  return {
    type: SEARCH_TEST,
    text
  };
};

export const resetFilterTrackAction =() => {
  return {
    type: RESET_FILTER_TRACK,
  }
}

export const modalAddQuestionAction = (idTest) => {
  return {
    type: MODAL_ADD_QUESTION,
    idTest: idTest
  }
}
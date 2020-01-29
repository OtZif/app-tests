import {
  ADD_QUESTION,
  REMOVE_QUESTION_SUCCSESS,
  REMOVE_QUESTION,
  EDITING_QUESTION,
  SAVE_EDITED_QUESTION,
  ADD_QUESTION_SUCCSESS,
  SET_TEST_QUESTIONS,
  FETCH_TEST_QUESTIONS,
  EDIT_QUESTON_SERV
} from "constants/index";

export const addQuestionAction = (testId, question, answerType, answers) => {
  return {
    type: ADD_QUESTION,
    testId,
    question,
    answerType,
    answers
  };
};

export const addQuestionSuccsessAction = (
  testId,
  newId,
  question,
  answerType,
  answers
) => {
  return {
    type: ADD_QUESTION_SUCCSESS,
    testId,
    id: newId,
    question,
    answerType,
    answers
  };
};
export const removeQuestionAction = (testId, questionId) => {
  return {
    type: REMOVE_QUESTION,
    testId,
    questionId
  };
};

export const removeQuestionSuccsessAction = (testId, questionId) => {
  return {
    type: REMOVE_QUESTION_SUCCSESS,
    testId,
    questionId
  };
};

export const editingQuestionAction = id => {
  return {
    type: EDITING_QUESTION,
    id
  };
};

export const editQuestionsServAction = (
  id,
  questionId,
  question,
  answerType,
  answers
) => {
  return {
    type: EDIT_QUESTON_SERV,
    id,
    questionId,
    question,
    answerType,
    answers
  };
};

export const saveEditedQuestionAction = (id, question, answerType, answers) => {
  return {
    type: SAVE_EDITED_QUESTION,
    id,
    question,
    answerType,
    answers
  };
};

export const fetchTestQuestionAction = id => {
  return {
    type: FETCH_TEST_QUESTIONS,
    id
  };
};

export const setTestQuestionsAction = questions => {
  return {
    type: SET_TEST_QUESTIONS,
    questions
  };
};

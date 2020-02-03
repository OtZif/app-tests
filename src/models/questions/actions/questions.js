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
} from "models/constants/index";

export const addQuestionAction = (testsId, question, answerType, answers) => ({
  type: ADD_QUESTION,
  payload: { testsId, question, answerType, answers }
});

export const addQuestionSuccsessAction = data => ({
  type: ADD_QUESTION_SUCCSESS,
  payload: data
});

export const removeQuestionAction = (testId, questionId) => ({
  type: REMOVE_QUESTION,
  payload: { testId, questionId }
});

export const removeQuestionSuccsessAction = questionId => ({
  type: REMOVE_QUESTION_SUCCSESS,
  payload: { questionId }
});

export const editingQuestionAction = (modalType, id) => ({
  type: EDITING_QUESTION,
  payload: { modalType, id }
});

export const editQuestionsServAction = (
  id,
  questionId,
  question,
  answerType,
  answers
) => ({
  type: EDIT_QUESTON_SERV,
  payload: { id, questionId, question, answerType, answers }
});

export const saveEditedQuestionAction = (
  id,
  question,
  answerType,
  answers
) => ({
  type: SAVE_EDITED_QUESTION,
  payload: { id, question, answerType, answers }
});

export const fetchTestQuestionAction = id => ({
  type: FETCH_TEST_QUESTIONS,
  payload: { id }
});

export const setTestQuestionsAction = questions => ({
  type: SET_TEST_QUESTIONS,
  payload: { questions }
});

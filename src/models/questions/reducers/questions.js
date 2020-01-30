import {
  ADD_QUESTION_SUCCSESS,
  REMOVE_QUESTION_SUCCSESS,
  EDITING_QUESTION,
  SAVE_EDITED_QUESTION,
  SET_TEST_QUESTIONS,
  CLOSE_MODAL,
  RESET_FILTER_TRACK,
  EDIT_TEST_NAME,
  SAVE_TEST_NAME,
  OPEN_MODAL,
  REMOVE_TEST_SUCCSESS
} from "models/constants/index";

const initialState = {
  questions: [],
  isQuestionEdit: false,
  currentEdit: "",
  questionId: ""
};

export const questions = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_TEST_QUESTIONS:
      return {
        ...state,
        questions: payload.questions
      };

    case ADD_QUESTION_SUCCSESS:
      return {
        ...state,
        questions: [...state.questions, payload]
      };

    case REMOVE_QUESTION_SUCCSESS:
      return {
        ...state,
        questions: state.questions.filter(
          elem => elem.id !== payload.questionId
        ),
        questionId: "",
        currentEdit: ""
      };

    case EDITING_QUESTION:
      return {
        ...state,
        isQuestionEdit: true,
        currentEdit: state.questions.filter(
          question => question.id === payload.id
        )[0]
      };

    case SAVE_EDITED_QUESTION:
      return {
        ...state,
        isQuestionEdit: false,
        currentEdit: "",
        questions: state.questions.map(el => {
          if (el.id === payload.id) {
            return {
              ...el,
              question: payload.question,
              answerType: payload.answerType,
              answers: payload.answers
            };
          }

          return el;
        })
      };

    case OPEN_MODAL:
      return {
        ...state,
        currentEdit: payload.name || "",
        questionId: payload.questionId
      };

    case CLOSE_MODAL:
      return {
        ...state,
        isQuestionEdit: false,
        currentEdit: "",
        questionId: ""
      };

    case RESET_FILTER_TRACK:
      return {
        ...state,
        questions: []
      };

    case EDIT_TEST_NAME:
      return {
        ...state,
        currentEdit: payload
      };

    case SAVE_TEST_NAME:
      return {
        ...state,
        currentEdit: ""
      };

    case REMOVE_TEST_SUCCSESS:
      return {
        ...state,
        currentEdit: "",
        questionId: ""
      };

    default:
      return state;
  }
};

export default questions;

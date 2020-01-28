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
  OPEN_CONFIRMATION,
  REMOVE_TEST_SUCCSESS
} from "../constants/index";

const initialState = {
  questions: [],
  isQuestionEdit: false,
  currentEdit: "",
  questionId: ''
};

export const questions = (state = initialState, action) => {
  switch (action.type) {
    case SET_TEST_QUESTIONS:
      return {
        ...state,
        questions: action.questions
      };

    case ADD_QUESTION_SUCCSESS:
      return {
        ...state,
        questions: [
          ...state.questions,
          {
            id: action.id,
            testsId: action.testId,
            question: action.question,
            answerType: action.answerType,
            answers: action.answers
          }
        ]
      };

    case REMOVE_QUESTION_SUCCSESS:
      return{
        ...state,
        questions: state.questions.filter(elem => elem.id !== action.questionId),
        questionId: '',
        currentEdit: ''
      };

    case EDITING_QUESTION:
      return {
        ...state,
        isQuestionEdit: true,
        currentEdit: state.questions
          .filter(question => question.id === action.id)
          .shift()
      };

    case SAVE_EDITED_QUESTION:
      return {
        ...state,
        isQuestionEdit: false,
        currentEdit: "",
        questions: state.questions.map(el => {
          if (el.id === action.id) {
            return {
              ...el,
              question: action.question,
              answerType: action.answerType,
              answers: action.answers
            };
          }

          return el;
        })
      };

    case CLOSE_MODAL:
      return {
        ...state,
        isQuestionEdit: false,
        currentEdit: "",
        questionId: ''
      };

    case RESET_FILTER_TRACK:
      return {
        ...state,
        questions: []
      };

      case EDIT_TEST_NAME:
        return {
          ...state,
          currentEdit: action.id
        };
  
      case SAVE_TEST_NAME:
        return {
          ...state,
          currentEdit: "",
        };

        case OPEN_CONFIRMATION:
          return {
            ...state,
            currentEdit: action.name,
            questionId: action.questionId
          }

          case REMOVE_TEST_SUCCSESS:
            return {
              ...state,
              currentEdit: '',
              questionId: ''
            }


    default:
      return state;
  }
};

export default questions;

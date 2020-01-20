import {
  ADD_TEST,
  ADD_QUESTION,
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
  EDIT_TEST_NAME,
  SAVE_TEST_NAME,
  EDITING_QUESTION,
  SAVE_EDITED_QUESTION
} from "../constants/actionConstants";

const initialState = {
  authorized: true,
  userName: "LogIn",
  admin: true,
  modal: false,
  autorisation: false,
  modalAddQuestion: false,
  addTitle: false,
  filter: false,
  filterTrack: "",
  idTest: "",
  id: "",
  currentEdit: "",
  questionEdit: false,
  users: [
    {
      name: "Капитан Админ",
      login: "admin",
      pass: "admin"
    },
    {
      name: "Вася Пупкин",
      login: "user",
      pass: "userpass"
    },
    {
      name: "Валера Долгий",
      login: "user",
      pass: "user"
    }
  ],
  tests: [
    {
      id: 0,
      testTitle: "Test 1",
      date: "2020-01-10T12:32:17.728Z",
      questions: [
        {
          id: 1322,
          answerType: "Single",
          question: "question 1?",
          answers: [
            {
              id: 1122,
              answer: "answer 1",
              currect: false
            },
            {
              id: 1123,
              answer: "answer 2",
              currect: true
            },
            {
              id: 1124,
              answer: "answer 4",
              currect: false
            }
          ],
          currectAnswer: ["answer 2"]
        },
        {
          id: 1329,
          answerType: "Some",
          question: "question 2?",
          answers: [
            {
              id: 2122,
              answer: "answer 1",
              currect: false
            },
            {
              id: 3123,
              answer: "answer 2",
              currect: true
            },
            {
              id: 4124,
              answer: "answer 4",
              currect: false
            }
          ],
          currectAnswer: ["answer 2"]
        },
        {
          id: 1324,
          answerType: "Numeric",
          question: "question 3?",
          answers: [
            {
              id: 1125,
              answer: "",
              currect: "223"
            }
          ],
          currectAnswer: ["answer 3"]
        }
      ]
    },
    {
      id: 2,
      testTitle: "Test 2",
      date: "2020-01-12T12:32:17.728Z",
      questions: []
    }
  ]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TEST:
      return Object.assign({}, state, {
        modal: false,
        addTitle: false,
        tests: [
          ...state.tests,
          {
            id: action.id,
            testTitle: action.testTitle,
            date: action.date,
            questions: []
          }
        ]
      });
    case ADD_QUESTION:
      return Object.assign({}, state, {
        modal: false,
        modalAddQuestion: false,
        tests: state.tests.map(el => {
          if (el.id === state.idTest) {
            const newId = +new Date();
            return {
              ...el,
              questions: [
                ...el.questions,
                {
                  id: newId,
                  answerType: action.answerType,
                  question: action.question,
                  answers: action.answers
                }
              ]
            };
          }
          return el;
        }),
        idTest: ""
      });

    case DELETE_TEST:
      return Object.assign({}, state, {
        tests: state.tests.filter(el => el.id !== action.id)
      });

    case ADDING_NEW_TEST:
      return {
        ...state,
        modal: true,
        addTitle: true
      };

    case CLOSE_MODAL:
      return {
        ...state,
        modal: false,
        autorisation: false,
        addTitle: false,
        modalAddQuestion: false,
        questionEdit: false,
        currentEdit: ""
      };

    case LOGIN:
      return {
        ...state,
        modal: true,
        autorisation: true
      };

    case LOGOUT:
      return {
        ...state,
        userName: "LogIn",
        admin: false,
        authorized: false
      };

    case ADMIN_LOGIN:
      return {
        ...state,
        admin: true
      };

    case AUTHORIZED:
      return {
        ...state,
        authorized: true
      };

    case SET_USER_NAME:
      return {
        ...state,
        userName: action.name
      };

    case DELETE_QUESTION:
      return Object.assign({}, state, {
        ...state,
        tests: state.tests.map(el => {
          if (el.id === action.testId) {
            return {
              ...el,
              questions: el.questions.filter(
                elem => elem.id !== action.questionId
              )
            };
          }
          return el;
        })
      });

    case SORT_BY_DATE:
      return {
        ...state,
        filter: !state.filter
      };

    case SEARCH_TEST:
      return {
        ...state,
        filterTrack: action.text
      };

    case RESET_FILTER_TRACK:
      return {
        ...state,
        filterTrack: ""
      };

    case MODAL_ADD_QUESTION:
      return {
        ...state,
        modal: true,
        modalAddQuestion: true,
        idTest: action.idTest
      };

    case SAVE_TEST_NAME:
      return {
        ...state,
        currentEdit: "",
        tests: state.tests.map(el => {
          if (el.id === action.id) {
            return {
              ...el,
              testTitle: action.name
            };
          }

          return el;
        })
      };

    case EDIT_TEST_NAME:
      return {
        ...state,
        currentEdit: action.id
      };

    case EDITING_QUESTION:
      return {
        ...state,
        modal: true,
        modalAddQuestion: true,
        questionEdit: true,
        idTest: action.id,
        id: action.questionId,
        currentEdit: state.tests
          .filter(test => test.id === action.id)
          .shift()
          .questions.filter(el => el.id === action.questionId)
          .shift()
      };

    case SAVE_EDITED_QUESTION:
      return {
        ...state,
        modal: false,
        modalAddQuestion: false,
        questionEdit: false,
        currentEdit: "",
        tests: state.tests.map(test => {
          if (test.id === state.idTest) {
            return {
              ...test,
              questions: test.questions.map(el => {
                if (el.id === state.id) {
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
          }
          return test;
        }),
        idTest: "",
        id: ""
      };

    default:
      return state;
  }
};
